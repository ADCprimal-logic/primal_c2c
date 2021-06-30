<template>
    <!-- Comment -->
    <v-container fill-height fill-width fluid style="flex-wrap: wrap">
        <v-layout justify-center wrap fill-width>
            <v-stepper v-model="e6" vertical fill-width>
                <v-stepper-step :complete="e6 > 1" step="1">
                    Parent Registration
                    <small>
                        If you already have a parent account, please log in and register in
                        the parent portal
                    </small>
                </v-stepper-step>

                <v-stepper-content step="1">
                    <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="submit">
                            <validation-provider v-slot="{ errors }"
                                                 name="First Name"
                                                 rules="required">
                                <v-text-field v-model="parentFname"
                                              :error-messages="errors"
                                              label="First Name"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Last Name"
                                                 rules="required">
                                <v-text-field v-model="parentLname"
                                              :error-messages="errors"
                                              label="Last Name"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Phone Number"
                                                 :rules="{
                                                          required: true,
                                                          digits: 10,
                                                        }">
                                <v-text-field v-model="phoneNumber"
                                              :counter="10"
                                              :error-messages="errors"
                                              label="Phone Number"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Email"
                                                 rules="required|email">
                                <v-text-field v-model="email"
                                              :error-messages="errors"
                                              label="E-mail"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Password"
                                                 rules="required|min:8">
                                <v-text-field v-model="pw"
                                              :error-messages="errors"
                                              label="Password"
                                              required></v-text-field>
                            </validation-provider>
                            <v-btn class="mr-4"
                                   type="submit"
                                   :disabled="invalid"
                                   color="secondary"
                                   @click="e6 = 2;">

                                submit
                            </v-btn>
                            <v-btn outlined @click="clearStep1();e6 = 2" color="accent"> clear </v-btn>
                            <v-btn outlined @click="getCustomerID()" color="accent"> test </v-btn>
                        </form>
                    </validation-observer>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2">
                    Child Registration
                    <small>
                        If you are registering a returning camper, please log in to the
                        parent portal and register the returning camper there
                    </small>
                </v-stepper-step>

                <v-stepper-content step="2">
                    <v-card class="mb-12">
                        <validation-observer ref="observer2" v-slot="{ invalid }">
                            <form @submit.prevent="submit">
                                <validation-provider v-slot="{ errors }"
                                                     name="First Name"
                                                     rules="required">
                                    <v-text-field v-model="childFname"
                                                  :error-messages="errors"
                                                  label="First Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Last Name"
                                                     rules="required">
                                    <v-text-field v-model="childLname"
                                                  :error-messages="errors"
                                                  label="Last Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Gender"
                                                     rules="required">
                                    <v-select v-model="childGender"
                                              :items="genders"
                                              :error-messages="errors"
                                              label="Select Child's Gender"
                                              data-vv-name="genders"
                                              required></v-select>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Date of Birth (YYYY-MM-DD)"
                                                     :rules="{
                                                                required: true,
                                                              }">
                                    <v-text-field v-model="childDOB"
                                                  type="date"
                                                  :error-messages="errors"
                                                  label="Date of Birth"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="School Attended (2020-2021)"
                                                     rules="required">
                                    <v-text-field v-model="childAttended"
                                                  :error-messages="errors"
                                                  label="School Attended (2020-2021)"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Grade (2020-2021)"
                                                     rules="required">
                                    <v-select v-model="childGrade"
                                              :items="grades"
                                              :error-messages="errors"
                                              label="Select Child's Grade"
                                              data-vv-name="grades"
                                              required></v-select>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Allergies ( if you child has no allergies, write 'n/a' )"
                                                     rules="required">
                                    <v-text-field v-model="childAllergy"
                                                  :error-messages="errors"
                                                  label="List Child's Allergies"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Medications ( if you child does not take medication, write 'n/a' ) "
                                                     rules="required">
                                    <v-text-field v-model="childMeds"
                                                  :error-messages="errors"
                                                  label="List Child's Medications"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Doctor's First Name"
                                                     rules="required">
                                    <v-text-field v-model="childDocFname"
                                                  :error-messages="errors"
                                                  label="Child's Doctor's First Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Doctor's Last Name"
                                                     rules="required">
                                    <v-text-field v-model="childDocLname"
                                                  :error-messages="errors"
                                                  label="Child's Doctor's Last Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Doctor's Phone Number"
                                                     :rules="{
                                                        required: true,
                                                        digits: 10,
                                                      }">
                                    <v-text-field v-model="childDocNum"
                                                  :counter="10"
                                                  :error-messages="errors"
                                                  label="Doctor's Phone Number"
                                                  required></v-text-field>
                                </validation-provider>
                                <v-btn class="mr-4"
                                       type="submit"
                                       :disabled="invalid"
                                       color="secondary"
                                       @click="
                                        e6 = 3;
                                      ">
                                    submit
                                </v-btn>
                                <v-btn outlined @click="clearStep2(); e6 = 3" color="accent"> clear </v-btn>
                                <v-btn outlined @click="e6 = 1" color="accent"> back </v-btn>
                            </form>
                        </validation-observer>
                    </v-card>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3">
                    Camp Registration
                </v-stepper-step>

                <v-stepper-content step="3">
                    <v-card class="mb-12">
                        <validation-observer ref="observer3" v-slot="{ invalid }">
                            <form @submit.prevent="submit">
                                <validation-provider v-slot="{ errors }"
                                                     name="C2C Location"
                                                     rules="required">
                                    <v-select v-model="thislocation"
                                              :items="locations"
                                              :error-messages="errors"
                                              label="C2C Location"
                                              data-vv-name="locations"
                                              required></v-select>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Expected Start Date"
                                                     :rules="{
                                                        required: true,
                                                      }">
                                    <v-text-field v-model="expectedDate"
                                                  type="date"
                                                  :error-messages="errors"
                                                  label="Expected Start Date"
                                                  required></v-text-field>
                                </validation-provider>
                                <v-btn class="mr-4"
                                       type="submit"
                                       :disabled="invalid"
                                       color="secondary"
                                       @click="
                                    e6 = 4;
                                  ">
                                    submit
                                </v-btn>
                                <v-btn outlined @click="e6 = 4" color="accent"> clear </v-btn>
                                <!--clearStep3()-->
                                <v-btn outlined @click="e6 = 2" color="accent"> back </v-btn>
                            </form>
                        </validation-observer>
                    </v-card>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 4" step="4"> Payment and Waivers <small>
                        Do not click the "complete registration" button until the payment form is complete.
                    </small>
                </v-stepper-step>
                
                <v-stepper-content step="4">
                    <v-card class="mb-12">
                        <form @submit.prevent="submit">
                            <!--Shows the jotform for the location selected in step 3-->
                            <!--Spartanburg-->
                            <div v-if="thislocation == 'Spartanburg'">
                                <iframe id="JotFormIFrame-211783125722048"
                                        title="Spartanburg Registration"
                                        onload="window.parent.scrollTo(0,0)"
                                        allowtransparency="true"
                                        allowfullscreen="true"
                                        allow="geolocation; microphone; camera"
                                        src="https://form.jotform.com/211783125722048"
                                        frameborder="0"
                                        style="
          min-width: 100%;
          height:539px;
          border:none;"
                                        scrolling="no">
                                </iframe>
                                <script type="text/javascript">
                                    var ifr = document.getElementById("JotFormIFrame-211783125722048");
                                    if (ifr) {
                                        var src = ifr.src;
                                        var iframeParams = [];
                                        if (window.location.href && window.location.href.indexOf("?") > -1) {
                                            iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
                                        }
                                        if (src && src.indexOf("?") > -1) {
                                            iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                                            src = src.substr(0, src.indexOf("?"))
                                        }
                                        iframeParams.push("isIframeEmbed=1");
                                        ifr.src = src + "?" + iframeParams.join('&');
                                    }
                                    window.handleIFrameMessage = function (e) {
                                        if (typeof e.data === 'object') { return; }
                                        var args = e.data.split(":");
                                        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
                                        if (!iframe) { return; }
                                        switch (args[0]) {
                                            case "scrollIntoView":
                                                iframe.scrollIntoView();
                                                break;
                                            case "setHeight":
                                                iframe.style.height = args[1] + "px";
                                                break;
                                            case "collapseErrorPage":
                                                if (iframe.clientHeight > window.innerHeight) {
                                                    iframe.style.height = window.innerHeight + "px";
                                                }
                                                break;
                                            case "reloadPage":
                                                window.location.reload();
                                                break;
                                            case "loadScript":
                                                if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) { break; }
                                                var src = args[1];
                                                if (args.length > 3) {
                                                    src = args[1] + ':' + args[2];
                                                }
                                                var script = document.createElement('script');
                                                script.src = src;
                                                script.type = 'text/javascript';
                                                document.body.appendChild(script);
                                                break;
                                            case "exitFullscreen":
                                                if (window.document.exitFullscreen) window.document.exitFullscreen();
                                                else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
                                                else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
                                                else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
                                                else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
                                                break;
                                        }
                                        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
                                        if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                                            var urls = { "docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer) };
                                            iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
                                        }
                                    };
                                    window.isPermitted = function (originUrl, whitelisted_domains) {
                                        var url = document.createElement('a');
                                        url.href = originUrl;
                                        var hostname = url.hostname;
                                        var result = false;
                                        if (typeof hostname !== 'undefined') {
                                            whitelisted_domains.forEach(function (element) {
                                                if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) {
                                                    result = true;
                                                }
                                            });
                                            return result;
                                        }
                                    }
                                    if (window.addEventListener) {
                                        window.addEventListener("message", handleIFrameMessage, false);
                                    } else if (window.attachEvent) {
                                        window.attachEvent("onmessage", handleIFrameMessage);
                                    }
                                </script>
                            </div>
                            <!--Greenville-->
                            <div v-else-if="thislocation == 'Greenville'">

                                <iframe id="JotFormIFrame-211791018021141"
                                        title="Greenville Registration"
                                        onload="window.parent.scrollTo(0,0)"
                                        allowtransparency="true"
                                        allowfullscreen="true"
                                        allow="geolocation; microphone; camera"
                                        src="https://form.jotform.com/211791018021141"
                                        frameborder="0"
                                        style="
      min-width: 100%;
      height:539px;
      border:none;"
                                        scrolling="no">
                                </iframe>
                                <script type="text/javascript">
                                    var ifr = document.getElementById("JotFormIFrame-211791018021141");
                                    if (ifr) {
                                        var src = ifr.src;
                                        var iframeParams = [];
                                        if (window.location.href && window.location.href.indexOf("?") > -1) {
                                            iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
                                        }
                                        if (src && src.indexOf("?") > -1) {
                                            iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                                            src = src.substr(0, src.indexOf("?"))
                                        }
                                        iframeParams.push("isIframeEmbed=1");
                                        ifr.src = src + "?" + iframeParams.join('&');
                                    }
                                    window.handleIFrameMessage = function (e) {
                                        if (typeof e.data === 'object') { return; }
                                        var args = e.data.split(":");
                                        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
                                        if (!iframe) { return; }
                                        switch (args[0]) {
                                            case "scrollIntoView":
                                                iframe.scrollIntoView();
                                                break;
                                            case "setHeight":
                                                iframe.style.height = args[1] + "px";
                                                break;
                                            case "collapseErrorPage":
                                                if (iframe.clientHeight > window.innerHeight) {
                                                    iframe.style.height = window.innerHeight + "px";
                                                }
                                                break;
                                            case "reloadPage":
                                                window.location.reload();
                                                break;
                                            case "loadScript":
                                                if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) { break; }
                                                var src = args[1];
                                                if (args.length > 3) {
                                                    src = args[1] + ':' + args[2];
                                                }
                                                var script = document.createElement('script');
                                                script.src = src;
                                                script.type = 'text/javascript';
                                                document.body.appendChild(script);
                                                break;
                                            case "exitFullscreen":
                                                if (window.document.exitFullscreen) window.document.exitFullscreen();
                                                else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
                                                else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
                                                else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
                                                else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
                                                break;
                                        }
                                        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
                                        if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                                            var urls = { "docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer) };
                                            iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
                                        }
                                    };
                                    window.isPermitted = function (originUrl, whitelisted_domains) {
                                        var url = document.createElement('a');
                                        url.href = originUrl;
                                        var hostname = url.hostname;
                                        var result = false;
                                        if (typeof hostname !== 'undefined') {
                                            whitelisted_domains.forEach(function (element) {
                                                if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) {
                                                    result = true;
                                                }
                                            });
                                            return result;
                                        }
                                    }
                                    if (window.addEventListener) {
                                        window.addEventListener("message", handleIFrameMessage, false);
                                    } else if (window.attachEvent) {
                                        window.attachEvent("onmessage", handleIFrameMessage);
                                    }
                                </script>
                            </div>
                            <!--Preschool - Lyman-->
                            <div v-else-if="thislocation == 'Preschool - Lyman'">


                                <iframe id="JotFormIFrame-211784591321152"
                                        title="Preschool - Lyman"
                                        onload="window.parent.scrollTo(0,0)"
                                        allowtransparency="true"
                                        allowfullscreen="true"
                                        allow="geolocation; microphone; camera"
                                        src="https://form.jotform.com/211784591321152"
                                        frameborder="0"
                                        style="
      min-width: 100%;
      height:539px;
      border:none;"
                                        scrolling="no">
                                </iframe>
                                <script type="text/javascript">
                                    var ifr = document.getElementById("JotFormIFrame-211784591321152");
                                    if (ifr) {
                                        var src = ifr.src;
                                        var iframeParams = [];
                                        if (window.location.href && window.location.href.indexOf("?") > -1) {
                                            iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
                                        }
                                        if (src && src.indexOf("?") > -1) {
                                            iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                                            src = src.substr(0, src.indexOf("?"))
                                        }
                                        iframeParams.push("isIframeEmbed=1");
                                        ifr.src = src + "?" + iframeParams.join('&');
                                    }
                                    window.handleIFrameMessage = function (e) {
                                        if (typeof e.data === 'object') { return; }
                                        var args = e.data.split(":");
                                        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
                                        if (!iframe) { return; }
                                        switch (args[0]) {
                                            case "scrollIntoView":
                                                iframe.scrollIntoView();
                                                break;
                                            case "setHeight":
                                                iframe.style.height = args[1] + "px";
                                                break;
                                            case "collapseErrorPage":
                                                if (iframe.clientHeight > window.innerHeight) {
                                                    iframe.style.height = window.innerHeight + "px";
                                                }
                                                break;
                                            case "reloadPage":
                                                window.location.reload();
                                                break;
                                            case "loadScript":
                                                if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) { break; }
                                                var src = args[1];
                                                if (args.length > 3) {
                                                    src = args[1] + ':' + args[2];
                                                }
                                                var script = document.createElement('script');
                                                script.src = src;
                                                script.type = 'text/javascript';
                                                document.body.appendChild(script);
                                                break;
                                            case "exitFullscreen":
                                                if (window.document.exitFullscreen) window.document.exitFullscreen();
                                                else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
                                                else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
                                                else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
                                                else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
                                                break;
                                        }
                                        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
                                        if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                                            var urls = { "docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer) };
                                            iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
                                        }
                                    };
                                    window.isPermitted = function (originUrl, whitelisted_domains) {
                                        var url = document.createElement('a');
                                        url.href = originUrl;
                                        var hostname = url.hostname;
                                        var result = false;
                                        if (typeof hostname !== 'undefined') {
                                            whitelisted_domains.forEach(function (element) {
                                                if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) {
                                                    result = true;
                                                }
                                            });
                                            return result;
                                        }
                                    }
                                    if (window.addEventListener) {
                                        window.addEventListener("message", handleIFrameMessage, false);
                                    } else if (window.attachEvent) {
                                        window.attachEvent("onmessage", handleIFrameMessage);
                                    }
                                </script>
                            </div>
                            <div v-else>
                                <p>No valid location selected. Please go back</p>
                            </div>
                        </form>
                    </v-card>
                    <v-btn color="primary" @click="e6 = 5; createParent()"> Complete Registration </v-btn>
                    <v-btn outlined @click="e6 = 3" color="accent"> back </v-btn>
                </v-stepper-content>
            </v-stepper>
        </v-layout>
    </v-container>
</template>

<script>
    const CREATE_PARENT = `
        mutation createParent($firstname: String, $lastname: String, $myemail: String, $mypassword: String, $myphone: String) {
            createParent(data: {first_name: $firstname, last_name: $lastname, email: $myemail, password: $mypassword, mobile_phone: $myphone}) {
              id
            }
          }
    `;

    const CREATE_CHILD = `
        mutation createChild($firstname: String, $lastname: String, $myGender: ChildGenderType, $myGrade: ChildSchoolGradeType, $myAttended: String, $myParent: ParentRelateToManyInput) {
            createChild(data: {first_name: $firstname, last_name: $lastname, gender: $myGender, school_grade: $myGrade, school_attended: $myAttended, parent: $myParent}) {
              id
            }
          }
    `;

    const CREATE_MEDS = `
        mutation createMedicalRecord($docFname: String, $docLname: String, $docPhone: String, $birthday: String, $childAllergy: String, $childMeds: String, $mychild: ChildRelateToOneInput) {
            createMedicalRecord(data: {doctor_first_name: $docFname, doctor_last_name: $docLname, doctor_phone: $docPhone, birthdate: $birthday, allergies: $childAllergy, medications: $childMeds, child: $mychild}) {
              id
            }
          }
    `;

    const UPDATE_CHILD = `
        mutation updateChild($myChild: ID!, $myMeds: MedicalRecordRelateToOneInput) {
            updateChild(id: $myChild, data: {medical_record: $myMeds}) {
              id
            }
          }
    `;

    const UPDATE_PARENT = `
        mutation updateParent($myParent: ID!, $myChild: ChildRelateToManyInput) {
            updateParent(id: $myParent, data: {child: $myChild}) {
              id
            }
          }
    `;

    const UPDATE_CHILD_LOCATION = `
        mutation updateChild($myChild: ID!, $myLocation: LocationRelateToOneInput) {
            updateChild(id: $myChild, data: {location: $myLocation}) {
              id
            }
          }
    `;

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

    import { mapGetters } from "vuex";
    import materialCard from "~/components/material/AppCard";
    import {
        required,
        digits,
        email,
        max,
        regex,
        min,
        length,
    } from "vee-validate/dist/rules";
    import {
        extend,
        ValidationObserver,
        ValidationProvider,
        setInteractionMode,
    } from "vee-validate";
    import stripe from "stripe";

    setInteractionMode("eager");
    extend("digits", {
        ...digits,
        message: "{_field_} needs to be {length} digits. ({_value_})",
    });
    extend("length", {
        ...length,
        message: "{_field_} needs to be in MM/DD/YYY Format. ({_value_})",
    });
    extend("required", {
        ...required,
        message: "{_field_} can not be empty",
    });
    extend("max", {
        ...max,
        message: "{_field_} may not be greater than {length} characters",
    });
    extend("regex", {
        ...regex,
        message: "{_field_} {_value_} does not match {regex}",
    });
    extend("email", {
        ...email,
        message: "Email must be valid",
    });
    extend("min", {
        ...min,
        message: "{_field_} must be at least {length} characters",
    });

    export default {
        layout: "logindashboard",
        data() {
            return {
                parentid: "",
                childid: "",
                medid: "",
                parentFname: "",
                parentLname: "",
                phoneNumber: "",
                email: "",
                pw: "",
                childFname: "",
                childLname: "",
                childGender: "",
                genders: ["Male", "Female"],
                childGrade: "",
                grades: ["Kindergarden", "First", "Second", "Third", "Fourth", "Fifth"],
                childAttended: "",
                childDOB: "",
                childAllergy: "",
                childMeds: "",
                childDocFname: "",
                childDocLname: "",
                childDocNum: "",
                locations: ["Greenville", "Spartanburg", "Preschool - Lyman"],
                programs: [
                    "After School Only (School pick up-6pm only)",
                    "Drop-In Attendance (Summer Camp Only)",
                    "Summer Camp Only (2021)",
                    "Annual Contract (June 2021 - May 2022)",
                ],
                thislocation: "",
                thisprogram: "",
                expectedDate: "",
                finalLocationID: '',
                e6: 1,
            };
        },
        components: {
            materialCard,
            ValidationProvider,
            ValidationObserver,
        },

        methods: {
            async createParent() {
                const { data } = await graphql(CREATE_PARENT, {
                    firstname: this.parentFname,
                    lastname: this.parentLname,
                    myemail: this.email,
                    myphone: this.phoneNumber,
                    mypassword: this.pw,
                });
                this.parentid = data;
                try {
                    if (this.parentid.createParent.id !== null) {

                        this.createChild();
                    }
                    console.log("Parent ID: " + this.parentid.createParent.id);
                } catch (err) {
                    this.email = this.email.concat(
                        " this email is already in the database please use another"
                    );
                }
            },
            async createChild() {
                const { data } = await graphql(CREATE_CHILD, {
                    firstname: this.childFname,
                    lastname: this.childLname,
                    myGender: this.childGender,
                    myGrade: this.childGrade,
                    myAttended: this.childAttended,
                    myParent: { connect: { id: this.parentid.createParent.id } },
                });
                this.childid = data;
                console.log("Child ID: " + this.childid.createChild.id);

                this.createMeds();
            },
            async createMeds() {
                const { data } = await graphql(CREATE_MEDS, {
                    docFname: this.childDocFname,
                    docLname: this.childDocLname,
                    docPhone: this.childDocNum,
                    childMeds: this.childMeds,
                    birthday: this.childDOB,
                    childAllergy: this.childAllergy,
                    mychild: { connect: { id: this.childid.createChild.id } },
                });
                this.medid = data;

                console.log(
                    this.childid.createChild.id +
                    " and " +
                    this.medid.createMedicalRecord.id
                );

                this.connectMed2Child();
            },
            async connectMed2Child() {
                await graphql(UPDATE_CHILD, {
                    myChild: this.childid.createChild.id,
                    myMeds: { connect: { id: this.medid.createMedicalRecord.id } },
                });

                this.connectParent2Child();
            },
            async connectParent2Child() {
                await graphql(UPDATE_PARENT, {
                    myParent: this.parentid.createParent.id,
                    myChild: { connect: { id: this.childid.createChild.id } },
                });

                this.determineLocation();
            },
            submit() {
                this.$refs.observer.validate();
            },
            clearStep1() {
                this.parentFname = "";
                this.parentLname = "";
                this.phoneNumber = "";
                this.email = "";
                this.pw = "";
                this.$refs.observer.reset();
            },
            clearStep2() {
                this.childFname = "";
                this.childLname = "";
                this.childGender = "";
                this.childDOB = "";
                this.childAttended = "";
                this.childGrade = "";
                this.childAllergy = "";
                this.childMeds = "";
                this.childDocFname = "";
                this.childDocLname = "";
                this.childDocNum = "";
                this.$refs.observer.reset();
            },
            clearStep3() {
                this.thislocation = "";
                this.thisprogram = "";
                this.expectedDate = "";
                this.$refs.observer.reset();
            },
            determineLocation() {
                if (this.thislocation == "Greenville") {
                    this.finalLocationID = 11;
                } else if (this.thislocation == "Spartanburg") {
                    this.finalLocationID = 3;
                } else if (this.thislocation == "Preschool - Lyman") {
                    this.finalLocationID = 12;
                } else {
                    console.log("Location/Program could not be determined");
                }
                console.log("determine location ran");

                this.connectLocation2Child();
            },
            async connectLocation2Child() {
                await graphql(UPDATE_CHILD_LOCATION, {
                    myChild: this.childid.createChild.id,
                    myLocation: { connect: { id: this.finalLocationID } },
                });
                console.log("connect location ran");

                console.log(
                    "child ID: " +
                    this.childid.createChild.id +
                    " /// locationID: " +
                    this.finalLocationID
                );
            },
        },
        computed: {
            ...mapGetters({
                user: "user/getUser",
                fullname: "user/getFullname",
            }),
        },
    };
</script>
