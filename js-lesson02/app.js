// 1 Number
const num = 42; //integer
const floatNum = 42.42; //float
const powNum = 1.284e33; //

console.log(num);
console.log(floatNum);
console.log(powNum);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log('2/0', 2 / 0)
console.log(Number.NaN);
console.log(typeof Number.NaN);
const wierd = 2 / undefined;
console.log(Number.isNaN(wierd));
console.log(Number.isNaN(32));
console.log(Number.isFinite(42));
console.log(isFinite(Infinity));

const stringInt = '42';
const stringFloat = '42.42';
console.log(Number.parseInt(stringInt) + 2);
console.log(+stringInt + 2);
console.log(Number.parseFloat(stringFloat) + 2);

console.log(0.4 + 0.2)
console.log(parseFloat((2 / 5 + 1 / 5).toFixed(4)));

// 2 BigInt
const myBigNumber = 9007199254740991n;
const bigNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigNumber);
console.log(myBigNumber)

console.log(bigNumber + myBigNumber);
console.log(bigNumber ** 3n);

// 3 Math

console.log(Math.E, Math.PI);
console.log(Math.sqrt(25), Math.pow(5, 2), Math.abs(-42), Math.max(1, 2, 3, 5));
console.log(Math.floor(4.9), Math.trunc(4.9), Math.ceil(4.9), Math.round(4.9));
console.log(Math.floor(-4.9), Math.trunc(-4.9), Math.ceil(-4.9), Math.round(-4.9));
console.log(Math.random());

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomBetween(0,10));