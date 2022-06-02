function compose(...func){
    if(func.length === 0) return (arg) => arg
    if(func.length === 1) return func[0]

    return func.reduce((a,b) => (...args) => (a(b(...args))))
}

function a(arg){
    console.log('a', arg)
    return arg
}

function b(arg){
    console.log('b')
    return arg
}

function c(arg){
    console.log('c')
    return arg
}

const fn = compose(a,b,c)
fn('hello world')