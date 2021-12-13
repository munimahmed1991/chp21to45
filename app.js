// 1st Question
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

alert("Welcome " + fullName);


// 2nd Question
var favPhone = prompt("What is your favorite Mobile Phone?");
document.write("<h3>My favorite Phone is : " + favPhone + "</h3><br>");
document.write("<h3>Length of the String : " + favPhone.length + "</h3>");


// 3rd Question
var myCountry = "Pakistani";
document.write("<h3>String : " + myCountry + "</h3><br>");
document.write("<h3>Index of 'n' : " + myCountry.indexOf('n') + "</h3><br>");


// 4th Question
var greetings = "Hello World";
document.write("<h3>String : " + greetings + "</h3><br>");
document.write("<h3>Last Index of 'l' : " + greetings.lastIndexOf('l') + "</h3><br>");


// 5th Question
var myNationality = "Pakistan";
document.write("<h3>String : " + myNationality + "</h3><br>");
document.write("<h3>Character at Index 3 : " + myNationality.charAt(3) + "</h3><br>");


// 6th Question
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName =  firstName.concat(" ", lastName);

alert("Welcome " + fullName);


// 7th Question
var city = "Hyderabad";
document.write("<h3>City : " + city + "</h3><br>");
document.write("<h3>After Replcement : " + city.replace("Hyder","Islam") + "</h3><br>");


// 8th Question
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h3>After Replcement : " + message.replace(/and/g, "&") + "</h3><br>");


// 9th Question
var num = "472";
document.write("<h3>Value : " + num + "</h3><br>");
document.write("<h3>Type : " + typeof(num) + "</h3><br>");
num = Number(num);
document.write("<h3>Value : " + num + "</h3><br>");
document.write("<h3>Type : " + typeof(num) + "</h3><br>");


// 10th Question
var str = prompt("Enter something : ");
document.write("<h3>User Input : " + str + "</h3><br>");
document.write("<h3>Upper Case : " + str.toUpperCase() + "</h3><br>");


// 11th Question
var str = prompt("Enter something : ");
document.write("<h3>User Input : " + str + "</h3><br>");
document.write("<h3>Title Case : " + str[0].toUpperCase() + str.substring(1) + "</h3><br>");


// 12th Question
var num = 35.36 ;
document.write("<h3>Number : " + num + "</h3><br>");
num = num.toString();
document.write("<h3>Result : " + num.replace('.',"") + "</h3><br>");


// 13th Question
var userName=prompt("Enter your Username : ");
var message;
var split=[];
var arr=[];
for(var i = 0;i < userName.length; i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
    {
            message="Username is correct!";
    }
    while(arr[i]==33 || arr[i]==44 || arr[i]==46 || arr[i]==64)
    {
        alert("please enter a valid userName");
        userName=prompt("Enter your Input: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
            {
                break;
            }
        }
    }
}
alert(message);


// 14th Question
var dishes = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchDish = prompt("Welcome to ABC Bakery, what do you want to order sir/mam? ");
var found = dishes.includes(searchDish);
if(found)
{
    document.write(searchDish + " is available at index " + dishes.indexOf(searchDish) + " in our bakery");
}
else
{
    document.write("We are sorry. " + searchDish + " is not available in our bakery");
}


// 15th Question
var password = prompt("Please enter your password : ");
if (isNaN(parseInt(password[0])))
{
    if (password.length < 6) {
        alert("Your password must be at least 6 characters");
    }
    if (password.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit.");
    }
}
else  {
    alert("Password cannot begin with a number.");
}


// 16th Question
var university = "University of Karachi";
university = university.replace(/\s/g, "");
university = university.split('');
for (var i = 0; i < university.length; i++)
{
    document.write(university[i] + "<br>");
}


// 17th Question
var userInput = prompt("Please enter something : ");
document.write("User Input : " + userInput + "<br>");
document.write("Last character of input : " + userInput.charAt(userInput.length-1));


// 18th Question
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
//var count = (str.match(/the/g) || []).length;
var count = str.split("the").length - 1;
document.write("Text : " + str + "<br>");
document.write("There are " + parseInt(count) + " occurrence(s) of the word " + "'the'" + "<br>");



// 19 Question
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number > 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number should be non-negative.");
}


// 20 Question
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number <= 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number is non-negative.");
}


// 21 Question
var number = prompt("Enter a Number (positive or negative) : ");

document.write("The absolute value of : " + Math.abs(number) + "<br>");


// 22 Question
document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");

document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");


// 23 Question
var coin = Math.floor(Math.random() * 2) + 1;
if(coin == 2)
{
    document.write(coin + "<br>");
    document.write("random coin value : Heads" + "<br>");
}
else if(coin == 1)
{
    document.write(coin + "<br>");
    document.write("random coin value : Tails" + "<br>");
}


// 24 Question
document.write("random number between 1 and 100 is : " + Math.floor(Math.random() * 101) + "<br>");


// 24 Question
var weight = prompt("Enter your weight in kilograms : ");
weight = weight.split("kgs" || "kilograms");
weight = parseInt(weight);
document.write("The weight of user is : " + weight + " kilograms <br>");


// 25 Question
var secretNumber = Math.floor(Math.random() * 11) + 1;

while(userChoice != secretNumber)
var userChoice = prompt("Enter a number between 1 and 10 : ");
{
    if(parseInt(userChoice) == parseInt(secretNumber))
    {
        alert("Congrats! You guessed it right.");
    }
    else{
        alert("Sorry! Try again.");
    }
}

// 26 Question
var date=new Date();
document.write(date);

// 27 Question
var arrMonths=["January","February","March","April","May","June","July","August","September",
"October","November","December"];
var Month=new Date();
var month=Month.getMonth();
document.write("Current Month: "+arrMonths[month+1]);

// 28 Question
var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Day=new Date();
var day=Day.getDay();
var CurrentDay=arrDays[day];
CurrentDay=CurrentDay.slice(0,3);
document.write("Today is: "+CurrentDay);


// 29 Question
var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Day=new Date();
var day=Day.getDay();
var CurrentDay=arrDays[day];
CurrentDay=CurrentDay.slice(0,3);
if(CurrentDay==="Sat"||CurrentDay==="Sun")
{
    document.write("Its fun day");
}
else{
    document.write("Its a working day");
}

// 30 Question
var Date=new Date();
var date=Date.getDate();
if(date<16)
{
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

// 31 Question
var num=new Date();
var millisecondsSinceMidnight=num.getTime();
var InSeconds=(millisecondsSinceMidnight/1000);
var InMinutes=InSeconds/60;
document.write("Current date:- "+num+"<br>");
document.write("Ellapsed Milliseconds since Jan. 1, 1970:"+millisecondsSinceMidnight+"<br>");
document.write("Ellapsed Minutes since Jan. 1, 1970:"+InMinutes+"<br>");

// 32 Question
var num=new Date();
var check=num.getHours();
if(check<12)
{
    alert("Its AM");
}
else{
    alert("Its PM");
}

// 33 Question
var laterDate=new Date(2020,11,31);
document.write("Later Date: "+laterDate);

// 34 Question 
var num1=new Date(2020,3,24);
var num2=new Date();
sdr=num1.getTime();
edr=num2.getTime();
var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
document.write(num+" days have passed since "+num1);

// 35 Question
var num1=new Date(2020,0,1);
var num1c=num1.getTime();
var num2=new Date();
var num2c=num2.getTime();
var diff=num2c-num1c;
var secPassed=Math.floor((diff/1000));
document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");

// 36 Question
var currentDate=new Date();
var getHours=currentDate.getTime();
var currentTime=Math.floor(getHours/(1000*60*60));
getHours=getHours+(1000*60*60);
var incrementedTime=Math.floor(getHours/(1000*60*60));
var diff=incrementedTime-currentTime;
diff--;
var newDate=new Date();
newDate.setHours(diff);
document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

// 37 Question
var currentDate=new Date();
var currentYear=currentDate.getFullYear();
var YearBack100=currentYear-100;
var YearBack100Date=new Date();
YearBack100Date.setFullYear(YearBack100);
alert("Current Date:"+currentDate+"\n"+"100 years back it was: "+YearBack100Date);

// 38 Question
var age=prompt("Enter your age?");
age=parseInt(age);
var date=new Date();
var currentYear=date.getFullYear();
var HisAge=currentYear-age;
var dateofBirth=new Date(HisAge);
var yearDate=dateofBirth.setFullYear(HisAge);
var YearOfdateofBirth=dateofBirth.getFullYear();
document.write("Your age is: "+age+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


// 39 Question
var name=prompt("Enter your name?");
var month=prompt("Enter the month?");
var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
units=parseFloat(units);
var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
chargesPerUnit=parseFloat(chargesPerUnit);

var netAmountPayable=units*chargesPerUnit;
var NetAmountPayable=netAmountPayable.toFixed(2);
var LatePaymentSurcharge=(10/100)*NetAmountPayable;
var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
GrossAmountPayable=GrossAmountPayable.toFixed(2);

var finalUnits=units.toFixed(2);
var finalChargesPerUnit=chargesPerUnit.toFixed(2);

document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
+finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
"Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
"<br>Gross Amount Payable (After due date): "+GrossAmountPayable);



// 40 Question
function power(base,power)
{
    var p = 1;
    for (var i=0; i<power; i++) {
        p *= base;
    }
  return p;
}

alert(power(5,3));


// 41 Question
var year = prompt("Enter the year :");
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    alert("Leap year");
}
else {
    alert("Not Leap year");
}


// 42 Question
function sidesofTriangle(a,b,c)
{
    var Sum = (a + b + c)/2;
    return Sum;
}

function Area(S,a,b,c) {
    var area = S * ((S-a) * (S-b) * (S-c));
    return area;
}

let side1 = +prompt('Enter side 1: ');
let side2 = +prompt('Enter side 2: ');
let side3 = +prompt('Enter side 3: ');

var S = sidesofTriangle(side1,side2,side3);
var A = Area(S,side1,side2,side3);
alert("The area of Triangle is : " + A);


// 43 Question
function mainFunction()
{
    let firstSubjectmarks = +prompt('Enter first Subject Marks : ');
    let secondSubjectmarks = +prompt('Enter second Subject Marks : ');
    let thirdSujectmarks = +prompt('Enter third Subject Marks: ');
    var avg = Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
    alert("The average of the marks is : " + avg);
    var total = 100;
    Percentage(total,firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
}
function Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks)
{
    var avg = (firstSubjectmarks + secondSubjectmarks + thirdSujectmarks)/3;
    return avg;
}

function Percentage(total,firstSubjectmarks, secondSubjectmarks, thirdSujectmarks) 
{
    var firstSubjectPercent = (firstSubjectmarks/total)*100;
    var secondSubjectPercent = (secondSubjectmarks/total)*100;
    var thirdSujectPercent = (thirdSujectmarks/total)*100;
    alert("The percentage of first Subject is : " + firstSubjectPercent);
    alert("The percentage of second Subject is : " + secondSubjectPercent);
    alert("The percentage of third Subject is : " + thirdSujectPercent);
}

mainFunction();


// 44 Question
let myStr = prompt('Enter the String: ');
let findchar = prompt('Enter the Character to find: ');
var found = findIndex(myStr,findchar);
alert("The value found at index : " + found);

function findIndex(myStr, findchar)
{
    for(var index=0; index < myStr.length; index++)
    {
        if(myStr[index] === findchar)
        {
            return index;
        }
    }
    return -1;
}


// 45 Question
var originalSentence = prompt("Enter the sentence : ");
var sentence = removeVowels(originalSentence);
alert(sentence);

function removeVowels(sentence) 
{
    sentence = sentence.replace(/[aeiou]/ig, '');
    return sentence;
}


// 46 Question
function findVowelOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let seenVowel = false;
  
    for (const letter of str.toLowerCase()) 
    {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (seenVowel) {
              count++;
              seenVowel = false;
            } 
            else {
              seenVowel = true;
            }
            break;
          }
        default:
          seenVowel = false;
      }
    }
    return count;
}

var count = findVowelOccurrences();
alert("The number of vowels occurence is : " + count);


// 47 Question
var distance = prompt("ENter the distance between two cities in (km) : ");
kmtometers(distance);
kmtofeet(distance);
kmtoinches(distance);
kmtocm(distance);


function kmtometers(distance)
{
    var distanceinmeters = distance * 1000;
    alert("The distance in Meters is : " + distanceinmeters + " m");
}

function kmtofeet(distance)
{
    var distanceinft = distance * 3280.8399;
    alert("The distance in Feet is : " + distanceinft + " ft");
}

function kmtoinches(distance) 
{
    var distanceininches = distance * 39370.079;
    alert("The distance in Inches is : " + distanceininches + " in");
}

function kmtocm(distance) 
{
    var distanceincm = distance * 100000;
    alert("The distance in Centimeters is : " + distanceincm + " cm");
}


// 48 Question
var workingHours = prompt("Enter the working Hours : ");
var normalPayRate = 10;
var normalPay = 0;
if(workingHours > 40) {
    var overtimeHours = workingHours - 40;
    overtimePay = overtimeHours * 12;
    normalPay = 40 * normalPayRate;
    var totalPay = normalPay + overtimePay;
    alert("The overtime Pay is : " + overtimePay);
    alert("The Total Pay is : " + totalPay);
}
else{
    normalPay = workingHours * normalPayRate;
    alert("The normal Pay is : " + normalPay);
}


// 49 Question
var amount = prompt("Enter amount to withdraw : ");

var notesOf100 = parseInt(amount / 100);
var notesOf50 = parseInt((amount % 100) / 50);
var notesOf10 = ((amount % 100) % 50) / 10;
var remAmount = ((amount % 100) % 50) % 10;

alert("You will have " + notesOf100 + " hundred notes " + notesOf50 + " fifty notes " + notesOf10 + " ten notes");



// 50 Question
function showAlert() 
{
    alert("You clicked Me!");
}

function deleteRow(id)
{
    document.getElementById(id).remove();
}

function changeImage()
{
    document.getElementById("myImage").src = 'images/InfinixNote7-b.jpg';
}

function restoreImage() {
    document.getElementById("myImage").src = 'images/SamsungGalaxyA31-b.jpg';
}


var count = parseInt(document.getElementById('counter').innerHTML);

function increaseCount() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decreaseCount() {
    count--;
    document.getElementById("counter").innerHTML = count;
}