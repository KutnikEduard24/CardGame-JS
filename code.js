nrCards = 12;
var card = document.querySelectorAll(".card");
var cards = generateRandomCard(nrCards);
var startBtn = document.querySelector("#start");

function generateRandomCard(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomCard());
    }
}

function randomCard() {
    var result = '';
    var letters = "CDHS";

    var number = Math.floor((Math.random() * 9) + 2);
    var letter = letters[Math.floor(Math.random() * 4)];
    result += "PNG/" + number + letter + ".jpg";
    return result;
    
}

startBtn.addEventListener("click", function () {

    for (var i = 0; i < nrCards; i++) {
        card[i].src = randomCard();
        //card[i].src ="PNG/8S.png";
        console.log(card[i]);

    }
    console.log("----------------------");
})
