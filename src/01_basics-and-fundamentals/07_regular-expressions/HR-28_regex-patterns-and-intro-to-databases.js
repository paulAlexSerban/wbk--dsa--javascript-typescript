/**
 * Problem Statement:
 *
 * Given N rows of data simulating the Emails table, print an alphabetically-ordered
 * list of people whose email address ends in "@gmail.com".
 */

function main(input) {
    // split the input into lines
    const inputLines = input.split('\n');

    // the first line of input is the number of emails
    const N = parseInt(inputLines[0]);

    // the rest of the lines are emails
    const emails = inputLines.slice(1, N + 1);

    // we'll store the gmail users in an array
    const gmailUsers = [];

    // gmail regex from https://www.regular-expressions.info/email.html
    const gmailRegex = /^[a-z.]+@gmail.com$/;

    // loop through each email
    for (let email of emails) {
        // split the email into name and address
        const [name, emailAddress] = email.split(' ');

        // check if the address matches gmail regex
        if (gmailRegex.test(emailAddress)) {
            // if it does, add the name to the list of gmail users
            gmailUsers.push(name);
        }
    }

    // sort the gmail users
    gmailUsers.sort();

    // print the gmail users, one per line
    console.log(gmailUsers.join('\n'));
}

main(`6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com`);
