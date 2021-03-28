setTimeout(() => {
    const li = `<li>promises in js</li>`
    document.getElementById('promise').innerHTML = li;
},1000);

let user = [
    {Name: 'Aja', Email: 'ajay12@gmil.com'},
    {Name: 'Rahu', Email: 'rahul34@gmil.com'}
];

function getUser(){
    setTimeout(() => {
        let detail;
        let count = 1;
        user.forEach((user) => {
            detail = `<h2>name = ${user.Name} email = ${user.Email}<h2>`;
            document.getElementById('promise').innerHTML += detail;
        });
    }, 1000);
}

function createUser(use) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.push(use);
            const error = false;
            if(!error) { resolve(); }
            else { reject('something went wrong'); }
        },1000)
    });
}

//var button = document.getElementById('delete');
//button.addEventListener('OnClick',removeElement);

/*function removeElement() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            var size = user.length;
            if(size === 0) { reject('Array is empty now'); }
            else { resolve(user.pop()); }
        },2000);
    });
}
*/
createUser({Name: 'Pius', Email: 'pius52@gmail.com'}).then(getUser).catch(err => console.log(err));

/*removeElement().catch(err => console.log(err));
removeElement().catch(err => console.log(err));
removeElement().catch(err => console.log(err));
removeElement().catch(err => console.log(err));*/