let button = document.querySelectorAll(".btn-timer");
let displayTime = document.querySelector("h1");
let update; //update per second

function displayTimeLeft (second) {
    let min = Math.floor(second / 60);
    let sec = Math.floor(second % 60);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let display = `${min + " : " + sec}`;

    displayTime.innerHTML = display; //display h1
    document.title = display; //display the document title
}

function timer (second) {
    clearInterval(update);
    displayTimeLeft(second);

    update = setInterval(function () {
        --second;
        displayTimeLeft(second);

        if (second < 0) {
            clearInterval(update);
            displayTime.innerHTML = "TIME OUT";
            document.title = "TIME OUT";
        }
    }, 1000);
}

//get seconds from each button
// button.forEach(function (button) {
//     button.classList.remove("activate");
    
//     button.addEventListener("click", function () {
//         let second = parseInt(this.dataset.time, 0);
//         timer (second);

//         this.classList.add("activate");
//     });
// });


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click" ,function () {
        
        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove("activate");
        }
        
        let second = parseInt(this.dataset.time, 0);
        timer (second);

        this.classList.add("activate");
    })
}