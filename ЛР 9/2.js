var step;

function Count(press){
            if (press % 2 == 1){
                confirm("Нечётное");
            }
            else {
                confirm("Чётное");
            }
}
function Dialog(){
    var choice = Number(prompt("Выберите вариант\n1 - Первый ответ\n2 - Второй ответ\n3 - Третий ответ\n4 - Четвёртый ответ",1));
    switch(choice){
        case 1:
            alert("Вы выбрали первый вариант");
            break;
        case 2:
            alert("Вы выбрали второй вариант");
            break;
        case 3:
            alert("Вы выбрали третий вариант");
            break;
        case 4:
            alert("Вы выбрали четвёртый вариант");
            break;
        default:
            alert("Неверный ввод");
    }
}
function Test(){
    return 1;
}
for (step = 0; step < 3; step++) {
    if (step == 1) continue;
    alert("Шаг for " + (step + 1));
}
step = 0;
while (step < 3){
    alert("Шаг while " + (step + 1));
    step++;
}
step = 0;
do {
    alert("Шаг do ... while " + (step + 1));
    step++;
} 
while (step < 3);
alert(Test());
