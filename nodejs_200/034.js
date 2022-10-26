/**
 * 
 * for of 문
 */


const userList = [
    {name : 'k', age : 31 , score : 80},
    {name : 'j', age : 32 , score : 90},
    {name : 'l', age : 33 , score : 100}
];


for(user of userList){
    console.log('user ', user);
}

const emptyList = [{},{},{}];

for(empty of emptyList){
    console.log('empty ', empty);
}

// const empty =  [
//     {1:1},{2:2},{3:3}
// ];

// for(e of empty){
//     console.log("empty ", e);
// }


/**
 * for each
 */

const arr = [1,2,3,4,5];
const emptyArr = [{}];

arr.forEach(a=>console.log('arr', a));

emptyArr.forEach(e=> console.log('emptyArr', e));




