<template>
    <!-- Comment -->
    <v-container>
        <v-layout justify-center
                  wrap>
            <div class='app' v-if="todos">
                <div v-if="todos.location">
                    <div v-if="todos.location.name == 'Greenville'">
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y19idnJoN2VmMzc3bGhsYXZuNnJua2FzcGc3b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23D50000"
                                tyle="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div v-else-if="todos.location.name == 'Spartanburg'">
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y19yODc4cDlzbmQ2ZGwxZGZ0MHA2bmRqa2c0Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23EF6C00"
                                style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div v-else>
                        <p>No Calendar found for your location!</p>
                    </div>
                </div>
                <div v-else>
                    <p>You are not associated with a location!</p>
                </div>
            </div>
            <div v-else>
                <p>Staff Member not found!</p>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    const GET_TODOS = `
      query getStaff($myid: StaffMemberWhereUniqueInput!) {
        StaffMember(where: $myid) {
          id
          location {
            id
            name
          }
        }
      }
  `;

    function graphql(query, variables = {}) {
        return fetch("http://100.25.45.227:3000/admin/api", {
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
        return fetch("http://100.25.45.227:3000/api/auth/user/", {
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

    import materialCard from '~/components/material/AppCard'
    import materialChartCard from '~/components/material/AppChartCard'
    import materialStatsCard from '~/components/material/AppStatsCard'


    export default {
        layout: 'frontdeskdashboard',
        middleware: 'authentication',
        components: {
            materialCard,
            materialChartCard,
            materialStatsCard,
        },
        async asyncData() {
            try {
                var token = await localStorage.getItem("auth_token");
                var responseUser = await getUser(token);
                const { data } = await graphql(GET_TODOS, {
                    myid: { id: responseUser.decoded.id },
                });
                console.log(responseUser.decoded.id);
                return {
                    myStaffID: responseUser.decoded.id,
                    todos: data.StaffMember,
                };
            } catch (err) {
                console.log(err);
            }
        },
    }
</script>
