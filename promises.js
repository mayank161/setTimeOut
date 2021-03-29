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
        user.forEach((user) => {
            detail = `<h2>name = ${user.Name} email = ${user.Email}<button type="button" id="delete">DELETE POST</button><h2>`;
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

var button = document.getElementById('delete');
button.addEventListener('Click',removeElement);

function removeElement(e) {
    let bi = e;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            var as = document.getElementById('promise');
            var size = user.length;
            if(size === 0) { reject(as.innerHTML = 'Array is empty now'); }
            else { resolve(as.removeChild(bi)); }
        },2000);
    });
}

createUser({Name: 'Pius', Email: 'pius52@gmail.com'}).then(getUser).catch(err => console.log(err));

//removeElement().catch(err => console.log(err));
//getUser();
//removeElement().catch(err => console.log(err));
//removeElement().catch(err => console.log(err));
//removeElement().catch(err => console.log(err));

// promise.all in js
const promise1 = Promise.resolve('run by promise.resolve');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'run after 2s'));

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
