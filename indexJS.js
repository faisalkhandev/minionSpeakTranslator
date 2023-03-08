let inputTranslate = document.getElementById('translate-input');
let btnTranslate = document.getElementById('translateBtn');
let outTranslate = document.getElementById('translate-output');



let getTranslated = () => {

    console.log("clicked");
    outTranslate.innerText = " faisal khan"

}

btnTranslate.addEventListener("click", getTranslated)

