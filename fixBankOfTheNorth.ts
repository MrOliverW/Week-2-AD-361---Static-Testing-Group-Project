// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

const USER = "Rose Thecat";
const BALANCE = [15983]; // Changed the array to a single number to represent the balance (OW)
const USER_PIN = 1234;
const transferAmount = withdrawl(amount, receiver); //adding to top of code, adding the receiver field (OW)


// Deposits money into a user's account. -(DS) revised balance calculation logic
export function deposit(pin: number, amount: number) {
  if (pin === USER_PIN) {
    BALANCE = BALANCE + amount;
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Withdraws money from a user's account. -(DS) revised balance calculation logic
export function withdraw(pin: number, amount: number) {
  if (pin === USER_PIN) {
    BALANCE = BALANCE - amount;
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Returns the account balance. -(OW) added pin paramater and updated function to return the balance.
export function balanceCheck(pin: number, balance: number) {
  if (pin === USER_PIN) {
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(pin: number, amount: number, reciver: string) {
  if (pin === USER_PIN) {
    return transferAmount;
    console.log(`Success! ${amount} was transferred to ${reciver}`);
  } else {
    console.log("Incorrect PIN");
  }
}

// AI transparency: AI was used to clean up this code.
