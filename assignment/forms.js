const IdElement = document.getElementById("inputId");
const fnameElement = document.getElementById("iFName");
const lnameElement = document.getElementById("iLName");
const MidElement = document.getElementById("miName"); 
const bDate = document.getElementById("birthDates"); 

const genMElement = document.getElementById("male");
const genFElement = document.getElementById("female");
const genOElement = document.getElementById("others");
const addElement = document.getElementById("addy");

const contactNum = document.getElementById("num");
const kursoElement = document.getElementById("kurso");
const btnSubmitElement = document.getElementById("btnSubmit");

const label1NumElement = document.getElementById("L1");
const label2NumElement = document.getElementById("L2");
const label3NumElement = document.getElementById("L3");
const label4NumElement = document.getElementById("L4");




btnSubmitElement.addEventListener("click", () => {
    label1NumElement.innerHTML = "<b>Student ID: </b> "+ IdElement.value;

    let fullName = fnameElement.value + " "+ MidElement.value + " " + lnameElement.value;

    let birthDate = new Date(bDate.value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    label2NumElement.innerHTML = "<br><b> Student Name: </b>"+ fullName + "<br><b> Age: </b>" + age;
    label3NumElement.innerHTML = "<br><b> Gender: </b>" + (genMElement.checked ? genMElement.value : (genFElement.checked ? genFElement.value : genOElement.value));
    label4NumElement.innerHTML = "<br><b> Addrress: </b>" + addElement.value + "<br><b> Contact Number: </b>" + contactNum.value + "<br><b> Course: </b>" + kursoElement.value;
    

})