let gameseq=[];
let userseq=[];
let started = false;
let Level = 0;
let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        Levelup();

    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

};

function Levelup(){
    userseq=[];
    Level++;
    h2.innerText=`Level ${Level}`;
    let randIndx = Math.floor(Math.random()*3);
    let randcolor = btns[randIndx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkAns(indx){
    // console.log("current Level:",Level);
    
    if(userseq[indx]===gameseq[indx]){
        console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(Levelup,1000);
        }
    }
    else{
         h2.innerHTML=`Game over ! Your score was <b>${Level}</b> <br> press any key to start again`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    };
}


function btnPressed(){
    let btn = this;
    btnFlash(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);

}
let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPressed)
}
function reset(){
    started==false;
    gameseq=[];
    userseq=[];
    Level = 0;
}