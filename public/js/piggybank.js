class PiggyBank{
    constructor(){
        this.balance = 0;
        this.lt = 0;
        this.rowCount = -1;
        this.depositeButton = document.getElementById("depositeButton");
        this.depositeText = document.getElementById("depositeText");
        this.withdrawButton = document.getElementById("withdrawButton");
        this.withdrawText = document.getElementById("withdrawText");
        this.balanceView = document.getElementById("balance");
        this.messageView = document.getElementById("message");
        }
  deposit(v){
    if (Number.isNaN(v) || v <= 0){
      this.messageView.innerText = "Please Enter Correct Amount in Deposite Box"
    }
     else if(v > 0){
        this.balance += v;
        this.lt = v;
        this.messageView.innerText = "";
        this.depositeText.value = 0;
        this.statement();                
      }

  }
  withdraw(v){
    if (Number.isNaN(v) || v < 0){
      this.messageView.innerText = "Please Enter Correct Amount in Withdraw Box"
    }
    else if(this.balance == 0 || v > this.balance){
      this.messageView.innerText = "There is not Sufficieant Fund In Account Or Your Balance is Zero"
    }
     else if(v > 0 && v <= this.balance){
        this.balance -= v;
        this.lt = -v;
        this.messageView.innerText = "";
        this.withdrawText.value = 0;
        this.statement();  
      }
  }
  statement(){
    var tr = document.createElement("tr");
     tr.id = "tr1";
     document.getElementById("t1").appendChild(tr);
    for (var i =1; i <=3;i++) {
    var td = document.createElement("TD");
    td.id= "td" + i;
    document.getElementById("tr1").appendChild(td);
    }
    document.getElementById("td1").innerHTML = new Date().toUTCString();
    document.getElementById("td2").innerHTML = this.lt;
    document.getElementById("td3").innerHTML = this.balance;
  }
 }
let money = new PiggyBank();
 money.depositeButton.addEventListener('click', depositeMoney)
function depositeMoney()
{ 
    let moneyIn = parseFloat(money.depositeText.value);
    money.deposit(moneyIn);
   money.balanceView.value = parseFloat(money.balance)
}
money.withdrawButton.addEventListener('click', withdrawMoney)
function withdrawMoney()
{ 
    let moneyOut = parseFloat(money.withdrawText.value);
    money.withdraw(moneyOut);
    money.balanceView.value = parseFloat(money.balance)
}

