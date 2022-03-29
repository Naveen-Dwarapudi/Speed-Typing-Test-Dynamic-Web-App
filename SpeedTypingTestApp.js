let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let intervalId;
let count = 0;

// let reqConfig = {
// method: "GET"
// };

let url = "https://apis.ccbp.in/random-quote";

function startTimer() {
    count = 0;
    intervalId = setInterval(() => {
        timer.textContent = count;
        count++;
    }, 1000);
}

function displayQuote(quote) {
    // spinner.classList.toggle("d-none");
    spinner.classList.add("d-none");
    quoteDisplay.textContent = quote;
    startTimer();
}

function getQuote() {
    // spinner.classList.toggle("d-none");
    spinner.classList.remove("d-none");
    fetch(url /*,reqConfig);*/ ).then((res) => {
        return res.json();
    }).then((jsonRes) => {
        // console.log(jsonRes);
        displayQuote(jsonRes.content);
    });
}

getQuote();

submitBtn.addEventListener('click', () => {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(intervalId);
        result.textContent = `You typed in ${count-1} seconds`;
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    getQuote();
    quoteInput.value = "";
    result.textContent = "";
});