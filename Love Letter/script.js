// ================================
// LETTER
// ================================

const letter = `Honey,

Every time you open this page,
I hope it reminds you just how much you mean to me.

Every giggle.
Every smile.
Every late-night convo.
Every stupid joke.

Is something I love dearly,

And its something I hope you love as much as i do.

I hope you know that you're the prettiest of princesses,

and that nothing in this world is as truly, as beautiful as you.

You make my ordinary days feel special.

You make my difficult days feel easier.

You make my world better and brighter just from existing.

I love you more than these words could ever describe.

Forever Yours,
    J
❤️
`;

let letterIndex = 0;
let typingStarted = false;

const letterElement = document.getElementById("letterText");

const music =
document.getElementById("backgroundMusic");

const musicButton =
document.getElementById("musicButton");

let playing = false;

function typeLetter() {

    if (letterIndex >= letter.length)
        return;

    letterElement.textContent += letter.charAt(letterIndex);

    letterIndex++;

    setTimeout(typeLetter, 32);

}


// ================================
// OPEN BUTTON
// ================================

document.getElementById("openButton").onclick = () => {


    const intro =
    document.getElementById("intro");


    const letter =
    document.getElementById("letterSection");


    intro.classList.add("fadeOut");


    setTimeout(() => {


        letter.classList.add("showLetter");


        letter.scrollIntoView({

            behavior:"smooth"

        });


        if (!typingStarted) {


            typingStarted = true;

            music.volume = 0.4;

music.play();


            setTimeout(typeLetter, 1000);


        }


    },1500);


};

musicButton.onclick = () => {

    if(playing){

        music.pause();

        musicButton.textContent="🎵";

    }

    else{

        music.play();

        musicButton.textContent="⏸️";

    }


    playing=!playing;

};


// ================================
// CONTINUE BUTTON
// ================================

document.getElementById("continueButton").onclick = () => {

    document.getElementById("reasonsSection")
        .scrollIntoView({
            behavior: "smooth"
        });

};


// ================================
// STARS
// ================================

const starContainer = document.getElementById("stars");

for (let i = 0; i < 350; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.opacity =
        Math.random();

    starContainer.appendChild(star);

}


// ================================
// SHOOTING STAR
// ================================

const shootingStar =
    document.getElementById("shootingStar");

function launchStar() {

    shootingStar.style.transition = "none";

    shootingStar.style.opacity = 1;

    shootingStar.style.left = "-200px";

    shootingStar.style.top =
        Math.random() * 200 + "px";

    setTimeout(() => {

        shootingStar.style.transition =
            "2s linear";

        shootingStar.style.left = "120%";

        shootingStar.style.top =
            parseInt(shootingStar.style.top) + 350 + "px";

    }, 20);

    setTimeout(() => {

        shootingStar.style.opacity = 0;

    }, 2200);

}

launchStar();

setInterval(launchStar, 60000);


// ================================
// LANTERNS
// ================================

const lanternMessages = [

"I love you ❤️",

"You make me smile.",

"Thank you for choosing me.",

"I'm proud of you.",

"You are beautiful.",

"I'll always be here.",

"You mean everything to me.",

"You are my safe place.",

"I hope today makes you smile."

];

const lanternContainer =
    document.getElementById("lanternContainer");

function createLantern() {

    const lantern =
        document.createElement("div");

    lantern.className = "lantern";

    lantern.style.left =
        Math.random() * 95 + "%";

    lantern.style.animationDuration =
        (18 + Math.random() * 12) + "s";

    lantern.onclick = () => {


    const random =
    lanternMessages[
        Math.floor(
            Math.random()
            *
            lanternMessages.length
        )
    ];


    document.getElementById("popupText")
    .textContent = random;


    document.getElementById("messagePopup")
    .classList.add("active");


};

    lanternContainer.appendChild(lantern);

}

for (let i = 0; i < 12; i++)
    createLantern();


// ================================
// REASONS
// ================================

const reasonButton =
    document.getElementById("reasonButton");

const reasonDisplay =
    document.getElementById("reasonDisplay");

reasonButton.onclick = () => {

    const random =
        reasons[
            Math.floor(
                Math.random() * reasons.length
            )
        ];

    reasonDisplay.textContent =
        random;

};


// ================================
// DAILY NOTE
// ================================

const today =
    new Date();

const day =
    today.getDate() % notes.length;

document.getElementById("dailyMessage")
    .textContent =
    notes[day];


// ================================
// MEMORIES
// ================================

const memoryContainer =
    document.getElementById("memoryContainer");

memories.forEach(memory => {

    const card =
        document.createElement("div");

    card.className = "memory";

    card.innerHTML = `

<img src="${memory.image}">

<h3>${memory.title}</h3>

<p>${memory.description}</p>

`;

    memoryContainer.appendChild(card);

});


// ================================
// SECRET PASSWORD
// ================================

document.getElementById("unlockButton").onclick = () => {

    const input =
        document.getElementById("passwordInput").value;

    if (input.toLowerCase() == "always pooping never moping") {

        document.getElementById("secretMessage").innerHTML = `

❤️

You found my secret.

No matter how many years pass...

I'll always choose you.

❤️

`;

    }

    else {

        document.getElementById("secretMessage").textContent =
            "That's not our secret.";

    }

};


// ================================
// MOON EASTER EGG
// ================================

let moonClicks = 0;

document.getElementById("moon").onclick = () => {

    moonClicks++;

    if (moonClicks == 5) {

        
    }

};


// ================================
// BIRTHDAY / ANNIVERSARY
// ================================

// Change these!

const birthday = "08-21";

const anniversary = "11-15";

const todayString =
    String(today.getMonth() + 1).padStart(2, "0")
    + "-"
    + String(today.getDate()).padStart(2, "0");

if (todayString == birthday) {

    alert("🎂 Happy Birthday, My Love ❤️");

}

if (todayString == anniversary) {

    alert("💍 Happy Anniversary ❤️");

}

document.getElementById("closePopup").onclick = () => {

    document.getElementById("messagePopup")
    .classList.remove("active");

};

// ================================
// FIREFLIES
// ================================


const fireflyContainer =
document.getElementById("fireflyContainer");


for(let i = 0; i < 40; i++){

    const firefly =
    document.createElement("div");


    firefly.className="firefly";


    firefly.style.left =
    Math.random()*100+"%";


    firefly.style.top =
    Math.random()*100+"%";


    firefly.style.animationDelay =
    Math.random()*5+"s";


    firefly.style.animationDuration =
    (5+Math.random()*8)+"s";


    fireflyContainer.appendChild(firefly);

}

// ================================
// ENDING ANIMATION
// ================================


const ending =
document.getElementById("endingSection");


const endingContent =
document.getElementById("endingContent");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


endingContent.classList.add("showEnding");


}


});


});


observer.observe(ending);