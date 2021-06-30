# countdown timer with button

![countDown](https://media.giphy.com/media/gPLROu7ENHXsPqSD0m/giphy.gif)

### MY NOTE 📃
取得buttons, h1 和宣告 update
```
let button = document.querySelectorAll(".btn-timer");
let displayTime = document.querySelector("h1");
let update;
```
<br>

單位換算, h1 和 title 顯示倒數時間
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

計時器, 每秒執行一次
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

取得 button 的 data-time 並轉換成數字
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
