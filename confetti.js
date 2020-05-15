let jsButton = document.querySelector('.buttonSubmit');
let viewCake = document.querySelector('#secondPageCake');
let viewLoveLetter = document.querySelector('#loveLetter');
let viewCar = document.querySelector('.car');
let closeBanner = document.querySelector('.banner');
let closehappyBday = document.querySelector('.happyBday');
let closeAgeCounter = document.querySelector('.ageCounter');
let georgesAge = document.querySelector('.userInputAge');
let ageUpdate = 0;
let leftButtonClick = document.querySelector('.leftButton');
let rightButtonClick = document.querySelector('.rightButton');
let rightAge = 28;

let openAndClose = function() {
    viewCake.style.display = 'block';
    viewLoveLetter.style.display = 'block';
    viewCar.style.display = 'block';
    closeBanner.style.display = 'none';
    closehappyBday.style.display = 'none';
    closeAgeCounter.style.display = 'none';
    alert("You did it comrade :O");
};




leftButtonClick.addEventListener("click", function(){
    ageUpdate--;
    georgesAge.textContent = ageUpdate;
    });

rightButtonClick.addEventListener("click", function(){
    ageUpdate++;
    georgesAge.textContent = ageUpdate;

});

jsButton.addEventListener("click", function(){
    if (ageUpdate === rightAge) {
        jsButton.onclick = openAndClose;
    } else {
        alert("OwO seems like you're at an impasse >.<");
    }
});

