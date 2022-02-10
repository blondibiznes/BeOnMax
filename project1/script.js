let money, time;
function start(){
 money = +prompt('Ваш бюджет в месяц?','');
 time = prompt('Введите дату в формате YYYY-MM-DD', 'Например: 17-08-2020'); 
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет в месяц?',''); 

    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true, 
};

function choseExpensive() {
    for(let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце','');
        let b = +prompt('Во с колько это вам обойдется?',''); 
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
    }
}
choseExpensive();

function detectDayBudget() {
  appData.monyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.monyPerDay + "BYN");
}
detectDayBudget();

function detectLevel() {
    if(appData.monyPerDay < 500) {
        console.log('Минимальный уровень достатка');
    } else if (appData.monyPerDay > 500 && appData.monyPerDay < 1000) {
        console.log('Средний уровень достатка');
    } else if((appData.monyPerDay > 1000 )) {
        console.log('Высокий уровень достатка');
    
    }else {
        console.log('Ошибка'); 
    }
}
detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?','');
        let percent = +prompt('Под какой процент?','');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита:' +appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for(let i = 1; i < 4; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?','');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
        
    }
}
chooseOptExpenses();
console.log('hello computer');




