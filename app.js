let m = 0;
let s = 0;
let ms = 0;
let count = 0;
let intervalLoop;
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let msec = document.querySelector(".msec");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");
let history =  document.querySelector("div.historyBox");


startBtn.onclick = ()=>{
    
    let start = ()=>{
        startBtn.disabled = true;
        pauseBtn.disabled = false;

        ms++;
        msec.innerHTML = ms;
        if(ms == 100){
            s++;
            ms=0;
            sec.innerHTML = s;
        }else if(s == 60){
            s=0;
            m++;
            min.innerHTML = m;
        }
    }
    intervalLoop = setInterval(start, 10);

    pauseBtn.onclick = ()=>{
        count++;
        pauseBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(intervalLoop);
        history.innerHTML += "<p class='historyText'><b>"+count + ")</b> &nbsp;" + m + " <span>m</span> " + s + " <span>s</span> "+ ms + " <span>ms</span> &nbsp;" + "<button onclick='removeThis(event)'>X</button>" +"</p>"
    }

    resetBtn.onclick = ()=>{
        m=0;
        s=0;
        ms=0;
        min.innerHTML="00";
        sec.innerHTML = "00";
        msec.innerHTML = "000";
    }
}

let removeThis = (e)=>{
    e.target.parentNode.classList.toggle('removed');
}

let clearAll = ()=>{
    count=0;
    history.innerHTML="";
}