var words = ["parole che dicono", "altre parole", "funziona"];
var counter = 0;
var word = document.getElementById("carousel-word");
setInterval(update_carousel_words, 1000);
function update_carousel_words () {
     word.innerHTML = words[counter];
    counter++;
if(counter >= words.lenght) {
     counter = 0;
     }
}
