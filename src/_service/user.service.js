import { authHeader, handleResponse } from '../_helper';


export const userService = {
    login,
    register,
    getAll
};


function login(username, password) {
    const req = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => handleResponse(response))
        .then(json => {
            console.log('show json', json);
            return json;
        })
};

function register(user) {
    console.log('user', user);

    return new Promise((resolve, reject) => {
        getAll().then(
            allUsers => {
                if (!isExistedUsername(allUsers, user.username)) {
                    console.log('is new name');
                    allUsers.push(user);
                    localStorage.setItem('userList', JSON.stringify(allUsers));
                    resolve();
                }
                else {
                    console.log('is existed name');
                    reject();
                }
            },
            error => {
                console.log('is error get all');
                reject();
            }
        )
    });

};

function isExistedUsername(userList, username) {
    var isExist = false
    userList.map(registeredUser => {
        if (!isExist) {
            isExist = (username === registeredUser.username) ? true : false;
        }
    });

    return isExist;
};

function getAll() {

    var allUsers = JSON.parse(localStorage.getItem('userList')) || [];
    console.log('allUsers', allUsers);
    if (allUsers) {
        return Promise.resolve(allUsers);
    }
    else {
        return Promise.reject();
    }

};

// function handleResponse(response) {
//     return response.text().then(
//         text => {
//             const data = text && JSON.parse(text);
//             if (!response.ok) {
//                 if (response.status === 401) {
//                     //logout()
//                 }
//                 const error = (data && data.message) || response.statusText;
//                 return Promise.reject(error);
//             }
//             return data;
//         });
// };