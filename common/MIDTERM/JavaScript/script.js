

const btnAddHandler = document.getElementById("btnAdd")

btnAddHandler.addEventListener("click", function() {
    const firstNum = document.getElementById("firstNum").value;
    const seconDNum = document.getElementById("seconDNum").value;
    var total = parseInt(firstNum) + parseInt(seconDNum);
    document.getElementById("spanA").innerHTML = total;
})
