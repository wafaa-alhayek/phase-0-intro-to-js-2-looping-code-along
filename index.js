/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);*/

function writeCards(n) {
    let cards = [];
    for (let i=0; i < n.length; i++) {
        cards.push(`Thank you, ${n[i]}, for the wonderful surprise gift!`)
    }
    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
