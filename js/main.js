function checkName(name) { 
    var regex = /^[a-zA-Z\s]{2,15}$/; 
 
    if (name != "" && regex.test(name)) { 

        return true; 
    } 
    else {

        return false; 
    } 
} 
 
function checkSurname(surname) { 
    var regex = /^[a-zA-Z\s]{2,20}$/; 
 
    if (surname != "" && regex.test(surname)) { 

        return true; 
    } 
    else { 

        return false; 
    } 
} 
 
function checkPhone(tel) { 
    var regex = /^\d{3}-(\d{3})-\d{3}$/; 
 
    if (tel != "" && regex.test(tel)) { 

        return true; 
    } 
    else {

        return false; 
    } 
}


function OrderSummary() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var tel = document.getElementById("tel").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if (checkName(name) && checkSurname(surname) && checkPhone(tel) && date != ""  && time != "") {
        alert('Заказ для ' + surname + ' ' + name + ' (телефон ' + tel + ') на '+ date + ' ' + time + ' принят.')
    }
    else {
        alert('Пожалуйста, проверьте правильность введенных данных.')
    }
}

function changeColor(identifier) {
    identifier.style.background = "green";
}

function transparent(identifier) {
    identifier.style.opacity = 0.33;
}

function removeTransparent(identifier) {
    identifier.style.opacity = 1;
}


