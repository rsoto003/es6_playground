export function add(x, y){
    return x + y;
}
export function subtraction(x,y){
    return x - y;
}

export function multiplication(x,y){
    return x * y;
}

export function division(x,y){
    if(y === 0){
        return 'dont divide by zero, bro';
    }
    return x / y;
}

export function squared(x){
    return x * x;
}

export function cubed(x){
    return x * x * x;
}

export default () => {
    console.log('check the console for cool stuff like this from the default export that is located in math.js');
}