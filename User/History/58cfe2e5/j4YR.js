const { ClientRequest } = require('http');

const array = ['1', '2', '3', '4', '5'];

const msg = console.log('Running ...', '\n');
/*
for (i = 0; i <= array.length; i++) {
    console.log(`${[i]}`);
}
*/
const newFunction = array.map((callbackPlaceHolder) => console.log('Array Map: ', callbackPlaceHolder));

const Prim = new Promise((resolve, reject) => { resolve('Promise Complete'); });

const object = {
    name: 'SpongeBob', family: 'Bob', vehicle: 'ferrari', music: 'trip hop', meth: (props) => console.log(props),

};

console.log('JSON Object Key Value Pairs :) ', object.meth('Accessing Object via object.meth and object.music!'), `${object.music}`);

const obj = {

    name: 'key1',
    method: new Promise((resolve, reject) => { console.log(resolve('Promises!')); }),

};

console.log(obj);

const hello = (var1, var2) => { console.log(var1, var2); };

hello('var 1', 'var 2');

(async () => { console.log('Awaiting: ', await Prim); })();

async function test() {
    const url = 'https://www.boredapi.com/api/activity';
    const response = await fetch(url).then((res) => res.json());
    console.log(response);
}

// test();

// eslint-disable-next-line no-unused-expressions
(async () => { const response = await fetch('https://www.boredapi.com/api/activity'); console.log(JSON.stringify(response)); })();
