var date = new Date();
var date2 = new Date().toISOString().substr(0, 19).replace('T', ' ');

var nowDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate() + ' ' +
            date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' '+ date.getUTCMonth();

console.log(nowDate);
console.log(date2);