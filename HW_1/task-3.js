const ADMIN_PASSWORD = '    ';
let message, enterPass, typeNull = null, res;
enterPass = prompt('Введіть пароль');

if(enterPass == null) {
    message = 'Скасовано користувачем!';
} else if(enterPass === ADMIN_PASSWORD){
    message = 'Ласкаво просимо!'; 
} else {
    message = 'Доступ заборонений, невірний пароль!';
}
res = alert(message)
console.log(res);






