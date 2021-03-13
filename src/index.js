module.exports = function toReadable (number) {
        //Создаем массив,состоящий из строк от zero до nineteen
        let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
        //Создаем массив,состоящий из строк от twenty до ninety
        let ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
        let teen =['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
//Перевод числа в строку
        let numberString;
        numberString = String (number);
//Если -
        if (number < 0) return 'Error';
//Если 0
        if (number === 0) return 'zero';
//1 - 20
        if (number < 20) {
            return one[number];
        }
//Если введенное число двузначное и _0
        if (numberString.length === 2 && numberString[1] === '0') {
            return ten[numberString[0]];}
//Если введенное число двузначное
    if (numberString.length === 2)
        return ten[numberString[0]] + ' ' + one[numberString[1]];
//Если сотни
        if (numberString.length == 3 &&numberString[1] === '0'&& numberString[2] === '0' )
            return one[numberString[0]] + ' ' + 'hundred';
        //901-909
    if (numberString.length == 3 &&numberString[1] === '0' )
        return one[numberString[0]] + ' ' + 'hundred' +' '+ one[numberString[2]];
    //911-919
    if (numberString.length == 3 &&numberString[1] === '1' )
        return one[numberString[0]] + ' ' + 'hundred' +' '+ teen[numberString[2]];
  //950
   else if (numberString.length == 3 && numberString[2] === '0' )
        return one[numberString[0]] + ' '+ 'hundred'+' '+ ten[numberString[1]] ;
  //999
    else
        return one[numberString[0]] + ' '+ 'hundred' + ' ' + ten[numberString[1]] + ' ' + one[numberString[2]];
    }
