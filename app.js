const Ash = require('lodash');

const arr = [[2], [3, [5, [7]], 10]];

const lodashArr = Ash.flatMapDeep(arr);

console.log(lodashArr);