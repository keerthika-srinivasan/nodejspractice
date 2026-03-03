//CommonJS- Default Module Type-defult type-.cjs or js export and require is needed -syncronus op
/*const{add,sub,mul}=require('./math');
console.log(add(2,3));
console.log(sub(6,3));
console.log(mul(9,5));*/

//ESModule-Type-Module need to mentioned in package.json-async- statci loading-import and export

import {add,sub,mul} from './math.js'
console.log(add(2,3));
console.log(sub(6,3));
console.log(mul(9,5));