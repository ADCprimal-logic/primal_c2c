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

        <label>Child's Primary Residence:</label><br>
        <input type="text" placeholder="Street Address" id="staddress"><br>
        <input type="text" placeholder="City" id="city">
        <select>
            <option value="">Select State</option>
	        <option value="AL">Alabama</option>
	        <option value="AK">Alaska</option>
	        <option value="AZ">Arizona</option>
	        <option value="AR">Arkansas</option>
	        <option value="CA">California</option>
	        <option value="CO">Colorado</option>
	        <option value="CT">Connecticut</option>
	        <option value="DE">Delaware</option>
	        <option value="DC">District Of Columbia</option>
	        <option value="FL">Florida</option>
	        <option value="GA">Georgia</option>
	        <option value="HI">Hawaii</option>
	        <option value="ID">Idaho</option>
	        <option value="IL">Illinois</option>
	        <option value="IN">Indiana</option>
	        <option value="IA">Iowa</option>
	        <option value="KS">Kansas</option>
	        <option value="KY">Kentucky</option>
	        <option value="LA">Louisiana</option>
	        <option value="ME">Maine</option>
	        <option value="MD">Maryland</option>
	        <option value="MA">Massachusetts</option>
	        <option value="MI">Michigan</option>
	        <option value="MN">Minnesota</option>
	        <option value="MS">Mississippi</option>
	        <option value="MO">Missouri</option>
	        <option value="MT">Montana</option>
	        <option value="NE">Nebraska</option>
	        <option value="NV">Nevada</option>
	        <option value="NH">New Hampshire</option>
	        <option value="NJ">New Jersey</option>
	        <option value="NM">New Mexico</option>
	        <option value="NY">New York</option>
	        <option value="NC">North Carolina</option>
	        <option value="ND">North Dakota</option>
	        <option value="OH">Ohio</option>
	        <option value="OK">Oklahoma</option>
	        <option value="OR">Oregon</option>
	        <option value="PA">Pennsylvania</option>
	        <option value="RI">Rhode Island</option>
	        <option value="SC">South Carolina</option>
	        <option value="SD">South Dakota</option>
	        <option value="TN">Tennessee</option>
	        <option value="TX">Texas</option>
	        <option value="UT">Utah</option>
	        <option value="VT">Vermont</option>
	        <option value="VA">Virginia</option>
	        <option value="WA">Washington</option>
	        <option value="WV">West Virginia</option>
	        <option value="WI">Wisconsin</option>
	        <option value="WY">Wyoming</option>
        </select><br>
        <input type="text" placeholder="Postal / Zip Code" id="zipcode">
        <select>
			<option value="USA">United States</option>
			<option value="AFG">Afghanistan</option>
			<option value="ALA">Åland Islands</option>
			<option value="ALB">Albania</option>
			<option value="DZA">Algeria</option>
			<option value="ASM">American Samoa</option>
			<option value="AND">Andorra</option>
			<option value="AGO">Angola</option>
			<option value="AIA">Anguilla</option>
			<option value="ATA">Antarctica</option>
			<option value="ATG">Antigua and Barbuda</option>
			<option value="ARG">Argentina</option>
			<option value="ARM">Armenia</option>
			<option value="ABW">Aruba</option>
			<option value="AUS">Australia</option>
			<option value="AUT">Austria</option>
			<option value="AZE">Azerbaijan</option>
			<option value="BHS">Bahamas</option>
			<option value="BHR">Bahrain</option>
			<option value="BGD">Bangladesh</option>
			<option value="BRB">Barbados</option>
			<option value="BLR">Belarus</option>
			<option value="BEL">Belgium</option>
			<option value="BLZ">Belize</option>
			<option value="BEN">Benin</option>
			<option value="BMU">Bermuda</option>
			<option value="BTN">Bhutan</option>
			<option value="BOL">Bolivia, Plurinational State of</option>
			<option value="BES">Bonaire, Sint Eustatius and Saba</option>
			<option value="BIH">Bosnia and Herzegovina</option>
			<option value="BWA">Botswana</option>
			<option value="BVT">Bouvet Island</option>
			<option value="BRA">Brazil</option>
			<option value="IOT">British Indian Ocean Territory</option>
			<option value="BRN">Brunei Darussalam</option>
			<option value="BGR">Bulgaria</option>
			<option value="BFA">Burkina Faso</option>
			<option value="BDI">Burundi</option>
			<option value="KHM">Cambodia</option>
			<option value="CMR">Cameroon</option>
			<option value="CAN">Canada</option>
			<option value="CPV">Cape Verde</option>
			<option value="CYM">Cayman Islands</option>
			<option value="CAF">Central African Republic</option>
			<option value="TCD">Chad</option>
			<option value="CHL">Chile</option>
			<option value="CHN">China</option>
			<option value="CXR">Christmas Island</option>
			<option value="CCK">Cocos (Keeling) Islands</option>
			<option value="COL">Colombia</option>
			<option value="COM">Comoros</option>
			<option value="COG">Congo</option>
			<option value="COD">Congo, the Democratic Republic of the</option>
			<option value="COK">Cook Islands</option>
			<option value="CRI">Costa Rica</option>
			<option value="CIV">Côte d'Ivoire</option>
			<option value="HRV">Croatia</option>
			<option value="CUB">Cuba</option>
			<option value="CUW">Curaçao</option>
			<option value="CYP">Cyprus</option>
			<option value="CZE">Czech Republic</option>
			<option value="DNK">Denmark</option>
			<option value="DJI">Djibouti</option>
			<option value="DMA">Dominica</option>
			<option value="DOM">Dominican Republic</option>
			<option value="ECU">Ecuador</option>
			<option value="EGY">Egypt</option>
			<option value="SLV">El Salvador</option>
			<option value="GNQ">Equatorial Guinea</option>
			<option value="ERI">Eritrea</option>
			<option value="EST">Estonia</option>
			<option value="ETH">Ethiopia</option>
			<option value="FLK">Falkland Islands (Malvinas)</option>
			<option value="FRO">Faroe Islands</option>
			<option value="FJI">Fiji</option>
			<option value="FIN">Finland</option>
			<option value="FRA">France</option>
			<option value="GUF">French Guiana</option>
			<option value="PYF">French Polynesia</option>
			<option value="ATF">French Southern Territories</option>
			<option value="GAB">Gabon</option>
			<option value="GMB">Gambia</option>
			<option value="GEO">Georgia</option>
			<option value="DEU">Germany</option>
			<option value="GHA">Ghana</option>
			<option value="GIB">Gibraltar</option>
			<option value="GRC">Greece</option>
			<option value="GRL">Greenland</option>
			<option value="GRD">Grenada</option>
			<option value="GLP">Guadeloupe</option>
			<option value="GUM">Guam</option>
			<option value="GTM">Guatemala</option>
			<option value="GGY">Guernsey</option>
			<option value="GIN">Guinea</option>
			<option value="GNB">Guinea-Bissau</option>
			<option value="GUY">Guyana</option>
			<option value="HTI">Haiti</option>
			<option value="HMD">Heard Island and McDonald Islands</option>
			<option value="VAT">Holy See (Vatican City State)</option>
			<option value="HND">Honduras</option>
			<option value="HKG">Hong Kong</option>
			<option value="HUN">Hungary</option>
			<option value="ISL">Iceland</option>
			<option value="IND">India</option>
			<option value="IDN">Indonesia</option>
			<option value="IRN">Iran, Islamic Republic of</option>
			<option value="IRQ">Iraq</option>
			<option value="IRL">Ireland</option>
			<option value="IMN">Isle of Man</option>
			<option value="ISR">Israel</option>
			<option value="ITA">Italy</option>
			<option value="JAM">Jamaica</option>
			<option value="JPN">Japan</option>
			<option value="JEY">Jersey</option>
			<option value="JOR">Jordan</option>
			<option value="KAZ">Kazakhstan</option>
			<option value="KEN">Kenya</option>
			<option value="KIR">Kiribati</option>
			<option value="PRK">Korea, Democratic People's Republic of</option>
			<option value="KOR">Korea, Republic of</option>
			<option value="KWT">Kuwait</option>
			<option value="KGZ">Kyrgyzstan</option>
			<option value="LAO">Lao People's Democratic Republic</option>
			<option value="LVA">Latvia</option>
			<option value="LBN">Lebanon</option>
			<option value="LSO">Lesotho</option>
			<option value="LBR">Liberia</option>
			<option value="LBY">Libya</option>
			<option value="LIE">Liechtenstein</option>
			<option value="LTU">Lithuania</option>
			<option value="LUX">Luxembourg</option>
			<option value="MAC">Macao</option>
			<option value="MKD">Macedonia, the former Yugoslav Republic of</option>
			<option value="MDG">Madagascar</option>
			<option value="MWI">Malawi</option>
			<option value="MYS">Malaysia</option>
			<option value="MDV">Maldives</option>
			<option value="MLI">Mali</option>
			<option value="MLT">Malta</option>
			<option value="MHL">Marshall Islands</option>
			<option value="MTQ">Martinique</option>
			<option value="MRT">Mauritania</option>
			<option value="MUS">Mauritius</option>
			<option value="MYT">Mayotte</option>
			<option value="MEX">Mexico</option>
			<option value="FSM">Micronesia, Federated States of</option>
			<option value="MDA">Moldova, Republic of</option>
			<option value="MCO">Monaco</option>
			<option value="MNG">Mongolia</option>
			<option value="MNE">Montenegro</option>
			<option value="MSR">Montserrat</option>
			<option value="MAR">Morocco</option>
			<option value="MOZ">Mozambique</option>
			<option value="MMR">Myanmar</option>
			<option value="NAM">Namibia</option>
			<option value="NRU">Nauru</option>
			<option value="NPL">Nepal</option>
			<option value="NLD">Netherlands</option>
			<option value="NCL">New Caledonia</option>
			<option value="NZL">New Zealand</option>
			<option value="NIC">Nicaragua</option>
			<option value="NER">Niger</option>
			<option value="NGA">Nigeria</option>
			<option value="NIU">Niue</option>
			<option value="NFK">Norfolk Island</option>
			<option value="MNP">Northern Mariana Islands</option>
			<option value="NOR">Norway</option>
			<option value="OMN">Oman</option>
			<option value="PAK">Pakistan</option>
			<option value="PLW">Palau</option>
			<option value="PSE">Palestinian Territory, Occupied</option>
			<option value="PAN">Panama</option>
			<option value="PNG">Papua New Guinea</option>
			<option value="PRY">Paraguay</option>
			<option value="PER">Peru</option>
			<option value="PHL">Philippines</option>
			<option value="PCN">Pitcairn</option>
			<option value="POL">Poland</option>
			<option value="PRT">Portugal</option>
			<option value="PRI">Puerto Rico</option>
			<option value="QAT">Qatar</option>
			<option value="REU">Réunion</option>
			<option value="ROU">Romania</option>
			<option value="RUS">Russian Federation</option>
			<option value="RWA">Rwanda</option>
			<option value="BLM">Saint Barthélemy</option>
			<option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
			<option value="KNA">Saint Kitts and Nevis</option>
			<option value="LCA">Saint Lucia</option>
			<option value="MAF">Saint Martin (French part)</option>
			<option value="SPM">Saint Pierre and Miquelon</option>
			<option value="VCT">Saint Vincent and the Grenadines</option>
			<option value="WSM">Samoa</option>
			<option value="SMR">San Marino</option>
			<option value="STP">Sao Tome and Principe</option>
			<option value="SAU">Saudi Arabia</option>
			<option value="SEN">Senegal</option>
			<option value="SRB">Serbia</option>
			<option value="SYC">Seychelles</option>
			<option value="SLE">Sierra Leone</option>
			<option value="SGP">Singapore</option>
			<option value="SXM">Sint Maarten (Dutch part)</option>
			<option value="SVK">Slovakia</option>
			<option value="SVN">Slovenia</option>
			<option value="SLB">Solomon Islands</option>
			<option value="SOM">Somalia</option>
			<option value="ZAF">South Africa</option>
			<option value="SGS">South Georgia and the South Sandwich Islands</option>
			<option value="SSD">South Sudan</option>
			<option value="ESP">Spain</option>
			<option value="LKA">Sri Lanka</option>
			<option value="SDN">Sudan</option>
			<option value="SUR">Suriname</option>
			<option value="SJM">Svalbard and Jan Mayen</option>
			<option value="SWZ">Swaziland</option>
			<option value="SWE">Sweden</option>
			<option value="CHE">Switzerland</option>
			<option value="SYR">Syrian Arab Republic</option>
			<option value="TWN">Taiwan, Province of China</option>
			<option value="TJK">Tajikistan</option>
			<option value="TZA">Tanzania, United Republic of</option>
			<option value="THA">Thailand</option>
			<option value="TLS">Timor-Leste</option>
			<option value="TGO">Togo</option>
			<option value="TKL">Tokelau</option>
			<option value="TON">Tonga</option>
			<option value="TTO">Trinidad and Tobago</option>
			<option value="TUN">Tunisia</option>
			<option value="TUR">Turkey</option>
			<option value="TKM">Turkmenistan</option>
			<option value="TCA">Turks and Caicos Islands</option>
			<option value="TUV">Tuvalu</option>
			<option value="UGA">Uganda</option>
			<option value="UKR">Ukraine</option>
			<option value="ARE">United Arab Emirates</option>
			<option value="GBR">United Kingdom</option>
			<option value="UMI">United States Minor Outlying Islands</option>
			<option value="URY">Uruguay</option>
			<option value="UZB">Uzbekistan</option>
			<option value="VUT">Vanuatu</option>
			<option value="VEN">Venezuela, Bolivarian Republic of</option>
			<option value="VNM">Viet Nam</option>
			<option value="VGB">Virgin Islands, British</option>
			<option value="VIR">Virgin Islands, U.S.</option>
			<option value="WLF">Wallis and Futuna</option>
			<option value="ESH">Western Sahara</option>
			<option value="YEM">Yemen</option>
			<option value="ZMB">Zambia</option>
			<option value="ZWE">Zimbabwe</option>
		</select>

		<br><br>

		<label>What is your expected start date at C2C Kids?</label><br>
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
