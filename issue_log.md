## Issue 1: Logic Error in Deposit Calculation

- **Location:** Line 14; file: bankOfTheNorth.ts
- **Issue:** The deposit function was trying to add a deposit amount to an array instead of updating a number.
- **Explanation:** BALANCE holds the total account balance as a number. The code needed to add the new deposit directly to this total when the correct PIN is entered.
- **Suggested Fix:** Updated the code inside deposit() to BALANCE = BALANCE + amount when the PIN is correct, and logged the deposit into the transaction history.
- **Current Status:** Fixed


## Issue 2: Incorrect Withdrawal Logic

- **Location:** Line 25; file: bankOfTheNorth.ts
- **Issue:** The withdrawal function uses an incorrect balance calculation and does not properly deduct the withdrawal amount from the user's account.
- **Explanation:** The expression balance = BALANCE + balance attempts to add an array to a number. Also, the function does not clearly subtract the requested withdrawal amount or check whether sufficient funds are available to prevent a negative balance.
- **Suggested Fix:** Rename the function to withdraw, verify the user's PIN first, and run a loop through the BALANCE array to subtract money step-by-step without going below zero.
- **Current Status:** Fixed

## Issue 3: Missing Parameter or Variable Mismatch in Balance Check Function

- **Location:** Line 34; file: bankOfTheNorth.ts
- **Issue:** The balanceCheck function isn't taking any parameters to verify who is asking for the balance before printing it out.   -
- **Explanation:** Right now, line 34 just declares export function balanceCheck() { ... } with no arguments. In our discussion, we realized we need to pass in a PIN (or user credentials) so we can run an if check before showing the balance. We also noticed that the console.log and return statements inside the function need to be flipped around so the log actually runs in the right order.
- **Suggested Fix:** Add a pin: number parameter to line 34, throw in an if statement to check the PIN first, and clean up the order of the return and log statements inside the block.
- **Current Status:** Fixed

## Issue 4: Uncalled Transfer Function, Missing Validation, and Function Call Bug

- **Location:** Line 41; file: bankOfTheNorth.ts
- **Issue:** The transfer function is never called at the bottom of the script, lacks PIN authentication, and passes incomplete parameters to the withdrawal function.
- **Explanation:** Line 41 sets up export function transfer(...), but it is never executed with test inputs at the bottom of the file. Additionally, it does not check pin === USER_PIN before processing transactions. Also, line 42 calls withdrawl(amount) with only one argument instead of passing both pin and amount, this causes the withdrawal to fail.
- **Suggested Fix:** Add an if (pin === USER_PIN) block inside transfer() for authorization, update the internal call to withdraw(pin, amount), return,  balanceCheck(pin), and add a test call like transfer(1234, 50, "Rose") at the bottom of the file.
- **Status:** Fixed

## Issue 5: Unused Variable Declaration

- **Location:** Line 7; file: bankOfTheNorth.ts
- **Issue:** The variable USER is declared at the top of the script, but it is never used anywhere in the codebase.
- **Explanation:** Line 7 defines const USER = "Rose Thecat"; Looking through all the functions (deposit, withdraw, balanceCheck, and transfer), none of them actually reference USER to perform any greeting, verification, or logging.
- **Suggested Fix:** Either integrate USER into the function log outputs (for example, displaying "Welcome, Rose Thecat") or remove the unused variable completely to clean up dead code.
- **Current Status:** Needs discussion

----
## Root Cause
- Defining const BALANCE = [15, 983] as an array instead of a number/int

## Error
-  Typo In the parameter name reciver instead of receiver -- console.log(`Success! ${amount} was transferred to ${reciver}`);

## Defect or Bug
- Function in line 35; ``` export function balanceCheck() {
  return BALANCE;
  console.log(`Your balance is ${BALANCE}`);
}```; returns the balance array, but fails to print the message to the console because the function stops running before it reaches the console.log line it becomes unreachable code, should be swapped.

## Failure
- Line 41 to 44, when executing transfer(0000, 100, "Rose") using an invalid PIN (0000), the application proceeds with the transaction and prints "Success! 100 was transferred to Rose". At runtime, the system allows an unauthorized user to execute a financial transfer without verifying credentials.

