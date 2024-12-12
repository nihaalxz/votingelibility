var p = document.querySelector(".eligibility");
function vote() {
    var input_box = document.getElementById("num_inp").value;

    if (input_box >= 1 && input_box <= 10) {
        p.innerHTML = "You're too young to vote!";
        p.style.color = "blue";
    }
    else if (input_box >= 11 && input_box <= 17) {
        p.innerHTML = "You can vote soon!";
        p.style.color = "yellow";

    }
    else if (input_box >= 18 && input_box <= 100) {
        p.innerHTML = "You're eligible to vote!";
        p.style.color = "green";

    }
    else if (input_box >= 101) {
        p.innerHTML = "You need special permission!";
        p.style.color = "white";
    }
    else {
        p.innerHTML = "Invalid age!";
        p.style.color = "red";
    }
}


