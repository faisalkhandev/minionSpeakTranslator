let inputTranslate = document.getElementById('translate-input');
let btnTranslate = document.getElementById('translateBtn');
let outTranslate = document.getElementById('translate-output');
let btnClearButton = document.getElementById('clear')

let serverURl = "https://api.funtranslations.com/translate/minion.json"

let getTranslatedURl = (text) => {
    return serverURl + "?" + "text=" + text; //getting text from API
}

let handleTheError = (error) => {
    alert("This API can be called only 5 times an hour, come back after an hour ")
}

let getTranslated = () => {

    let inputTxt = inputTranslate.value;

    fetch(getTranslatedURl(inputTxt))
        .then(response => response.json())
        .then(json => {
            let translatedTxt = json.contents.translated;
            outTranslate.innerText = translatedTxt
        })
        .catch(handleTheError)

}

let clearEverything = () => {
    inputTranslate.value = ""
    outTranslate.innerText = "";

}

btnClearButton.addEventListener("click", clearEverything)
btnTranslate.addEventListener("click", getTranslated)

