 // question 1
//  Install Node.js, TypeScript and VS Code on your computer.

 // question 2
 
// personal Message: Store a person’s name in a variable, and print a message to that person. . Your message should be simple, such as, “Hello
// Eric, would you like to learn some Python today?”

var username = "ayeshu"
var message  = ` hello ${username} how r you`
console.log(message)

// question 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var a  = "ayeshu"
var b = a.toLowerCase()
console.log(b)
var c = a.toUpperCase()
console.log(c)
//titlecase
 let  UserName : String = 'ayeshu'

    username.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
    console.log (username)

// question 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.

var Myname : string = "Kent Beck"
var quote : string = `My name is  ${Myname} and I said  "I’m not a great programmer; I’m just a good programmer with great habits" `; 
console.log(quote)

// question 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.Then compose your
// message and store it in a new variable called message. Print your message.

 var Famous_poet : string = `steve jobs` 
var Massage : string = `The poet ${Famous_poet} once said  
“I think everybody in this country should learn how to program a computer`
Massage+=`because it teaches you how to think"`
console.log(Massage ); 

 // question 6
 // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each 
 // chacharacter combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.Then print the name
 // after striping the white spaces.
 let StripName:any = "\tayesha\n"

 console.log("Unmodified:")
 console.log(StripName)
 
 console.log("\nUsing lstrip():")
 console.log(StripName.trim())

 // question 7
 //Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.  Be sure to enclose your
// operations in print statements to see the results.

 // In addition 
 let num1 =5+3
console.log(num1);
// In substraction 
let num2 = 11-3
console.log(num2);
// In multiplication
 let num3 = 4*2
 console.log(num3);
// In division 
let num4 = 16/2
console.log(num4); 
   
// question 8 
// You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
 
// question 9 
//  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. 
//  Print that message.
let favoritenumber : number =  11; 
var Massage : string = `My favorite number is ${favoritenumber}`
console.log( Massage); 

// question 10 
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything  
//specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.

//declartions of variables
// 0,1,2,3,4
//var userayeshus:string[] = ["ayesha","radia","fatima","ali","asif"]
// console.log(userayeshus[3]);

// declartions of numbers [0,2,3,4,5,6,]
var usernumbers : number [] = [0,10,20,30,40,50,60]
console.log(usernumbers[6]);


// question 11 
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time
[0,1,2,3,4,5,6]
let friendNames : string [] = ["zeeshan","ali"," qasim", "ahad","hamza","hassan"]
console.log(friendNames[5]);
console.log(friendNames[4]);
console.log(friendNames[3]);
console.log(friendNames[2]);
console.log(friendNames[1]);
console.log(friendNames[0]);
 
// question 12 
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text
// of each message should be the same, but each message should be personalized with the person’s name.
[0,1,2,3,4]
var names : string [] = ["ayesha","asif","hamid","raida",]
var MassageA = `asslamoalikum,${names[2]}!`
console.log(MassageA);         
var MassageB = `asslamoalikum,${names[3]}!`   
console.log(MassageB);     
var MassageC = `asslamoalikum,${names[1]}!`
console.log(MassageC);                          


 
// question 13 
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.


var transportationnNames : string [] = ["motorcycle","car " ,"aeroplane"]
var Massagelist1 = `I Would like to own a honda ${transportationnNames[0]}` 
console.log(Massagelist1); 
var Massagelist2 = `I Would like to own a ${transportationnNames[1]}`
console.log(Massagelist2);
var Massagelist3 = `I Would like to own a ${transportationnNames[2]}`
console.log(Massagelist3);

 // question 14 
 // your list to print a message to each person, inviting them to dinner.
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll
 // you’d like to invite to dinner. Then use 
var guestNames : string[] = ["maryam"," zainab","eman","kinza"]
 let inviteguest1 : string = ` hey' ${guestNames[3]},"please come to a dinner"`
 console.log(inviteguest1);
 let inviteguest2 : string = ` hey' ${guestNames[2]},"please come to a dinner"`
 console.log(inviteguest2);
let  inviteguest3 : string = ` hey' ${guestNames[1]},"please come to a dinner"`
console.log(inviteguest3);

// question 15 
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
// out a new set of invitations. You’ll have to think of someone else to invite.

 let inviteguestA : string = ` hey' ${guestNames[3]},"please come to a dinner"`
 console.log(inviteguestA);
 let inviteguestB : string = ` hey' ${guestNames[2]},"please come to a dinner"`
 console.log(inviteguestB);
 // Add a print statement at the end of your program stating the name of the guest who can’t make it
var inviteguestC : string = `hey' ${guestNames[1]}"sorry can't make it to dinner"`
console.log(inviteguestC);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting
// replace the name of guest [1]

let personCannotMakeIt: string = "ayesha";
console.log(`Ms. ${personCannotMakeIt}, cann't make it.`);

  guestNames .splice(1, 1, "Gulnaz");
for (let i=0; i<guestNames.length; i++ ){
    console.log(`Dear ${guestNames[i]}, You are cordially invited to dinner, tonight.`);
};
// question 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner

//# Initial guest list
 var guests : string[] = ["Alice", "Bob", "Charlie"]

//# Print initial invitations
var guest1  = `"hi${guests[2]},you are invited to dinner!" }`
console.log(guest1);

//# Find a bigger dinner table
 Massage=`"\nGood news! We found a bigger dinner table!\n")`
console.log(Massage); 







