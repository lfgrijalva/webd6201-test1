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

        //Step 1.2
        //Create a new h3 element
        let h3Name  = document.createElement("h3");
        //Set the text
        h3Name.textContent = "Luis Grijalva 100719475";
        //Get the contentArea element
        let contentArea  = document.getElementById("contentArea");
        //Insert the element before the "largeButton" element
        contentArea.insertBefore(h3Name,largeButton);


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

