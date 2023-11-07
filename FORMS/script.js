
const fnameElement = document.getElementById("inputFName");
const lnameElement = document.getElementById("inputLName");
const btnSubmitElement = document.getElementById("btnSubmit")
const labelNumElement = document.getElementById("outputNum")

btnSubmitElement.addEventListener("click", () => {
    let fullName = fnameElement.value + " " + lnameElement.value;
    labelNumElement.innerHTML = "Student Name: "+fullName;
})


