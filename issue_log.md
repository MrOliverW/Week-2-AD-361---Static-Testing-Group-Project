## Issue 1: Logic Inconsistency

- **Location:** Line 14; file: bankOfTheNorth.ts
- **Issue:** The balance calculation may be incorrect because it attempts to add an array to a number.
- **Explanation:** BALANCE is an array ([15, 983]), while balance is a number representing the deposit amount. The expression does not clearly update the user's account balance as required.
- **Suggested Fix:** Amended by remove the + sign and replace with the .push() method instead, to append the new amount to the end of the array..
- **Current Status:** Open


## Issue 2: Incorrect Withdrawal Logic

- **Location:** Line 25; file: bankOfTheNorth.ts
- **Issue:** The withdrawal function uses an incorrect balance calculation and does not properly deduct the withdrawal amount from the user's account.
- **Explanation:** The expression balance = BALANCE + balance attempts to add an array to a number. Also, the function does not clearly subtract the requested withdrawal amount or check whether sufficient funds are available to prevent a negative balance.
- **Suggested Fix:** Investigate whether the withdrawal calculation should subtract the withdrawal amount instead of adding it. Verify that the PIN is checked before processing the transaction and review how the function should prevent the account balance from becoming negative.
- **Current Status:** Under Investigation

## Issue 3: Missing Parameter or Variable Mismatch in Balance Check Function

- **Location:** Line 34; file: bankOfTheNorth.ts
- **Issue:** The balanceCheck function isn't taking any parameters to verify who is asking for the balance before printing it out.   -
- **Explanation:**Right now, line 34 just declares export function balanceCheck() { ... } with no arguments. In our discussion, we realized we need to pass in a PIN (or user credentials) so we can run an if check before showing the balance. We also noticed that the console.log and return statements inside the function need to be flipped around so the log actually runs in the right order.
- **Suggested Fix:** Add a pin: number parameter to line 34, throw in an if statement to check the PIN first, and clean up the order of the return and log statements inside the block.
- **Current Status:** Open

## Issue 4: Uncalled Transfer Function & Missing Parameter Validation

- **Location:** Line 41; file: bankOfTheNorth.ts
- **Issue:** The transfer function is defined, but it's never actually invoked with test inputs, and it lacks PIN verification before executing[cite: 3].
- **Explanation:** Looking at line 41, export function transfer(...) sets up the function, but if you look at the bottom of the script where we test our functions, transfer() is never called[cite: 3]. On top of that, unlike deposit and withdraw, it doesn't run an if check against USER_PIN to make sure the user is authorized before making the transfer[cite: 3].
- **Suggested Fix:** Add a PIN validation check inside transfer() to ensure authorization, and add a test function call (e.g., transfer(...)) at the bottom of the file alongside deposit and withdraw so the code actually executes[cite: 3].
- **Current Status:** Open

## Issue 5: Unused Variable Declaration

- **Location:** Line 7; file: bankOfTheNorth.ts
- **Issue:** The variable USER is declared at the top of the script, but it is never used anywhere in the codebase.
- **Explanation:** Line 7 defines const USER = "Rose Thecat"; Looking through all the functions (deposit, withdraw, balanceCheck, and transfer), none of them actually reference USER to perform any greeting, verification, or logging.
- **Suggested Fix:** Either integrate USER into the function log outputs (for example, displaying "Welcome, Rose Threat") or remove the unused variable completely to clean up dead code.
- **Current Status:** Open


## Issue 6: Flawed Data Structure for Account Balance

- **Location:** Line 6; file: bankOfTheNorth.ts
- **Issue:** BALANCE is declared as an array of numbers ([15, 983]) instead of a single numerical value representing a currency amount.
- **Explanation:** In line 6, `BALANCE` is set up as an array (const BALANCE = [15, 983];). Having two separate numbers in an array for a bank account balance doesn't make sense for actual financial calculations and breaks simple addition/subtraction when trying to process deposits or withdrawals.
- **Suggested Fix:** Change BALANCE from an array to a regular number type (e.g., 15983 or 15.98) so transactions can be more straightforward to the balance. 
- **Current Status:** Open




