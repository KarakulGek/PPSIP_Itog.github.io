document.cookie = 123;
var allCookies = document.cookie;

setInterval(PrintCookie, 2000);
function PrintCookie(){
    const parent = document.getElementById("zad2");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = allCookies;
    newDiv.onclick = function(){
        FirstRemove(this);
};
    parent.appendChild(newDiv);
};
function FirstRemove(elem){
    if (elem == document.getElementById("zad2").children[0]) {
        elem.remove();
    }
}
function ActivateStyle(){
    document.body.style.backgroundImage = "url(Background.png)";
    document.body.style.fontFamily = "Arial";
    document.body.style.fontSize = "11pt";
    document.body.style.color = "red";
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        links[i].style.color = "green";  
    }  
}
function OS(){
    osversion = navigator.appVersion;
    win = window.open("", "OS version","left=100,top=100,width=400,height=300");
    win.document.body.innerHTML = osversion;
    setTimeout(CloseOS,3000)
}
function CloseOS(){
    win.close();
}
function ShowPassword(elem){
    var x = document.forms["RegisterForm"]["password"];
    if (x.type === "password") {
        x.type = "text";
        elem.innerHTML="Скрыть пароль"
    } else {
        x.type = "password";
        elem.innerHTML="Показать пароль"
    }
    this.innerHTML=""
}
function validateForm() {
    let name = document.forms["RegisterForm"]["name"].value;
    let password = document.forms["RegisterForm"]["password"].value;
    let phone = document.forms["RegisterForm"]["phone"].value;
    let email = document.forms["RegisterForm"]["email"].value;
    document.forms["RegisterForm"]["password"].style = "border-color: none";
    document.forms["RegisterForm"]["phone"].style = "border-color: none";
    document.forms["RegisterForm"]["email"].style = "border-color: none";
    document.forms["RegisterForm"]["name"].style = "border-color: none";
    if (name.length == 0){
        document.getElementById("errorOutput").innerHTML = "Введите имя";
        animation(document.forms["RegisterForm"]["name"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["name"].style = "border-color: red";
        return false;
    }
    if (phone.length == 0){
        document.getElementById("errorOutput").innerHTML = "Введите телефон";
        animation(document.forms["RegisterForm"]["phone"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["phone"].style = "border-color: red";
        return false;
    }
    if (email.length == 0){
        document.getElementById("errorOutput").innerHTML = "Введите электронную почту";
        animation(document.forms["RegisterForm"]["email"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["email"].style = "border-color: red";
        return false;
    }
    if (password.length == 0){
        document.getElementById("errorOutput").innerHTML = "Введите пароль";
        animation(document.forms["RegisterForm"]["password"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["password"].style = "border-color: red";
        return false;
    }
    if (name.length < 3 & name.length > 0){
        document.getElementById("errorOutput").innerHTML = "Имя не может быть меньше 3 символов";
        animation(document.forms["RegisterForm"]["name"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["name"].style = "border-color: red";
        return false;
    }
    if (phone.length < 4 & phone.length > 0){
        document.getElementById("errorOutput").innerHTML = "Телефон не может быть меньше 4 символов";
        animation(document.forms["RegisterForm"]["phone"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["phone"].style = "border-color: red";
        return false;
    }
    if (email.length < 7 & email.length > 0){
        document.getElementById("errorOutput").innerHTML = "Электронная почта не может быть меньше 7 символов";
        animation(document.forms["RegisterForm"]["email"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["email"].style = "border-color: red";
        return false;
    }
    if (/\d/.test(name)){
        document.getElementById("errorOutput").innerHTML = "В имени не может быть цифр";
        animation(document.forms["RegisterForm"]["name"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["name"].style = "border-color: red";
        return false;
    }
    if (/[a-zа-яё]/i.test(phone)){
        document.getElementById("errorOutput").innerHTML = "В номере телефона не может быть букв";
        animation(document.forms["RegisterForm"]["phone"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["phone"].style = "border-color: red";
        return false;
    }
    if (!email.includes("@")){
        document.getElementById("errorOutput").innerHTML = "Некорректная электронная почта";
        animation(document.forms["RegisterForm"]["email"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["email"].style = "border-color: red";
        return false;
    }
    if (password.length < 8){
        document.getElementById("errorOutput").innerHTML = "Пароль должен быть не менее 8 символов";
        animation(document.forms["RegisterForm"]["password"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["password"].style = "border-color: red";
        
        return false;
    }
    if (password.length > 20){
        document.getElementById("errorOutput").innerHTML = "Пароль должен быть не более 20 символов";
        animation(document.forms["RegisterForm"]["password"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["password"].style = "border-color: red";
        return false;
    }
    if (!/[a-zа-яё]/i.test(password) || !/\d/i.test(password)){
        document.getElementById("errorOutput").innerHTML = "В пароле должна быть как минимум одна буква и цифра";
        animation(document.forms["RegisterForm"]["password"], 400, 350);
        animation(document.getElementById("errorOutput"), 400, 350);
        document.forms["RegisterForm"]["password"].style = "border-color: red";
        return false;
    }
  }
function animation(_element, _duration, _delay){
    _element.animate(
        [
            {transform: "scale(1)"},
            {transform: "scale(1.1)", color:"#FF0000", offset: 0.35},
            {transform: "scale(1)"}
        ],{
            duration: _duration,
            delay: _delay
        }
    );
}
