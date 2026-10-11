Create a file named `check.md`. Each group member must add their name and a brief note describing the results of their final review, even if the note only says, `No additional issues found.`


Oliver W - Our scribe did a great job of describing the bugs in the code. The chronological order is also nice. Dara and I split up the code in the BankOfTheNorth.ts file that we'd be fixing, I think Dara did a great job going through and updating the code. It didn't take our team long to go from nothing to role delegation to rough drafts to a finished product.
Dara S - Our team found several bugs including typos and logical errors.
Victoria S -


Compare the two results and add a short reflection to `check.md`:

- What did `ESLint` identify?
- What did your group identify that `ESLint` did not?
- Did `ESLint` identify anything your group missed?


Prior to running ESLint and upon examination of the original BankOfTHeNorth.ts file, was also concurred that the "User" was defined in the beginning but then never called. While the pin number is a unique code, a pin number by itself would not successfully take the place of a unique serial for each use which would be needed in the very least, with no unique serial identifier (pin excluded) the code would not work correcctly.

Prior to, we also noticed that the " balance = BALANCE + balance; " portion of the code was incorrect, and would not correctly display the balance in part because "balance" was not defined properly and in part because the Const "BALANCE" was not 1 number but 2 different numbers, which makes no sense (e.g.: your check account only has 1 number, your balance, which is 1 number, not 2 or more).

Prior to, we notice the withdrawl and deposit functions wouldn't work because the code doesn't actually add or deduct anything to the balance, in the original file withdrawls and deposits are associated with this code "  balance = BALANCE + balance". This would also affect the Const transferAmount.

We identified that the deposit and withdrawl functions would not work as " balance = BALANCE + balance " - we surmised that a negative sign would be needed for withdralws and a positive sign for deposits assoicated with an amount being added to the User's balance. ESLint didn't seem to catch that.

ESLint did identify a lot of apparent irregular whitespaces, that was primarily it.

It is worth noting we considered creating issues for each bug we encountered in GitHub but decided to use the issue_log.md file instead for the excercise.
