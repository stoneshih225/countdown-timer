# countdown timer with button

![countDown](https://media.giphy.com/media/gPLROu7ENHXsPqSD0m/giphy.gif)

### MY NOTE ð
åå¾buttons, h1 åå®£å update
```
let button = document.querySelectorAll(".btn-timer");
let displayTime = document.querySelector("h1");
let update;
```
<br>

å®ä½æç®, h1 å title é¡¯ç¤ºåæ¸æé
```
function displayTimeLeft (second) {
    let min = Math.floor(second / 60);
    let sec = Math.floor(second % 60);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let display = `${min + " : " + sec}`;

    displayTime.innerHTML = display; //display h1
    document.title = display; //display the document title
}
```
<br>

è¨æå¨, æ¯ç§å·è¡ä¸æ¬¡
```
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
```
<br>

åå¾ button ç data-time ä¸¦è½æææ¸å­
```
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
```
