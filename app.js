let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let msgg=document.querySelector("#msgg");
// let player="player-o";



let turn0=true;//player1,player0
// let arr=[[1,3],[3,5]];
// let arr2=[1,3,45];
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

boxes.forEach((box) =>{
  box.addEventListener("click",() =>{

    // console.log("box clicked");
    if (turn0)
    {

      box.innerText="O";
      // box.classList.add(player);
      turn0=false;

    }
    else{
      box.innerText="X";
      // box.classList.add(player==="player-o"?"player-x":"player-o");
      turn0=true;

    }
    box.disabled=true;
    checkWinner();
    
    
  });
});
const disableBoxes=()=>{
  for(let box of boxes)
{
  box.disabled=true;
}
}
const enableBoxes=()=>{
  for(let box of boxes)
{
  box.disabled=false;
  box.innerText="";
}
}
const resetGme=()=>{
  turn0=true;
  enableBoxes();
  msg.classList.add("hide");

}

const showWinner=(winner)=>{
  msgg.innerText=`Hurray!Congratulations \' ${winner} \'. You WON..!`;
  msg.classList.remove("hide");
  disableBoxes();
}
const checkWinner=()=>{
  for(let pattern of winPatterns)
  {
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText);

    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!="")
    {
      if(pos1===pos2 && pos2===pos3){
        // console.log("winner",pos2);
        
        showWinner(pos2);
      }
    }
  }

}
newBtn.addEventListener("click",resetGme);
reset.addEventListener("click",resetGme);
