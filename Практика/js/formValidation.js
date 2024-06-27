//Скрипт валидации формы
function validateForm() {
    let name = document.forms["orderForm"]["name"].value;
    let phone = document.forms["orderForm"]["phone"].value;
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