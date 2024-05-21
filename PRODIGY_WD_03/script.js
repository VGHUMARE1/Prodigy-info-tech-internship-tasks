let btns = document.querySelectorAll('.bt');
let turn0 = true;

const pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


btns.forEach((btn)=>{
    btn.addEventListener("click", () => {
       
        if (turn0) {
            btn.innerText = "O";
            turn0 = false;
        } else {
            btn.innerText= "X";
            turn0 = true;

        }
        btn.disabled=true;
        let flag=checkForWin();
        if(!flag){
            checkForTae();
        }
    })
}
)

const checkForTae=()=>{
    for(btn of btns){
        if(!btn.disabled){
            return;
        }
    }
    let div=document.querySelector('.winner');
    let h3=document.querySelector('.winner h3');
    let h1=document.querySelector('.winner h1');
    h3.innerText="Draw"
   h1.innerText=`Better Luck Next Time`;
   div.classList.remove("hidden");
}
const checkForWin=()=>{
    for(let arr of pattern){
        if(btns[arr[0]].innerText!="" && btns[arr[0]].innerText== btns[arr[1]].innerText && btns[arr[1]].innerText== btns[arr[2]].innerText){
            disableBtn();
             displayWinner(btns[arr[0]].innerText);
             return true;
        }
    }
    return false;
}

const disableBtn=()=>{
    for(btn of btns){
        btn.disabled=true;
    }
}

const displayWinner=(winner)=>{
   let div=document.querySelector('.winner');
   let h3=document.querySelector('.winner h3');
  h3.innerText=`Winner ${winner}`;
  div.classList.remove("hidden");
}


const reset=()=>{
    for(btn of btns){
        btn.innerText="";
         turn0=true;
        btn.disabled=false;
        let div=document.querySelector('.winner');
        div.classList.add("hidden");
    }
}


const setBtn=document.querySelectorAll('.set');
setBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        reset();
    });
})
