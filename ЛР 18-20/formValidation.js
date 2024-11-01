//Скрипт валидации формы


function validateForm() {
    let name = document.forms["orderForm"]["name"].value;
    let phone = document.forms["orderForm"]["phone"].value;
    let email = document.forms["orderForm"]["email"].value;
    let music = "";
    let age = "";
    var inputMusic = document.getElementsByClassName('music');
    for(var i=0; inputMusic[i]; ++i){
        if(inputMusic[i].checked){
            music += inputMusic[i].value + ", ";
        }
    }
    if (music != "") music = music.slice(0,-2);
    var inputAge = document.getElementsByName('age');
    for(var i=0; inputAge[i]; ++i){
        if(inputAge[i].checked){
            age = inputAge[i].value;
            break;
        }
    }

    if (/\d/.test(name)){
        document.getElementById("errorOutput").innerHTML = "В имени не может быть цифр";
        animation(document.forms.orderForm, 350, 0);
        animation(document.forms["orderForm"]["name"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        return false;
    }
    if (/[a-zа-яё]/i.test(phone)){
        document.getElementById("errorOutput").innerHTML = "В номере телефона не может быть букв";
        animation(document.forms.orderForm, 350, 0);
        animation(document.forms["orderForm"]["phone"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        return false;
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        document.getElementById("errorOutput").innerHTML = "Некорректная почта";
        animation(document.forms.orderForm, 350, 0);
        animation(document.forms["orderForm"]["email"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        return false;
    }
    if (phone.length != 19){
        document.getElementById("errorOutput").innerHTML = "Номер телефона введён неполностью";
        animation(document.forms.orderForm, 350, 0);
        animation(document.forms["orderForm"]["phone"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        return false;
    }
    alert("Имя: " + name);
    alert("Электронная почта: " + email);
    alert("Номер телефона: " + phone);
    alert("Любимая музыка: " + music);
    alert("Возраст: " + age);
    var obj = {"name":name, "email":email, "phone":phone, "music":music, "age":age};
    var json = JSON.stringify(obj);
    localStorage.setItem('AuthentificationData', json);
    var cookie_date = new Date();
    cookie_date.setMonth(cookie_date.getMonth() + 1);
    document.cookie = "AuthentificationData=" + json + ";expires=" + cookie_date.toUTCString();

  }

function ShowLocalStorage(){
    if (localStorage.getItem('AuthentificationData') != null) alert(localStorage.getItem('AuthentificationData'));
    else alert("Локальное хранилище пустое");
}
function ClearLocalStorage(){
    if (localStorage.getItem('AuthentificationData') != null) {
        localStorage.clear();
        alert("Локальное хранилище очищено");
    }
    else alert("Локальное хранилище уже пустое");
}

function ShowCookie(){
    if (document.cookie != '') alert(document.cookie);
    else alert("Нет cookie");
}
function ClearCookie(){
    if (document.cookie != '') {
        var cookies = document.cookie.split(/;/);
    for (var i = 0, len = cookies.length; i < len; i++) {
        var cookie = cookies[i].split(/=/);
        document.cookie = cookie[0] + "=;max-age=-1";
    }
    }
    else alert("Cookie уже очищены");
}

function animation(_element, _duration, _delay){
    _element.animate(
        [
            {transform: "scale(1)", color:"#000"},
            {transform: "scale(1.1)", color:"#FF0000", offset: 0.35},
            {transform: "scale(1)", color:"#000"}
        ],{
            duration: _duration,
            delay: _delay
        }
    );
}