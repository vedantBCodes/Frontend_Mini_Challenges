var val=document.querySelector("#val");
var stepBtn=document.querySelector("input");
var incrementBtn=document.querySelector("#incrementBtn");
var decrementBtn=document.querySelector("#decrementBtn");
var resetBtn=document.querySelector("#reset")
let cnt=0;

val.textContent = "0";
var stepCnt=0;

incrementBtn.addEventListener('click',()=>{
    stepCnt=parseInt(stepBtn.value);
    cnt=cnt+ stepCnt;
    val.textContent = cnt;
})

decrementBtn.addEventListener('click',()=>{
    stepCnt=parseInt(stepBtn.value);
    cnt=cnt - stepCnt;
    val.textContent = cnt;
})

resetBtn.addEventListener('click', reset)

function reset()
{
    val.textContent = "0";
    cnt=0;
}