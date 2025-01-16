var input=document.querySelector("input");
var submitBtn=document.querySelector("#submitBtn");
var startBtn=document.querySelector("#startBtn");
var msgContainer=document.querySelector("#msg");

startBtn.disabled = true;


var num;
num=Math.floor(Math.random()*101);
console.log(num);
var msg1=document.createElement("p");
var msg2=document.createElement("p");
var guessNumbers =[];  //Empty Array


submitBtn.addEventListener("click", ()=>{
    var enteredNum=input.value;
    if(enteredNum=="")
    {
        alert("Please enter a number :");
        return;
    }

    guessNumbers.push(enteredNum);
    msg1.innerText="";
    
    if(enteredNum<num)
    {
        msg1.innerText="Too Low !";
        msg2.innerText=`Your Guesses :${guessNumbers}`;
        msgContainer.appendChild(msg1);
        msgContainer.appendChild(msg2);
        input.value="";
    }
    else if(enteredNum>num)
    {
        msg1.innerText="Too High !";
        msg2.innerText=`Your Guesses :${guessNumbers}`;
        msgContainer.appendChild(msg1);
        msgContainer.appendChild(msg2);
        input.value="";
    }
    else
    {
        msg1.innerText="You got it ! Congrats";
        msg2.innerText=`Your Guesses :${guessNumbers}`;
        msgContainer.appendChild(msg1);
        msgContainer.appendChild(msg2);
        input.value="";
        startBtn.disabled = false;
        submitBtn.disabled = true;
        input.disabled = true;
    }
})

startBtn.addEventListener('click', () =>{
    startBtn.disabled = true;
    submitBtn.disabled = false;
    input.disabled = false;
    msg1.innerText="";
    msg2.innerText="";
    num=Math.floor(Math.random()*101);
    guessNumbers =[]; 
})
