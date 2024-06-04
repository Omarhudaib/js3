/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, joyb title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
var job =prompt("your job");
var contry =prompt("yuor contry");
var name=prompt("your wife name");
var children=prompt("num of your children");

function first(job,contry,name,children){
 
 return console.log("You will be a "+job+" in" +contry+ "and married to "+name+"with "+children+" kids.")
};
 first (job,contry,name,children);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
var ageof=parseInt(prompt("enter your lion age"));

function lion(age){
  console.log("lion age is "+ age*7)
}
lion(age)
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

var age=parseInt(prompt("age"));
var amount=parseInt(prompt("amount per day"));

function am(age,amount){
 let u= 100-age
  console.log((u*365)*amount)

}
am(age,amount)
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

var name=prompt("hallo");


function greet (name){
  console.log("hallo " +name)

}
greet(name);

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

function double(cat) {
  return 2 * cat;
}

function double() {
  return 2 * x;
}

function double(x) {
  return 2 * 'x';
}




/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
  return 2 * x ;
}

function double2(x){
return 2 * x;
}

function double3(x){
  return 2 * x;
}




/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
var x=parseInt(prompt("n"));
function cube(x){
  let p =x*x*x
  console.log(p)}
  cube(x);



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
var x=parseInt(prompt("n1"));
var y=parseInt(prompt("n2"));
function cube(x){
  let p =x*y
  console.log(p)}
  cube(x,y);


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
var a=parseInt(prompt("age"));
function canIGetADrivingLicense(a){
if(a>=18){console.log("yes you can");
}
else{console.log("back after"+(a-18)+"years");} }

canIGetADrivingLicense(a)


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
var a=prompt("l1");
var b=prompt("l2");
function sameLength(a,b){
  if((a.length)==(b.length)){console.log(true)}
  else{console.log(false)}
}
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

var a=parseInt(prompt("l1"));
var b=parseInt(prompt("l2"));
function largerNubmer(a,b){
  if(a>b){console.log(a)}
  else{console.log(b)}
}
largerNubmer(a,b)
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
var a=parseInt(prompt("1"));
var b=parseInt(prompt("2"));
var c=parseInt(prompt("3"));
var d=parseInt(prompt("4"));
var e=parseInt(prompt("5"));
function sNubmer(a,b,c,d,e){
  if(a<b && a<c && a<d && a<e){console.log(a)}
  if(b<a && b<c && b<d && b<e){console.log(b)}
  if(c<a && c<b && c<d && c<e){console.log(c)}
  if(d<a && d<b && d<c && d<e){console.log(d)}
  if(e<a && e<b && e<c && e<d){console.log(e)}
 
}
sNubmer(a,b,c,d,e)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
var a=(prompt("1"));
var b=(prompt("2"));
var c=(prompt("3"));
var d=(prompt("4"));
function ss(a,b,c,d){
  if((a.length)<(b.length) &&(a.length)<(c.length) &&(a.length<d.length)){console.log(a)}
  if((b.length)<(a.length) &&(b.length)<(c.length) &&(b.length)<(d.length)){console.log(b)}
  if((c.length)<(a.length) &&(c.length)<(b.length) &&(c.length)<(d.length)){console.log(c)}
  if((d.length)<(a.length) &&(d.length)<(b.length) &&(d.length)<(c.length)){console.log(d)}
 
}
ss(a,b,c,d)
/*,
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
var a=(prompt("1"));
var b=(prompt("2"));
var c=(prompt("3"));
var d=(prompt("4"));
function ss(a,b,c,d){
  if((a.length)<(b.length) &&(a.length)<(c.length)  &&(a.length)<(d.length)){console.log(a)}
  if((b.length)<(a.length) &&(b.length)<(c.length)  &&(b.length)<(d.length)){console.log(b)}
  if((c.length)<(a.length) &&(c.length)<(b.length)  &&(a.length)<(d.length)){console.log(c)}
  if((c.length)<(a.length) &&(c.length)<(b.length)  &&(a.length)<(d.length)){console.log(c)}
 
}
ss(a,b,c)
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
var x =parseInt(prompt("num"))
function isEven(x){
if(x%2==0){console.log(true);}
else{console.log(false)}
}
isEven(x);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
var x =parseInt(prompt("num"))
function isOdd(x){
if(x%2!==0){console.log(true);}
else{console.log(false)}
}
isOdd(x);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

var x =parseInt(prompt("num"))
function positive(x){
if(x<0){console.log(x*-1)}
else{console.log(x)}
}
positive(x);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
var x =prompt("fname")
var y =prompt("lname")
function n(x,y){
console.log(x +" " +y);
}
n(x ,y);

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
var a=parseInt(prompt("1"));
var b=parseInt(prompt("2"));
var c=parseInt(prompt("3"));
var d=parseInt(prompt("4"));
var e=parseInt(prompt("5"));
function sNubmer(a,b,c,d,e){
  console.log((a+b+c+d+e)/5);

 
}
sNubmer(a,b,c,d,e)

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  console.log(Math.random())
}
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
var a=parseInt(prompt("min"));
var b=parseInt(prompt("max"));
function randomN(a,b){
  console.log(Math.random()*(b-a))
}
randomN(a,b)

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
let x =parseInt(prompt("score"));
function score(x){
if(95<=x   && x<=100){console.log("A")};
if(85<=x   && x<=94){console.log("B")};
if(70<=x   && x<=84){console.log("C")};
if(50<=x   && x<=69){console.log("D")};
if(0<=x   && x<=49){console.log("F*")};
}
score(x);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var y =0;

function cont(){
console.log(y)
y++;
}
cont();
cont();


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
var y =0;

function resetcont(){
console.log(y +" and the counter reset now");
y=0;

}
cont();
cont();
resetcont();
cont();
cont();
cont();
cont();
