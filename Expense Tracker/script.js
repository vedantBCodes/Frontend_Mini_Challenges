var transactionForm = document.querySelector(".transactionForm");
var container = document.querySelector('.container');
var addCancelBtn = document.querySelector("#addCancelBtn");
var transactionHistory = document.createElement("div");
var addTransactionBtn = document.querySelector("#addTransactionBtn");
var showbalance = document.querySelector("#balance");
var showExpense = document.querySelector('#expense p');
var showIncome = document.querySelector('#income p');
var selected;
var income=0;;
var expense=0;
var balance = 0;
var amount = document.querySelector("#amountInput");
var description = document.querySelector("#descriptionInput");

showbalance.innerHTML = "Balance <br> <span style='color: violet'> <b>$" + balance   +"</b> </span>";
showExpense.innerHTML = "Expense <br> <span style='color: red'> <b>$" + expense   +"</b> </span>";
showIncome.innerHTML = "Income <br> <span style='color: green'> <b>$" + income  + "</b></span>";
transactionHistory.innerHTML = "<p style='font-size:25px'><b>Transactions : </b></p>";
container.appendChild(transactionHistory);

function updateBalanceIncomeAndExpense() 
{
  showbalance.innerHTML = "Balance <br> <span style='color: violet'> <b>$" + balance   +"</b> </span>";
  showExpense.innerHTML = "Expense <br> <span style='color: red'> <b>$" + expense   +"</b> </span>";
  showIncome.innerHTML = "Income <br> <span style='color: green'> <b>$" + income  + "</b></span>";
}

function addTransactionHistory(value , incomeOrExpense)
{
    var tHistory=document.createElement('p');
    tHistory.innerHTML="<span>" + description.value + "</span> <span>$" + value + "</span";
    tHistory.classList.add('transactionHistory');
    if(incomeOrExpense==income)
    {
        tHistory.classList.add('rightGreenBorder');
    }
    else
    {
        tHistory.classList.add('rightRedBorder');
    }
    transactionHistory.appendChild(tHistory);
}

function toggleForm()
{
    if (addCancelBtn.innerText == "ADD") 
    {
       addCancelBtn.innerText = "CANCEL";
       transactionForm.style.display = "block";
    } 
    else 
    {
       addCancelBtn.innerText = "ADD";
       transactionForm.style.display = "none";
    }
}

addCancelBtn.addEventListener("click", () => {
    toggleForm();
});

addTransactionBtn.addEventListener("click", () => {
selected = document.querySelector('input[name="radioBtn"]:checked');
  if (selected.value == "income") 
    {
    balance = balance + parseInt(amount.value);
    income = income + parseInt(amount.value);
    updateBalanceIncomeAndExpense();
    addTransactionHistory(amount.value , income);
    amount.value = "";
    description.value="";
    selected.checked=false;
    toggleForm();
    }
 else 
    {
    balance = balance - parseInt(amount.value);
    expense= expense + parseInt(amount.value);
    updateBalanceIncomeAndExpense();
    addTransactionHistory(amount.value , expense);
    amount.value = "";
    description.value="";
    selected.checked=false;
    toggleForm();
    }
});
