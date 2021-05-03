<template>
  <div class="app">
    <h1 class="main-heading">C2C Kids Registration</h1>
    <p class="intro-text">
      This form is for Kindergarten - 8th grade students at our Spartanburg or Greenville locations. If you would like to register for our Preschool in Lyman, please call (864) 529-9386 ext. 2 and request an appointment. Thank you!
      <br />
      <br />
      <span>* </span>- Required Fields
    </p>
    <hr class="divider" />
    <br />
    <form>
        <label><span>* </span>How did you hear about C2C Kids?</label>
            <textarea id="hearAbout" name="hearAbout" rows="4" cols="50">
            </textarea>
        <br />
        <br />
        <label for="location"><span>* </span>C2C Location:</label>
            <select name="cars" id="cars">
                <option value="--">--</option>
                <option value="GreenVille">Greenville</option>
                <option value="Spartanburg">Spartanburg</option>
            </select>
        <br />
        <br />
        <div class="border-5">
            <label for="program"><span>* </span>What program are you enrolling your child in?</label><br><br>
                <input type="radio" id="op1" name="programType" value="op1">
                <label for="op1"> C2C Virtual SChool (5 Full Days)</label><br><br>

                <input type="radio" id="op2" name="programType" value="op2">
                <label for="op2"> Hybrid E-learning (Full days/school pick ups as needed due to school's schedule)</label><br><br>

                <input type="radio" id="op3" name="programType" value="op3">
                <label for="op3"> After School Only (School pick up-6pm only)</label><br><br>

                <input type="radio" id="op4" name="programType" value="op4">
                <label for="op4"> Drop-In Attendance (Summer Camp Only)</label><br><br>

                <input type="radio" id="op5" name="programType" value="op5">
                <label for="op5"> Summer Camp Only (2021)</label><br><br>

                <input type="radio" id="op6" name="programType" value="op6">
                <label for="op6"> Annual Contract (June 2021 - May 2022)</label><br><br>
        </div>
        <br />
        <br />
        <br>
        <h3>Child's Information</h3>
        <p>Please complete 1 registration for each child.</p>
        <br>
        <label><span>* </span>Child's Name</label>
        <br>
        <input type="text" placeholder="First Name"><input type="text" placeholder="Last Name">

        <br><br>
        
        <label><span>* </span>Child's Gender</label>
        <br>
        <input type="radio" id="M" name="gender" value="op1">
        <label for="op1"> Male</label><br>

        <input type="radio" id="F" name="gender" value="op2">
        <label for="op2"> Female</label><br><br>

        <br><br>


        



        <br />
        <br />
        <input type="submit" value="Submit">
    </form>
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  padding: 0;
}

span {
    color: red;    
}
body {
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.add-item::placeholder {
  color: hsla(220, 30%, 60%, 0.8);
}
.add-item:focus {
  outline: solid 2px hsl(220, 70%, 60%);
}
.remove-item:focus {
  border-bottom: solid 2px hsl(220, 70%, 60%);
}
.remove-item {
  background: transparent;
  outline: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.app {
  margin: 20px 20px;
  padding: 20px;
  max-width: 600px;
  background: #fff;
  border-radius: 18px;
  border: solid 3px hsl(220, 70%, 60%, 0.8);
  color: hsla(220, 84%, 14%, 1);
}

@media (min-width: 550px) {
  .app {
    margin: 10vh 10vw;
    padding: 50px;
  }
}

.main-heading {
  font-weight: 900;
}

.intro-text {
  line-height: 1.5;
  color: hsla(220, 84%, 14%, 0.6);
}

.border-5 {
    border: thin solid black;
    border-radius: 5px;
    padding: 10px;

}

.divider {
  margin-top: 30px;
  margin-left: 0;
  width: 48px;
  height: 4px;
  border-width: 0;
  background-color: hsla(220, 84%, 60%, 1);
}

.form-wrapper {
  max-width: 500;
}

.app-heading {
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 50px;
}

.form-input {
  color: hsla(220, 84%, 14%, 0.6);
  padding: 12px 16px;
  font-size: 1.25em;
  width: 100%;
  border-radius: 6;
  border: 0;
  border: solid 1px hsl(220, 30%, 70%);
  background: hsl(220, 84%, 98%);
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 32px 16px;
  font-size: 1.25em;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid hsla(220, 84%, 60%, 0.32);
}

.delete-icon {
  width: 20px;
  height: 20px;
  fill: hsla(220, 84%, 60%, 1);
}
</style>
