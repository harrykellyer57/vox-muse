/* 
Filename: ComplexProgram.js
Content: This code is a complex program that simulates a bank account system with various functionalities and validation checks.
*/

class BankAccount {
  constructor(accountNumber, accountHolderName) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }

    this.balance += amount;
    this.printTransaction("Deposit", amount);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;
    this.printTransaction("Withdrawal", amount);
  }

  printTransaction(type, amount) {
    console.log(`[${type}] $${amount.toFixed(2)} | Balance: $${this.balance.toFixed(2)}`);
  }
}

// Example usage
const myAccount = new BankAccount(123456, "John Doe");
myAccount.deposit(1000);
myAccount.withdraw(500);

console.log("Account Information:");
console.log(`Account Holder: ${myAccount.accountHolderName}`);
console.log(`Account Number: ${myAccount.accountNumber}`);
console.log(`Current Balance: $${myAccount.balance.toFixed(2)}`);