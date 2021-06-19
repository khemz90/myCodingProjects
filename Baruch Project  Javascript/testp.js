// form validation

var mainPassword = false;

function validateFormOnSubmit(myForm) {
var WrongData = "";

WrongData = WrongData + ValidateCountryDropdown(myForm.Maincountry);
WrongData = WrongData + ValidateStateDropdown(myForm.Statesprov1);
WrongData = WrongData + ValidateUsername(myForm.names1);
WrongData = WrongData + ValidatePassword(myForm.Passwordz);
WrongData = WrongData + ValidateConfpassword1(myForm.ConfPass);
WrongData = WrongData + ValidatetheBox(myForm.Thebox);

  if (WrongData != "") {
    alert(WrongData);
    return false;
  }
  else{
      alert("Thank you the form submitted sucessfully");     
      return false; // Project asked to return false here.. otherwise it would be true
  }

}

function SelectCountry(){
var x = document.getElementById("Choosecountry1").value;

  if(x == "none"){
    document.getElementById("states").innerHTML = "<option></option>";
    document.getElementById("states").setAttribute("disabled", "disabled");
  }
  else if(x == "usa"){
    var states1 = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
    var total1 = states1.length;
    var usaStates = "<option>";

  for(var i = 0; i < total1; i++){
    usaStates = usaStates + "<option>" + states1[i] + "</option>";
  }
    usaStates = usaStates + "</option>";
    document.getElementById("states").innerHTML = usaStates;
    document.getElementById("states").removeAttribute("disabled");
  }
  else if(x == "Canada"){
    var province1 = ["Alberta","British C.","Manitoba","New Brunswick","Newfoundland and Labrador","North West Terr.","Nova Scotia","Nunavut", "Ontario", "Prince Edward Is.","Quebec","Saskatchewen","Yukon Territory"];
    var total2 = province1.length;
    var canProv = "<option>";
  for(var i = 0; i < total2; i++){
    canProv = canProv + "<option>" + province1[i] + "</option>";
  }
    canProv = canProv + "</option>";
    document.getElementById("states").innerHTML = canProv;
    document.getElementById("states").removeAttribute("disabled");
  }

}

function ValidateCountryDropdown(dat1){
var WrongData = "";
var Country2017 = dat1.value;

  if(Country2017 == "none"){
    document.getElementById("DisplayCountryerror").innerHTML = "Please select a Country";
    document.getElementById("DisplayCountryerror").style.color = "red";
    WrongData = "Please select a Country\n";
    return WrongData;
  }
  else{
    return WrongData;
  }
}

function ValidateStateDropdown(dat1){
var WrongData = "";
var StateProvin = dat1.value

  if(StateProvin == ""){
      document.getElementById("DisplayStateerror").innerHTML = "Please select a State/Province";
      document.getElementById("DisplayStateerror").style.color = "red";
      WrongData = "Please select a state or Province!\n";
      return WrongData;
  }
  else{
    return WrongData;
  }
}



function ValidateUsername(dat1){
var WrongData = "";
var name = dat1.value;
var ck_NameLen = name.length;
//im going to check using regex what should exist in the string and if it shouldnt use ! 
var ck_Alpha1 = /^[A-Za-z]/   
var ck_userSymbz = /^[A-Za-z0-9]+$/      
var ck_userNospaces = /\s/  

  if(ck_NameLen < 2 || ck_NameLen > 15){
    document.getElementById("DisplayUsererror").innerHTML = "The Username must have least 2 characters and no more than 15";
    document.getElementById("DisplayUsererror").style.color = "red";
    WrongData = "The Username must have least 2 characters and no more than 15\n";
    return WrongData;
  }
  else if(!ck_Alpha1.test(name[0])){
    document.getElementById("DisplayUsererror").innerHTML = "The first character must be alphabetical";
    document.getElementById("DisplayUsererror").style.color = "red";
    WrongData = "The first character must be alphabetical\n";
    return WrongData;
  }
  else if(ck_userNospaces.test(name)){
    document.getElementById("DisplayUsererror").innerHTML = "Username must not contain spaces!";
    document.getElementById("DisplayUsererror").style.color = "red";
    WrongData = "Username must not contain spaces!\n";
    return WrongData;
  }
  else if(!ck_userSymbz.test(name)){
    document.getElementById("DisplayUsererror").innerHTML = "Username must not contain symbolz!";
    document.getElementById("DisplayUsererror").style.color = "red";
    WrongData = "Username must not contain symbolz!\n";
    return WrongData;
  }
    return WrongData;
}

function PasswordChecknow(){
var Passvalid1 = document.getElementById("Pass1").value;
var ck_Length1 = Passvalid1.length;
//im going to check using regex what should exist in the string
var ck_Caps = /[A-Z]/             
var ck_Lowcase = /[a-z]/
var ck_Numbz = /[0-9]/
var ck_Symbz = /[^a-zA-Z0-9]/
var ck_Nospace = /\s/ 
var TestUsernamez = document.getElementById("UsernameId").value; 
var test1 = (Passvalid1.indexOf(TestUsernamez)>=0); 


  if(ck_Length1 < 8 || ck_Length1 > 16){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 8 characters and no more than 16";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  }
  else if(!ck_Caps.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 capital letter";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  }
  else if(!ck_Lowcase.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 lowercase letter";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  } 
  else if(!ck_Numbz.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 number";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  } 
  else if(!ck_Symbz.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 symbol";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  } 
  else if(ck_Nospace.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must not contain spaces";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  } 
   else if(test1 == true){
    document.getElementById("DisplayPerror").innerHTML = "Password must not contain the username";
    document.getElementById("DisplayPerror").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  }
   else{ 
    document.getElementById("DisplayPerror").innerHTML = "This password meets the requirements!";
    document.getElementById("DisplayPerror").style.color = "green";
    document.getElementById("sub1").removeAttribute("disabled", "disabled");
    mainPassword = true;
  }

}

function ValidatePassword(dat1){
var WrongData = "";
var Passvalid1 = dat1.value;
var ck_Length1 = Passvalid1.length;
//im going to check using regex what should exist in the string
var ck_Caps = /[A-Z]/             
var ck_Lowcase = /[a-z]/
var ck_Numbz = /[0-9]/
var ck_Symbz = /[^a-zA-Z0-9]/
var ck_Nospace = /\s/  
var TestUser1 = document.getElementById("UsernameId").value;
var Testpass1 = (dat1.value.indexOf(TestUser1)>=0); //index of returns a -1 if found otherwise 0 or positive



  if(ck_Length1 < 8 || ck_Length1 > 16){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 8 characters and no more than 16";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData = "Password must have at least 8 characters and no more than 16\n";
    return WrongData;
  }
  else if(!ck_Caps.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 capital letter";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData = "Password must have at least 1 capital letter\n";
    return WrongData;
  }
  else if(!ck_Lowcase.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 lowercase letter";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData = "Password must have at least 1 lowercase letter\n";
    return WrongData;
  }
  else if(!ck_Numbz.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 number";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData ="Password must have at least 1 number\n";
    return WrongData;
  } 
  else if(!ck_Symbz.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must have at least 1 symbol";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData ="Password must have at least 1 symbol\n";
    return WrongData;
  } 
  else if(ck_Nospace.test(Passvalid1)){
    document.getElementById("DisplayPerror").innerHTML = "Password must not contain spaces";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData = "Password must not contain spaces\n";
    return WrongData;
  }
    else if(Testpass1 == true){
    document.getElementById("DisplayPerror").innerHTML = "Password must not contain the Username";
    document.getElementById("DisplayPerror").style.color = "red";
    WrongData = "Password must not contain the Username\n";
    return WrongData;
  } 
  else{
    return WrongData;
  }

}

function ConfirmingPass(){
var Confpass = document.getElementById("Pass2").value
var Confpassmatched = document.getElementById("Pass1").value;
  if(Confpass != Confpassmatched){
    document.getElementById("DisplayConfpass").innerHTML = "The confirm password does not match the password please Re-enter";
    document.getElementById("DisplayConfpass").style.color = "red";
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  }
  else{
    document.getElementById("DisplayConfpass").innerHTML = "The confirm password matches!";
    document.getElementById("DisplayConfpass").style.color = "green";
  }

}

function ValidateConfpassword1(dat1){
var WrongData = "";
var Confirmingmatch1 = dat1.value;
var Originalpass = document.getElementById("Pass1").value;
  if(Confirmingmatch1 != Originalpass){
    document.getElementById("DisplayConfpass").innerHTML = "The confirm password does not match the password please Re-enter";
    document.getElementById("DisplayConfpass").style.color = "red";
    WrongData = "The confirm password does not match the password please Re-enter\n";
    return WrongData;
  }
  else{
    return WrongData;
  }

}

function validateBox(){
//this will get the iagree checkbox and assign checkbox1 a value of true or false 
var checkBox1 = document.getElementById("iAgree").checked;
  if(mainPassword == false){
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  }
  else if(checkBox1 == false){
    document.getElementById("sub1").setAttribute("disabled", "disabled");
  }
  else if(checkBox1 == true){
    document.getElementById("sub1").removeAttribute("disabled", "disabled");
  } 

} 

function ValidatetheBox(dat1){
var WrongData = "";
var CheckedorNo = dat1.checked;
  if(CheckedorNo == false){
    document.getElementById("Displayboxerror").innerHTML = "Please check the agree box";
    document.getElementById("Displayboxerror").style.color = "red";
    WrongData = "Please check the agree box";
    return WrongData;
  }
  else{
    return WrongData;
  }

}


//Javascript used for OBJECT MOVEMENT below

var id;
var id1;
var id2;
var elem;
var pixCounter;
var pixCounter1;

function myMove() {
    clearInterval(id1);
    clearInterval(id);
    clearInterval(id2);
    elem = document.getElementById("animate"); 
    var pos = 0;
    id = setInterval(frame, 30);

    function frame() {
        if (pos == 350) {   
            
            pos = 0;
            
        } else {
            pos++; 
            elem.style.bottom = pos + 'px'; 
            elem.style.left = pos + 'px'; 
            
            pixCounter = pos;
            
        }
    }
}

function myMove1() {
     clearInterval(id);
     clearInterval(id1);
     clearInterval(id2);
     elem = document.getElementById("animate"); 
     //var pos = 350;
     id1 = setInterval(frame, 30);
    
     function frame() {
        if (pixCounter == 0) {   
            
            pixCounter = 350;
            
        } 
        else{
          --pixCounter; 
            elem.style.bottom = pixCounter + 'px'; 
            elem.style.left = pixCounter + 'px'; 

            pixCounter1 = pixCounter;
              
        }            
    }
}

function myMove3() {
     clearInterval(id);
     clearInterval(id1);
     clearInterval(id2);
     elem = document.getElementById("animate"); 
     //var pos = 350;
     id2 = setInterval(frame, 30);

     
     function frame() {
        if (pixCounter1 == 350) {   
             pixCounter1 = 0;
            } 
        else{
            pixCounter1++; 
            elem.style.bottom = pixCounter1 + 'px'; 
            elem.style.left = pixCounter1 + 'px'; 

            pixCounter = pixCounter1;
        }
        
    }

}

//Sending and retrieving data part C

window.onload = init;

function init() {   getStateData();}

function getStateData() {
    var request = new XMLHttpRequest();
    request.open("GET", "country1.json");
    request.onreadystatechange = function() {
        var Countrysel = document.getElementById("PopStateProv");       
        if (this.readyState == this.DONE && this.status == 200)  {
            if (this.responseText != null) {Countrysel.innerHTML = parseJSON(this.responseText); }
            else { Countrysel.innerHTML = "Error: no data"; }

        }
  };
   request.send();
} 


function parseJSON(val) {
//Check if canada or usa is selected.
var Select1 = document.getElementById("coun").value;

    if(Select1 == "Us1"){

    var usaStates = "<option>";
    var typ=JSON.parse(val);

        for (var i = 0; i < typ.USA.length; i++) {
        usaStates = usaStates + "<option>" + typ.USA[i] + "</option>";
        }
        usaStates = usaStates + "</option>";
        return usaStates;
    }
    if(Select1 == "Can1"){
         var Canprov = "<option>";
         var typ=JSON.parse(val);

        for (var i = 0; i < typ.CAN.length; i++) {
        Canprov = Canprov + "<option>" + typ.CAN[i] + "</option>";
        }
        Canprov = Canprov + "</option>";
        return Canprov;
    }

}


//Loading weather forcast using jsonp 
function doRequest() {
    var url       = "https://query.yahooapis.com/v1/public/yql";      
    var city  = document.getElementById('city').value;

    if (document.getElementById('test').checked)
        var query = "select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text='" + city + "' limit 1)";

    var param = 'q=' + query + "&format=json&env=store://datatables.org/alltableswithkeys&callback=parseResponse";
    if (document.getElementById('req').checked)
        alert("REQUEST:\n" + url + '?' + param);
    var head      = document.getElementsByTagName('head')[0];   //access the head tag 
    var script    = document.createElement('script');           //create a script element
    var url_param = url + '?' + param;                          //append URL?param
    script.setAttribute('src',url_param);                       //set the <script src= attribute value
    head.appendChild(script);                                   //append the script to the head tag
}

function parseResponse(response) {
    str = JSON.stringify(response);

    if (document.getElementById('resp').checked)
        alert("RESPONSE:\n" + str);

Displayfore="";
forecast0 = response.query.results.channel.location.city
forecast1 = response.query.results.channel.item.title
forecast2 = response.query.results.channel.item.condition.date
forecast3 = response.query.results.channel.item.condition.temp
forecast4 = response.query.results.channel.item.forecast[0].high
forecast5 = response.query.results.channel.item.forecast[0].low
forecast6 = response.query.results.channel.item.forecast[0].text

Displayfore = forecast0 + "</br>" + forecast1 + "</br>" + forecast2 + "</br> Current Temperature:" + forecast3 + " Degrees"+  "</br>High: " + forecast4 + " low: " + forecast5 + " Text: " + forecast6;

document.getElementById('output1').innerHTML = Displayfore;

}


//changing styles - css

function checkMed() {
    if(document.getElementById("medium").checked = true){

         document.getElementById("output1").style.color = "black";
         document.getElementById("output1").style.backgroundColor = "white";
         document.getElementById("output1").style.fontSize = "18pt";
         document.getElementById("output1").style.fontFamily = "Verdana, Geneva, sans-serif";
    } 

}

function checkSmall() {
    if(document.getElementById("Small").checked = true){

         document.getElementById("output1").style.color = "white";
         document.getElementById("output1").style.backgroundColor = "black";
         document.getElementById("output1").style.fontSize = "8pt";
         document.getElementById("output1").style.fontFamily = "Comic Sans MS, cursive, sans-serif";

    } 

}

function checkLarge() {
    if(document.getElementById("large").checked = true){

         document.getElementById("output1").style.color = "green";
         document.getElementById("output1").style.backgroundColor = "red";
         document.getElementById("output1").style.fontSize = "48pt";
         document.getElementById("output1").style.fontFamily = "Courier New, Courier, monospace";

    } 

}

//widgets part of project

$(function() {
            $( "#draggable" ).draggable();
         });
     

$(function() {
            $( "#datepicker" ).datepicker();
         });

$(function() {
            $( document ).tooltip();
         });