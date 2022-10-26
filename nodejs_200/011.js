/**
 * isNaN
 * is Not a Number
 */

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');

const list = [isNaN123, isNaNMinus123, isNaN234, isNaNHello];
            // [false,false,false,true]
console.log(JSON.stringify(list));

