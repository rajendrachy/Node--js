
// You are given an array of users:
// const users = [
//     { username: 'john_doe', isActive: true, logins: [ { date: '2025-06-20' }, { date: '2025-06-22' } ] },
//     { username: 'alice_w', isActive: false, logins: [ { date: '2025-06-10' } ] },
//     { username: 'bob99', isActive: true, logins: [] },
//     { username: 'carol_smith', isActive: true, logins: [ { date: '2025-06-21' } ] }
// ];

// Task:
// Write a function to:
// Filter only active users.


// From those, map to usernames.


// For each username, log in console:


// If they have logged in at least once → "User: [username], Last Login: [last login date]"


// If they have never logged in → "User: [username], No logins found"








//  const users = [
//     { username: 'john_doe', isActive: true, logins: [ { date: '2025-06-20' }, { date: '2025-06-22' } ] },
//     { username: 'alice_w', isActive: false, logins: [ { date: '2025-06-10' } ] },
//     { username: 'bob99', isActive: true, logins: [] },
//     { username: 'carol_smith', isActive: true, logins: [ { date: '2025-06-21' } ] }
// ];

// function ActiveUsers(users) {
//     users.forEach((user) => {
//         if (user.isActive) {
//             if (user.logins.length > 0) {
//                 let lastLogin = user.logins[user.logins.length - 1].date;
//                 console.log("User: " + user.username + ", Last Login: " + lastLogin);
//             } else {
//                 console.log("User: " + user.username + ", No logins found");
//             }
//         }
//     });
// }

// ActiveUsers(users);








