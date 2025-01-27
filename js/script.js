console.log("Hello");

//Variable (jsut a name that go to memory location)
let age;
age= 19;
console.log(age);

//Constraint (can not change vaule if it is in const)
const mybd= "08.09.2003";
console.log(mybd);

//Primitive Data types
let myname = 'Nang Sreypich';
console.log(myname);

let option= true;
let height;
let eyecolor=null;
console.log(option);
console.log(height);
console.log(eyecolor);

//Reference Data types: Array
let colors = [];
colors = ['black', 'pink', 'purple'];
console.log(colors);

let numbers= [];
numbers = [1,3,2,5,4,6];
console.log(numbers[0] + numbers[5]);
console.log(numbers.sort());
numbers.push(6); //Add more data to array
console.log(numbers);

let mix=[];
mix =['one', 1, 'two', 2];
console.log(mix);

//Reference Data types: Object
let myself= {
    firstname: 'Pich',
    myage: 19,
    address: 'btb'
};
//objectname.propertyname
//objectname[propertyname]
console.log(myself.firstname);

let me= {
    firstname: 'Pich',
    myage: 19,
    address: 'btb',
    subjects: ['php', 'asp', 'laravel']
};
console.log(me.subjects[2]);

//Reference Data types: Function
function hello(){
    console.log("Hello");
}
hello();

function sum(a,b){
    console.log(a+b);
}
sum(1,3);

//If else Conditions
let number=[];
number = [1,2,1,3,4,5,3];
if(number[0] == number[2]){
    console.log("Correct");
}

if(number[3] == number[5]){
    console.log("Correct");
}
else{
    console.log("Wrong, try again");
}

//Loop Structure
let i=0;

//While loop
while(i < 5){
    console.log('Number is ' + i);
    i++;
}

//Do While loop
do{
    console.log('Number is ' + i);
    i++;
}
while(i < 5);

//For loop
for(x =0; x< 5; x++){
    console.log('Number is ' + x);
}

for(y=1; y<5; y++){
    console.log(y+ ". I am sorry");
}

//Switch Case Statement
let games= 'football';
switch(games){
    case "baseball":
        console.log("I love baseball");
        break;
    case "basketball":
        console.log("I love basketball");
        break;
    case "volleyball":
        console.log("I love volleyball");
        break;
    case "football":
        console.log("I love football");
        break;
    default:
        console.log("I love other games");
        break;
}