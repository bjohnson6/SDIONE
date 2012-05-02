//Bernice Johnson
//May 1, 2012
//Deliverable 1
// Planning trip to Washington D.C.

alert("Planning my trip to Washington D.C.");

//Initial variables
var           place = "Washington D.C.";
var        daughter = "Emma";
var             dog = "Mookie";
var           money = 200 ;
var           train = true ;
var    readyToLeave = true ;
var        emmaCare = true;
var      mookieCare = false;
var         myGirls = "Kylee and Emma";

//Initial output
console.log ("We are planning for our trip to " + place);
console.log ("First we need to make sure that my little girl " + daughter + " is taken care of!");



//emmaCare conditional. Did we find a babysitter for Emma?
  if (emmaCare===true){
  	 console.log("We have decided that she will be staying at her Dad's house. Awesome!"); 

  	}else{
  	  console.log("Ask other family members.");


  };
 //Initial output
   console.log("Next we need to figure out if our little pooch " + dog + " will be going with us.");

 //mookieCare conditional. Will he be going with us?
   if (mookieCare===false){
       console.log("Looks like he will be staying with a friend, we will miss him.");

     }else{
     	console.log("yes, he is coming along.");


   };

   //Initial output 
     console.log("Now we can focus on if we are still taking the train or car to get there."); 

     //train conditional. Are we still taking the train as we wanted to?
       if (train===true){
           console.log("Yay! We are taking the train, it will be nice and relaxing.");

       }else{
       	  console.log("We have to take the car because our " + dog + "is coming along.");
       };

     //Initial output
       console.log("We are looking forward to eating yummy food there and buying souvinears for "  + myGirls+".");
        
       console.log("I guess I better check and make sure we have enough money to take!");

     //money conditional. Do we have enough money to take?
       if (money===200){
       	   console.log("Yay, we have enough to take and have fun!");

       	 }else{
       	 	console.log("Looks like I better hurry up and keep saving!");
       };

       //Initial output
         console.log ("I am going to check over everything important one last time and make sure we are all ready for our trip.");
         	          
       
       //readyToLeave conditional. Is everything taken care of?
         if (readyToLeave === true){
         	 console.log("Yes! everything is decided now and we can look forward to our trip in 3 weeks!");

         	}else{
         		console.log("no, looks like I missed something, darn.");
         };


