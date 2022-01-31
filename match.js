// Initializing all the variables or defining the refrences

let btn = document.querySelectorAll(".btn");
let reloads = document.getElementById("reloadbtn");
let timebox = document.getElementById("timebox");
let pointbox = document.getElementById("pointbox");
let mainbox = document.getElementById("mainbox");
let cardarr = ["black", "captain", "doctor", "hawkeye", "hulk", "ironman", "sipderman", "thor", "black", "captain", "doctor", "hawkeye", "hulk", "ironman", "sipderman", "thor"];
let cardss = ["url(blackwidow.jpg)", "url(CaptainAmerica.jpg)", "url(DoctorStrange.jpg)", "url(Hawkeyes.jpg)", "url(Hulk.jpg)", "url(ironman.jpg)", "url(SpiderMan.jpg)", "url(thor.jpg)", "url(blackwidows.jpg)", "url(CaptainAmericas.jpg)", "url(DoctorStranges.jpg)", "url(Hawkeyess.jpg)", "url(Hulks.jpg)", "url(ironmans.jpg)", "url(SpiderMans.jpg)", "url(thors.jpg)", ]
let a, b;
let c = 0;
let mains = document.getElementById("mainboxs");
let firstcard, secondcard;
let checkcard = [];
let win = [];
let start = false;
let timestart;
let point = 0;
let playbtn = document.getElementById("play");
let mainsec = document.getElementById("main");
let startsec = document.getElementById("start");
let clear;
let clearNew;



// instructions page button
playbtn.addEventListener("click", function() {
    // startsec.style.display = "none";
    // mainsec.style.display == "flex"
    if (startsec.style.display != "none") {
        startsec.style.display = "none"
    }
    if (mainsec.style.display != "flex") {
        mainsec.style.display = "flex"
    }

})

function second() {
    // refering to current object
    a = this;
    console.log(a)
    timebox.innerHTML = a.innerText;
    btn.forEach((element, index) => {

       // remove the event listener of the timer (30,60,90)
     element.removeEventListener("click", second);
        
     });
    
     // setting the timer
        clearNew = setInterval(() => {
        timebox.innerHTML -= 1;

        setTimeout(() => {
            if (timebox.innerHTML < 0) {
                if (win.length != 0 || win.length == 0)

                    clearInterval(clearNew)
            }
        }, 500)










    }, 1000)
    mains.style.animationName = "mys";
    mains.style.animationDuration = "3s";

}

// adding event listener in button (Calling the second function)
btn.forEach((element, index) => {
    element.addEventListener("click", second);

});

// realoading the window (reset Button)
reloads.addEventListener("click", () => {
    window.location.reload();
});

//  checking the value of timebox, if value is 0 zero it will relaod the window (Animation of timeUP box)
clear = setInterval(() => {
    if (timebox.innerHTML < 0) {


        setTimeout(() => {
            if (win.length != 0 || win.length == 0) {
                mains.innerHTML = "Time up!";
                mains.style.display = "flex";

                mains.style.animationName = "my";
                mains.style.animationDuration = "2s";
                timebox.innerHTML = "0";
                clearInterval(clear)
            }
        }, 1500)




    }
}, 1000);

// Creating cards and appending in mainBox
function main() {
    for (let i = 0; i < 16; i++) {
        let boxs = document.createElement("div");
        boxs.setAttribute("id", i)
        boxs.className = "box";
        mainbox.appendChild(boxs)
    }
}
// calling the main function
main()

//reassemble the position of the cardarr(aaray) and exchanging the position between two cardarr like  a = b and b = a
function reassemble() {
    let i, y, z, a, b;
    for (i = 0; i < cardarr.length; i++) {
        y = cardarr[i];
        a = cardss[i];

        // random numbering is initializing to cardss and cardarr
        z = Math.floor(Math.random() * 16);
        cardss[i] = cardss[z]
        cardarr[i] = cardarr[z];
        cardss[z] = a;
        cardarr[z] = y;
    }

    console.log(cardss)
    console.log(cardarr)
}
// calling the reassemble function
reassemble()

// pushing the checked cards of user to an array
function play(e) {
    if (checkcard.length < 2) {
        firstcard = this;
        let aa;

        // getting the id from div box above (setAttribute)
        aa = firstcard.getAttribute("id");

        firstcard.style.backgroundImage = cardss[aa];
        checkcard.push(firstcard)
    }

       //checking the checked cards
    if (checkcard.length == 2) {

        let a, b, c, d;

        // getting the card ids into variables
        a = checkcard[0].getAttribute("id");
        b = checkcard[1].getAttribute("id");
        c = checkcard[0].innerHTML;
        d = checkcard[1].innerHTML;

        if (a == b) {

            // showing the alert
            alert("You clicked the same cards !")
            checkcard[0].style.backgroundImage = `url("logo.jpg")`;
            checkcard = [];
        }

        //increasing points with respect to cards matching ([0], [1])
        if (a != b) {


            if (c == d) {
                checkcard[0].removeEventListener("click", play)
                checkcard[1].removeEventListener("click", play)
                win.push(checkcard[0])
                win.push(checkcard[1])
                console.log(win)
                if (win.length == 16) {
                    mains.innerHTML = "You won the game!";
                    mains.style.display = "flex";

                    mains.style.animationName = "my";
                    mains.style.animationDuration = "3s";
                    setTimeout(() => {
                        if (timebox.innerText.length != 0) {
                            window.location.reload();
                        }
                    }, 5000)
                }

                point += 1;
                pointbox.innerHTML = point;
                checkcard = [];
            } else {
                setTimeout(() => {
                    checkcard[0].style.backgroundImage = `url("logo.jpg")`;
                    checkcard[1].style.backgroundImage = `url("logo.jpg")`;
                    checkcard = [];
                }, 1000)

            }

        }
    }




}

// eventlistener to play buitton for cards
// class box name has declared above
let card = document.querySelectorAll(".box");
card.forEach((element, index) => {
    element.innerText = cardarr[index]
    element.addEventListener("click", play);
});