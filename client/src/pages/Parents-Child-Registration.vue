<template>
  <!-- Comment -->
  <v-container fill-height fill-width fluid style="flex-wrap: wrap">
    <v-layout justify-center wrap fill-width>
      <v-stepper v-model="e6" vertical fill-width>
        <v-stepper-step :complete="e6 > 1" step="1">
          Select a Child to Re-Enroll
          <small
            >If you already have a parent account, please log in and register in
            the parent portal</small
          >
        </v-stepper-step>

        <v-stepper-content step="1">
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="value in myChildData"
                  :key="value"
                  :label="`${value.first_name} ${value.last_name}`"
                  :value="value"
                ></v-radio>
              </v-radio-group>
              <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
                color="secondary"
                @click="createParent()"
              >
                submit
              </v-btn>
              <v-btn outlined @click="e6 = 2" color="accent"> clear </v-btn>
            </form>
          </validation-observer>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Child Registration
          <small
            >If you are registering a returning camper, please log in to the
            parent portal and register the returning camper there</small
          >
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card class="mb-12">
            <validation-observer ref="observer2" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="First Name"
                  rules="required"
                >
                  <v-text-field
                    v-model="childFname"
                    :error-messages="errors"
                    label="First Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Last Name"
                  rules="required"
                >
                  <v-text-field
                    v-model="childLname"
                    :error-messages="errors"
                    label="Last Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Child's Gender"
                  rules="required"
                >
                  <v-select
                    v-model="childGender"
                    :items="genders"
                    :error-messages="errors"
                    label="Select Child's Gender"
                    data-vv-name="genders"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Date of Birth (YYYY-MM-DD)"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="childDOB"
                    type="date"
                    :error-messages="errors"
                    label="Date of Birth"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="School Attended (2020-2021)"
                  rules="required"
                >
                  <v-text-field
                    v-model="childAttended"
                    :error-messages="errors"
                    label="School Attended (2020-2021)"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Child's Grade (2020-2021)"
                  rules="required"
                >
                  <v-select
                    v-model="childGrade"
                    :items="grades"
                    :error-messages="errors"
                    label="Select Child's Grade"
                    data-vv-name="grades"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Child's Allergies ( if you child has no allergies, write 'n/a' )"
                  rules="required"
                >
                  <v-text-field
                    v-model="childAllergy"
                    :error-messages="errors"
                    label="List Child's Allergies"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Child's Medications ( if you child does not take medication, write 'n/a' ) "
                  rules="required"
                >
                  <v-text-field
                    v-model="childMeds"
                    :error-messages="errors"
                    label="List Child's Medications"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Child's Doctor's First Name"
                  rules="required"
                >
                  <v-text-field
                    v-model="childDocFname"
                    :error-messages="errors"
                    label="Child's Doctor's First Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Child's Doctor's Last Name"
                  rules="required"
                >
                  <v-text-field
                    v-model="childDocLname"
                    :error-messages="errors"
                    label="Child's Doctor's Last Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Doctor's Phone Number"
                  :rules="{
                    required: true,
                    digits: 10,
                  }"
                >
                  <v-text-field
                    v-model="childDocNum"
                    :counter="10"
                    :error-messages="errors"
                    label="Doctor's Phone Number"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-btn
                  class="mr-4"
                  type="submit"
                  :disabled="invalid"
                  color="secondary"
                  @click="
                    createChild();
                    e6 = 3;
                  "
                >
                  submit
                </v-btn>
                <v-btn outlined @click="e6 = 3" color="accent"> clear </v-btn>
              </form>
            </validation-observer>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Camp Registration
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card class="mb-12">
            <validation-provider
              v-slot="{ errors }"
              name="C2C Location"
              rules="required"
            >
              <v-select
                v-model="thislocation"
                :items="locations"
                :error-messages="errors"
                label="C2C Location"
                data-vv-name="locations"
                required
              ></v-select>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="C2C Programs"
              rules="required"
            >
              <v-select
                v-model="thisprogram"
                :items="programs"
                :error-messages="errors"
                label="What program are you enrolling your child in?"
                data-vv-name="programs"
                required
              ></v-select>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Expected Start Date"
              :rules="{
                required: true,
              }"
            >
              <v-text-field
                v-model="expectedDate"
                type="date"
                :error-messages="errors"
                label="Expected Start Date"
                required
              ></v-text-field>
            </validation-provider>
          </v-card>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4"> Payment and Waivers </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
            width="2000px"
          ></v-card>
          <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
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

const GET_CHILDREN = `
        query Parent($myParent: ID!) {
            Parent(where: {id: $myParent}){
              child {
                id
                first_name
                last_name
              }
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
  layout: "parentsdashboard",
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
      locations: ["Greenville", "Spartanburg"],
      programs: [
        "C2C Virtual School (5 Full Days)",
        "Hybrid E-learning (Full days/school pick ups as needed due to schools schedule)",
        "After School Only (School pick up-6pm only)",
        "Drop-In Attendance (Summer Camp Only)",
        "Summer Camp Only (2021)",
        "Annual Contract (June 2021 - May 2022)",
      ],
      thislocation: "",
      thisprogram: "",
      expectedDate: "",
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
          this.e6 = 2;
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
    },
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
  computed: {
    ...mapGetters({
      user: "user/getUser",
      fullname: "user/getFullname",
    }),
  },
  async asyncData() {
    try {
      var token = await localStorage.getItem("auth_token");
      var responseUser = await getUser(token);
      //console.log(responseUser);
      var childrenData = await graphql(GET_CHILDREN, {
        myParent: responseUser.decoded.id,
      });
      console.log(childrenData.data.Parent.child);
      return {
        myParentID: responseUser.decoded.id,
        myChildData: childrenData.data.Parent.child,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
