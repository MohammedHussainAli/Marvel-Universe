//Button clicking sound

var sound= new Audio();
sound.src="./Music/btn.wav"
// ------------Navigations------------

// 1.navigation to gamesintro Page

function way()
{
    location.href="./gamesIntro.html";
}


// 2.navigation to marvel"s match game

function playNow()
{
    location.href="./marvelsMatch.html";
}

//3. Navigation to games-intro page from , marvel's match page (back Button)

function mainmenu()
{
    location.href="./gamesIntro.html";
}

//4. Navigation to the quiz page from games intro page

function quizbtn()
{
    location.href="./quizIntro.html";
}

// 5. Navigation to the main quiz page from quiz intro page

function quizPlay()
{
    location.href="./quiz.html";
}

// 6. Navigation to the main menu page from quiz play area

function backbtn()
{
    location.href="./gamesIntro.html";
}

// 6. Navigation to the main menu page from quiz play area

function home()
{
    location.href="./index.html";
}
