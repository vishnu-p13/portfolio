const text = [
    "MCA Student",
    "Web Developer",
    "Java Programmer",
    "Python Developer",
    "Cloud Computing Learner"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {

        setTimeout(type, 100);

    }

})();

const cards = document.querySelectorAll(".card,.project,.edu-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;

        let screen = window.innerHeight;

        if(position < screen - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="1s";

});

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been submitted.");

this.reset();

});