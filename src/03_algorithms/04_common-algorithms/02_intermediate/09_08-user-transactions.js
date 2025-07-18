/**
 * Implement a function getNumTransactions(username) that takes a username as an argument and returns the number of transactions associated with that username, or a string "Username Not Found" if no such user exists.
 * 
 * To do this, your function should:
 * 
 * Make a GET request to a mock API endpoint to fetch user details by username: https://api.example.com/users?username=<username>
 * If the user exists, make another GET request to fetch the transaction details for that user from another mock API endpoint: https://api.example.com/transactions?userId=<userId>
 * The response JSON from the APIs will have similar structure: 
 * - page: The current page of the results (Number)
 * - per_page: The maximum number of results per page (Number)
 * - total: The total number of transactions (Number)
 * - total_pages: The total number of pages which must be queried to get all the results (Number)
 * - data: An array of transaction objects (Array)
 *    - id: The unique ID of the transaction (Number)
 *    - username: The username of the user who owns the transaction (String)

 *
 * {
 *  "id": 1,
 *  "username": "jon",
 * }
 *
 * If the user details is succesfully fetched from the first API, use the id property of the details object to fetch the transaction information for the user. 
 *
 * - page: The current page of the results (Number)
 * - per_page: The maximum number of results per page (Number)
 * - total: The total number of transactions (Number)
 * - total_pages: Te total number of pages with results (Number)
 * - data: An array of transaction objects (Array)
 *
 * Here total is the total number of transactions of the user and is the final value to be returned by the function.
 *
 * Here is a sample response:
 * {
 *  "page": "1",
 *  "per_page": 10,
 *  "total": 12,
 *  "total_pages": 2,
 *  "data": [
 *    {
 *      "id": 1,
 *      "userId": 1,
 *      "userName": "Jon Doe",
 *      "timestamp": 158805761859,
 *      "txnType": "credit",
 *      "amount": "$1,214.68"
 *    }
 *   ]
 *  }
 * }
 */
const https = require('https');

async function getNumTransactions(username) {
    return new Promise((resolve, reject) => {
        // Fetch user details
        https
            .get(`https://api.example.com/users?username=${username}`, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', async () => {
                    const userJson = JSON.parse(data);

                    // Check if the user exists
                    if (userJson.data.length === 0) {
                        resolve('Username Not Found');
                        return;
                    }

                    const userId = userJson.data[0].id;

                    // Fetch transaction details
                    https
                        .get(`https://api.example.com/transactions?userId=${userId}`, (res) => {
                            let txnData = '';

                            res.on('data', (chunk) => {
                                txnData += chunk;
                            });

                            res.on('end', () => {
                                const txnJson = JSON.parse(txnData);

                                // Return the total number of transactions
                                resolve(txnJson.total);
                            });
                        })
                        .on('error', (e) => {
                            reject('Error occurred while fetching transactions: ' + e.message);
                        });
                });
            })
            .on('error', (e) => {
                reject('Error occurred while fetching user details: ' + e.message);
            });
    });
}

getNumTransactions('alice')
    .then((result) => {
        console.log(result); // This will either print the total number of transactions or "Username Not Found"
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    });

getNumTransactions('bob')
    .then((result) => {
        console.log(result); // This will either print the total number of transactions or "Username Not Found"
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    });
