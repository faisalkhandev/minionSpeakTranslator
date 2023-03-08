let inputTranslate = document.getElementById('translate-input');
let btnTranslate = document.getElementById('translateBtn');
let outTranslate = document.getElementById('translate-output');

let serverURl = "https://api.funtranslations.com/translate/minion.json"

let getTranslatedURl = (text) => {
    return serverURl + "?" + "text=" + text;
}

let handleTheError = (error) => {
    // alert("This API can be called only 5 times an hour, come back after an hour ")
    alert(error)
}

let getTranslated = () => {

    let inputTxt = inputTranslate.value;

    fetch(getTranslatedURl(inputTxt))
        .then(response => response.json)
        .then(json => {
            let translatedTxt = json.contents.translated;
            outTranslate.innerText = translatedTxt
        })
        .catch(handleTheError)

}

btnTranslate.addEventListener("click", getTranslated)

