function checkboxFunc() {
    if(document.querySelector(".box").checked) {
        document.getElementById("p1").innerHTML = "$ 19.99";
        document.getElementById("p2").innerHTML = "$ 24.99";
        document.getElementById("p3").innerHTML = "$ 39.99";
    }
    else {
        document.getElementById("p1").innerHTML = "$ 199.99";
        document.getElementById("p2").innerHTML = "$ 249.99";
        document.getElementById("p3").innerHTML = "$ 399.99";
    }
}

checkboxFunc();