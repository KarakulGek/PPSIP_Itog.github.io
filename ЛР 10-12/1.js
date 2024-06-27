function MathFunc(){
    var x = Number(prompt("Введите x",0));
    var y = Number(prompt("Введите y",0));
    var z = Number(prompt("Введите z",0));
    try{
        var result = Math.log(Math.abs((y - Math.sqrt(Math.abs(x))) * (x - y / (z + Math.pow(x,2) / 4))));
        if (z + Math.pow(x,2) / 4 == 0){
            alert("Ошибка, на ноль делить нельзя");
            return "ОШИБКА!"
        }
    else if (y - Math.sqrt(Math.abs(x)) == 0){
            alert("Ошибка, не существует логарифма нуля");
            return "ОШИБКА!"
        }
        else return result;
        }
    catch{
        alert("Ошибка, образовалась исключительная ситуация")
        return "ОШИБКА!"
    }
}
function PrintMath(){
    document.getElementById("result").innerHTML = MathFunc();
}
function StringFunc(){
    s1 = "Я люблю Беларусь";
    s2 = "Я учусь в Политехническом колледже";
    alert("Длина второй строки: "+ s2.length);
    if (s1.includes("Гродно")) alert("Строка s1 содержит Гродно");
    else alert("Строка s1 не содержит Гродно");
    alert("Символ: " + s2[12] +"\nASCII символа: " + s2.charCodeAt(12));
}