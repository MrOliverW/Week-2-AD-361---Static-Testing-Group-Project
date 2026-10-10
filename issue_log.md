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
- - **Current Status:** Open 





