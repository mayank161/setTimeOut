// asynchronous data in js
// asynchronous data are those data which produce or run after all code completion such as (.timeOut)

let users = [
    {Name: 'Ajay', Email: 'ajay12@gmail.com'},
    {Name: 'Rahul', Email: 'rahul34@gmail.com'}
];
// you can also excess getUser after create user by just giving setTimeOut of get user greater then createUser
function getUser(){
    setTimeout(() => {
        let detail;
        let count = 1;
        users.forEach((user) => {
            detail = `<h2>name = ${user.Name} email = ${user.Email}<h2>`;
            document.body.innerHTML += detail;
            lastModify(count++);
        });
    }, 1000);
}

function createUser(user,callBack) {
    setTimeout(() => {
        users.push(user);
        callBack();
    },1000)
}

function create4thUser(user,createUser,delay) {
    setTimeout(() => {
        createUser(user,getUser);
    },delay);  
}

function lastModify(count) {
    document.getElementById('last').innerText = `last modification happened ${count} seconds ago`;
}
create4thUser({Name: 'Piush', Email: 'piush52@gmail.com'},createUser,1000);