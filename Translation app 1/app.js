// button click
var translateButton = document.querySelector("#btn-translate");

// read input
var translateInput = document.querySelector("#translate-input");

// show output
var translateOutput = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText;
};

function errorHandler(){
    console.log("error occured");
    alert("opps error occured. Please try again in some time.")
}


function ClickHandler() {
    var input = translateInput.value;
        fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(errorHandler);
    
}

translateButton.addEventListener("click",ClickHandler)