// use case of promises to hold the const variables
/*console.log('person1: shows ticket');
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
console.log('person5: shows ticket');*/

// writing above code y using async and await to make code neat and readable
// you can make a variable and function async so that it will run at the last
// sync thing runs first it does not mater where they are at the top or at the bottom of code in js

console.log('person1: shows ticket');
console.log('person2: shows ticket');
// we can only use .then with promise because async always return promise therefore .then work
const preMovie = async () => {
    const wifeGetTicket = new Promise((resolve,reject) => {
        setTimeout((resolve('ticket')),2000);
    });
    const wifeHungry =  new Promise((resolve,reject) => resolve(`popcorn`));
    
    const butter = new Promise((resolve,reject) => resolve(`butter`));

    const coldDrink = new Promise((resolve,reject) => resolve(`cold Drink`));
    // we can only use await inside async function
    let ticket = await wifeGetTicket;
    console.log(`wife i got ${ticket}`);
    console.log('husband: lets go');
    console.log('wife: I am hungry');
    
    let popcorn = await wifeHungry;
    console.log('husband: lets go');
    console.log(`wife: I am hungry i need ${popcorn}`);
    
    let Butter = await butter;
    console.log('husband: do you want anything');
    console.log(`wife: yes i need ${Butter}`);
    console.log('husband: I got it');
    console.log('wife: wait what about the cold drink');

    let ColdDrink = await coldDrink;
    console.log(`husband: yes i bought some ${ColdDrink} too`);
    console.log('wife: lets go we are late');

    return ticket;
};
preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
