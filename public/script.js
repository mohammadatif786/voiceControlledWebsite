function reload()
{
    location.reload();
}
    // Initialize recognition when the page loads
    document.addEventListener("DOMContentLoaded", function () {
        initializeRecognition();
    });

function initializeRecognition() {

    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        // document.write("You said: " + recognizedText);

        // Now you can use the recognizedText in your application
        processRecognizedText(recognizedText);
        loginProcessRecognizedText(recognizedText);
        registerProcessRecognizedText(recognizedText);
        cssStyling(recognizedText);

        // Continue recognition after a short pause
        setTimeout(function () {
            recognition.start();
        }, 1000); // Wait for 1 second before starting recognition again
    };

    // Start recognition initially
    recognition.start();
}


function processRecognizedText(text) {
    // Here, you can implement logic to use the recognized text in your application
   if(text.toLowerCase() == 'refresh')
    {
        reload();
    }else if (text.toLowerCase() === "home")
    {
        window.location.href="/"
    }else if(text.toLowerCase() == "about")
    {
        window.location.href="about";
    }else if(text.toLowerCase() == "login")
    {
        window.location.href="login";
    }else if(text.toLowerCase() == "register")
    {
        window.location.href="register";
    }
    // else if(text.toLowerCase() == "hello")
    // {
    //     window.location.href = "page not found"
    // }
}
initializeRecognition()

//   login section

let userNameInput = document.getElementById("userNameInput");
let passwordInput = document.getElementById("passwordInput");

function loginProcessRecognizedText(text)
{
    if (text == "username")
    {
        focusEmailInput();

    }else if(text == "password")
    {
        focusPasswordInput();
    }
    else if(text == 'submit')
    {
        document.write("form-submit");
    }
}
function focusEmailInput()
{
    if (userNameInput)
    {
        userNameInput.focus(); // Focus the email input field
        userNameInput.select(); // Highlight the content in the input field
    }
}
function focusPasswordInput()
{
    if(passwordInput)
    {
        passwordInput.focus();
        passwordInput.select();
    }
}

loginProcessRecognizedText()

//  Register Section

let NameInput = document.getElementById("NameInput");
let ganderMale = document.getElementById("ganderMale");
let ganderFeMale = document.getElementById("ganderFeMale");
let passInput = document.getElementById("passInput");

function registerProcessRecognizedText(text)
{
    if (text == "name")
    {
        focusNameInput();

    }else if(text == "password")
    {
        regFocusPasswordInput();
    }else if(text == 'submit')
    {
        document.write("form-submit");
    }
}
function focusNameInput()
{
    if (NameInput)
    {
        NameInput.focus(); // Focus the email input field
        NameInput.select(); // Highlight the content in the input field
    }
}
function regFocusPasswordInput()
{
    if(passInput)
    {
        passInput.focus();
        passInput.select();
    }
}
registerProcessRecognizedText()


const changeColorButton = document.getElementById("changeColorButton");

// changeColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(color) {
    const colors = ["red", "blue", "green", "yellow", "white","orange", "pink"];

    if (colors.includes(color)) {
        document.body.style.backgroundColor = color;
    } else {
        console.log("Color not recognized or not supported.");
    }
}

function changeTextColor(color) {
    const colors = ["red", "black", "white", "yellow", "orange", "pink"];

    if (colors.includes(color)) {
        document.getElementById("contentContainer").style.color = color;
    } else {
        console.log("Color not recognized or not supported.");
    }
}

//   CSS Styleing
function cssStyling(text)
{
    if(text == "background red")
    {
        color = "red";
        changeBackgroundColor(color);
    }
    else if(text == "background white")
    {
        color = "white";
        changeBackgroundColor(color);
    }else if(text == "background green")
    {
        color = "green";
        changeBackgroundColor(color);
    }else if(text == "text white")
    {
        color = "white";

        changeTextColor(color);
    }
    else if(text == "text black")
    {
        color = "black";

        changeTextColor(color);
    }
}
cssStyling()
