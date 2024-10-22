class Account {
  constructor(protected accountHolder: string, private _balance: number) {}

  public get balance(): number {
    return this._balance;
  }

  protected set balance(amount: number) {
    this._balance = amount;
  }

  public withdraw(amount: number) {
    if (amount <= this.balance) this._balance -= amount;
    return this.balance;
  }
}

class SavingsAccount extends Account {
  //   private interestRate: number;

  constructor(
    accountHolder: string,
    balance: number,
    private interestRate: number
  ) {
    super(accountHolder, balance);
    // this.interestRate = interestRate;
  }

  applyInterest() {
    console.log(this.balance, this.accountHolder);
    const interest = this.balance * this.interestRate;
    this.balance += interest;
  }
}

const account = new Account("Anais", 10230);
account.withdraw(500);
console.log(account.balance);
const savingsAccount = new SavingsAccount("Anais", 10000, 0.4);
savingsAccount.applyInterest();
console.log(savingsAccount.balance);
// savingsAccount.balance = 1000000;
// console.log(account.accountHolder)
