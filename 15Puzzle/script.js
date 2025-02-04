var btnContainer=document.querySelector('.btnContainer');


for(var i=1;i<=15;i++)
{
    var btn=document.createElement('button');
    btn.innerText=`${i}`;
    btn.style.padding="5px";
    btn.style.width=`23%`;
    btn.style.height=`24%`;
    btn.style.margin="1px"
    btn.id=`${i}`;
    btnContainer.appendChild(btn);
}
var emptyBtn=document.createElement('button');
emptyBtn.innerText='X';
emptyBtn.style.color='white';
emptyBtn.style.border='none';
emptyBtn.style.padding="5px";
emptyBtn.style.width=`23%`;
emptyBtn.style.height=`24%`;
emptyBtn.style.margin="1px"
emptyBtn.style.backgroundColor='white';
btnContainer.appendChild(emptyBtn);


var btns=document.querySelectorAll('button');
console.log(btns);

