/**
 * Cash Register
 * 
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * 
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 * 
 * Currency Unit	Amount
 * Penny	$0.01 (PENNY)
 * Nickel	$0.05 (NICKEL)
 * Dime	$0.1 (DIME)
 * Quarter	$0.25 (QUARTER)
 * Dollar	$1 (ONE)
 * Five Dollars	$5 (FIVE)
 * Ten Dollars	$10 (TEN)
 * Twenty Dollars	$20 (TWENTY)
 * One-hundred Dollars	$100 (ONE HUNDRED)
 * 
 * See below for an example of a cash-in-drawer array:
 * 
 [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */

/**
 * Algorithm and Concepts
 * First, we calculate the change due by subtracting the purchase price from the payment amount.
 * Next, we calculate the total amount of cash in the drawer.
 * Depending on the available cash and the change needed, we have 3 scenarios:
 * INSUFFICIENT_FUNDS: If there's not enough cash in the drawer, or if we can't provide the exact change.
 * CLOSED: If the cash in the drawer is exactly equal to the change due.
 * OPEN: If we can return change and there's more money in the drawer than needed.
 * To efficiently make change, we'll start from the highest currency unit available to the lowest.
 */

(() => {
    function checkCashRegister(price, cash, cid) {
        const currencyUnit = [
            ['PENNY', 0.01],
            ['NICKEL', 0.05],
            ['DIME', 0.1],
            ['QUARTER', 0.25],
            ['ONE', 1],
            ['FIVE', 5],
            ['TEN', 10],
            ['TWENTY', 20],
            ['ONE HUNDRED', 100],
        ];

        let change = cash - price;
        let totalCid = 0;
        let changeArr = [];

        for (let i = 0; i < cid.length; i++) {
            totalCid += cid[i][1];
        }
        totalCid = totalCid.toFixed(2);

        if (totalCid < change) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        } else if (totalCid === parseFloat(change).toFixed(2)) {
            return { status: 'CLOSED', change: cid };
        } else {
            for (let i = currencyUnit.length - 1; i >= 0; i--) {
                const coinName = currencyUnit[i][0];
                const coinValue = currencyUnit[i][1];
                const coinAvailable = cid[i][1];
                const coinCount = (coinAvailable / coinValue).toFixed(0);

                let returnedCoins = 0;

                while (change >= coinValue && returnedCoins < coinCount) {
                    change -= coinValue;
                    change = change.toFixed(2);
                    returnedCoins++;
                }

                if (returnedCoins > 0) {
                    changeArr.push([coinName, returnedCoins * coinValue]);
                }
            }
        }

        let remainingChange = 0;
        for (let i = 0; i < changeArr.length; i++) {
            remainingChange += changeArr[i][1];
        }
        remainingChange = remainingChange.toFixed(2);

        if (Number(remainingChange) < change) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        } else {
            return { status: 'OPEN', change: changeArr };
        }
    }

    // Example usage:
    const cid = [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
    ];

    console.log(checkCashRegister(19.5, 20, cid)); // Output should be {status: "OPEN", change: [["QUARTER", 0.5]]}
    console.log(checkCashRegister(19.5, 20, [['PENNY', 0.01]])); // Output should be {status: "INSUFFICIENT_FUNDS", change: []}
})();
