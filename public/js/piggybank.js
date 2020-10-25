class PiggyBank{
    constructor(obj){
        this.balance = 0;
        this.lt = 0;
        this.rowCount = -1;
        this.obj = obj;
      }
  deposit(v){
    if (Number.isNaN(v) || v <= 0){
      this.obj.messageView.innerText = "Please Enter Correct Amount in Deposite Box"
    }
     else if(v > 0){
        this.balance += v;
        this.lt = v;
        this.obj.messageView.innerText = "";
        this.obj.depositeText.value = 0;
        this.statement();                
      }

  }
  withdraw(v){
    if (Number.isNaN(v) || v < 0){
      this.obj.messageView.innerText = "Please Enter Correct Amount in Withdraw Box"
    }
    else if(this.balance == 0 || v > this.balance){
      this.obj.messageView.innerText = "There is not Sufficieant Fund In Account Or Your Balance is Zero"
    }
     else if(v > 0 && v <= this.balance){
        this.balance -= v;
        this.lt = -v;
        this.obj.messageView.innerText = "";
        this.obj.withdrawText.value = 0;
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

 let obj = 
{
  depositeButton : document.getElementById("depositeButton"),
  depositeText : document.getElementById("depositeText"),
  withdrawButton : document.getElementById("withdrawButton"),
  withdrawText : document.getElementById("withdrawText"),
  balanceView : document.getElementById("balance"),
  messageView : document.getElementById("message")
}

let money = new PiggyBank(obj);

function depositeMoney()
{ 
    let moneyIn = parseFloat(money.obj.depositeText.value);
    money.deposit(moneyIn);
   money.obj.balanceView.value = parseFloat(money.balance)
}

function withdrawMoney()
{ 
    let moneyOut = parseFloat(money.obj.withdrawText.value);
    money.withdraw(moneyOut);
    money.obj.balanceView.value = parseFloat(money.balance)
}

money.obj.depositeButton.addEventListener('click', depositeMoney)
money.obj.withdrawButton.addEventListener('click', withdrawMoney)


