//Украл идею у https://github.com/saadq , а тут просто дополняю ее
//и делаю что то новое для себя(учусь короче)
/*Я не уверен что тут нужно вообще хоть что то объяснять, ну да ладно
ща чёт напишем ¯\_(ツ)_/¯
*/


let clock = document.getElementById('clock'); // вытаскиваем элемент с id: clock
let color = document.getElementById('color');// вытаскиваем элемент с id: color
let amPm = document.getElementById('ampm'); // вытаскиваем элемент с id : ampm
let colorBtnRed = document.getElementById('colorBtnRed');
let colorBtnWhite = document.getElementById('colorBtnWhite');

function clockSharp (){
    let time = new Date(); // создаем объект типа Date();
    let hours = (time.getHours() % 12).toString(); // тут вроде все izi. Но % 12 делаем для того что бы время было 12-ти часовое.
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let amPmCheck = time.getHours().toString(); // создаю вторую переменную с получением времени что бы дальше ее кидать на проверку 
    /* Что бы время не было похоже на 1:2:3 , добавляем проверку и подкидываем
     еще '0' что бы получилось 01:02:03*/
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0'+ minutes;
    }
    if(seconds < 10){
        seconds = '0'+ seconds;
    }
     //проверяем время и закидываем в textContent результат;
    if(amPmCheck < 12){
        ampm.textContent = 'AM';
    }else {
        ampm.textContent = 'PM';
    }
   



   /* собираем часы вместе ¯\_(ツ)_/¯ закидывая 
   их в clockString и тоже самое с цветом */
    let clockString = hours +':' + minutes + ':' + seconds;
    let colorString = '#' + hours + minutes + seconds; 
    // меняем контент (ну тут должно быть понятно для отсталого(меня!))
    clock.textContent = clockString;
    color.textContent = colorString;
    // тут заменяем стиль body , а точнее его фон
    document.body.style.background = colorString;
}

function changeColorRed(){
 document.body.style.color = 'Red';
}
function changeColorWhite(){
    document.body.style.color = 'White';
   }

// ставим интервал 1000 милисекунд и вызываем нашу функцию clockSharp
clockSharp();
setInterval(clockSharp, 1000);

