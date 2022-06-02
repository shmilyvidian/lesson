function curry(fn,...args) {
    const len = fn.length;
    return function _c(...nextArgs)  {
        const self = this;
        const _args = [...args, ...nextArgs]
        if(_args.length >= len){
            return fn.apply(self,_args)
        }else {
            return function ()  {
                return _c(..._args, ...arguments)
            }
        }
    }
}

var add = curry((a, b) => (a + b));
var add1 = curry((a, b) => (a + b),2);

console.log(add1(1))
console.log(add(1,2))
console.log(add(1)(2))