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
        
        <br><br>

        <label for="location"><span>* </span>C2C Location:</label>
            <select name="cars" id="cars">
                <option value="--">--</option>
                <option value="GreenVille">Greenville</option>
                <option value="Spartanburg">Spartanburg</option>
            </select>
        
        <br><br>

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
        
        <br><br>

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
        <label for="op2"> Female</label>

        <br><br>

        <label><span>* </span>Child's Birthday</label><br>
        <select name="dob-month" id="dob-month">
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
        </select>
        <select name="dob-day" id="dob-day">
                <option value="">Day</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
        </select>
        <select name="dob-year" id="dob-year">
                <option value="">Year</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
        </select>
        
        <br><br>

        <label><span>* </span>2020-2021 School Attended</label><br>
        <input type=text id="schoolAttended">

        <br><br>

        <label><span>* </span>2020-2021 Grade Enrolled</label><br>
        <input type=text id="grade enrolled">

        <br><br>

        <label><span>* </span>Does your child require a car seat?</label>
        <br>
        <input type="radio" id="Yes" name="carSeat" value="op1">
        <label for="op1"> Yes</label><br>

        <input type="radio" id="No" name="carSeat" value="op2">
        <label for="op2"> No</label>

        <br><br>

        <label><span>* </span>Child's Allergies</label><br>
        <h6> - if your child has no allergies, write "none"</h6> 
        <textarea id="childAllergies" name="childAllergies" rows="4" cols="50"></textarea>
        
        <br><br>

        <label><span>* </span>List any medications your child is taking:</label><br>
        <h6> - if your child is not taking any medication, write "none"</h6> 
        <textarea id="childMeds" name="childMeds" rows="4" cols="50"></textarea>
        
        <br><br>

        <label><span>* </span>Child's Doctor</label><br>
        <input type=text id="doctor">

        <br><br>

        <label><span>* </span>Doctor's Phone Number:</label><br>
        <input type="text" maxlength="3" id="docNum1" size="3"> -
        <input type="text" maxlength="3" id="docNum2" size="3"> -
        <input type="text" maxlength="4" id="docNum3" size="4">

        <br><br>

        <label>Any other notes about your child:</label><br>
        <textarea id="childNotes" name="childNotes" rows="4" cols="50"></textarea>
        
        <br><br>

        <br><br>
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
