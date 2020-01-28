/*
    Student Name  : Luis Grijalva
    StudentID     : 100719475
    Date Completed: Jan/28/2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        //Step 1, Simple DOM manipulation
        //Step 1.1
        //Get the button element
        let largeButton = document.getElementById("largeButton");
        //Change the text property
        largeButton.textContent = "Learn More";

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

