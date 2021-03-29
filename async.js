// use case of promises to hold the const variables
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const wifeGetTicket = new Promise((resolve, reject) =>{
    setTimeout(() => { resolve('ticket'); },2000);
});

const wifeHungry = wifeGetTicket.then((t) => {
    console.log('husband: lets go');
    console.log('wife: I am hungry');
    return new Promise((resolve,reject) => {
        resolve(`${t}, popcorn`);
    });
});

const butter = wifeHungry.then((t) => {
    console.log('husband: do you want anything');
    console.log('wife: yes i need butter');
    console.log('husband: I got it');
    return new Promise((resolve,reject) => {
        resolve(`they got ${t} and butter`);
    });
});

butter.then((t => console.log(t)));

console.log('person4: shows ticket');
console.log('person5: shows ticket');