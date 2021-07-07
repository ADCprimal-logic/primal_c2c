<template>
    <!-- Comment -->
    <v-container>
        <v-layout justify-center
                  wrap>
            <div class='app' v-if="todos.child">
                <div v-if="todos.child[0].location">
                    <div v-if="todos.child[0].location.name == 'Greenville'">
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y19idnJoN2VmMzc3bGhsYXZuNnJua2FzcGc3b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23D50000"
                                tyle="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div v-else-if="todos.child[0].location.name == 'Spartanburg'">
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y19yODc4cDlzbmQ2ZGwxZGZ0MHA2bmRqa2c0Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23EF6C00"
                                style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div v-else>
                        <p>Something went wrong!</p>
                    </div>
                </div>
                <div v-else>
                    <p>Your child is not associated with a location!</p>
                </div>
            </div>
            <div v-else>
                <p>You have no child associated with your account!</p>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    const GET_TODOS = `
        query getParent($myid: ParentWhereUniqueInput!) {
          Parent(where: $myid) {
            child {
              id
              location {
                id
                name
              }
            }

          }
        }
    `;

    import materialCard from '~/components/material/AppCard'
    import materialChartCard from '~/components/material/AppChartCard'
    import materialStatsCard from '~/components/material/AppStatsCard'

    function graphql(query, variables = {}) {
        return fetch("http://localhost:3000/admin/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                variables,
                query,
            }),
        }).then(function (result) {
            return result.json();
        });
    }

    function getUser(data) {
        return fetch("http://localhost:3000/api/auth/user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data,
            }),
        }).then(function (result) {
            //console.log(result);
            return result.json();
        });
    }

    export default {
        layout: 'parentsdashboard',
        middleware: 'authentication',
        components: {
            materialCard,
            materialChartCard,
            materialStatsCard,
        },
        data() {
            return {
                mylocation: '',
            }
        },
        async asyncData() {
            try {
                var token = await localStorage.getItem("auth_token");
                var responseUser = await getUser(token);
                const { data } = await graphql(GET_TODOS, {
                    myid: { id: responseUser.decoded.id },
                });
                console.log(data.Parent);
                return {
                    myParentID: responseUser.decoded.id,
                    todos: data.Parent,
                };
            } catch (err) {
                console.log(err);
            }
        },
    }
</script>
