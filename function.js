// function declaration

function add(first, second){
    const total = first + second;
    return total;

}

const result = add(10, 20);
console.log(result);


// function expression

const add1 = function add1(first, second){
    const total =first + second;
    return total;
}

// function expression with anonymous function

const add2 = function(first, second){
    const total =first + second;
    return total;
}



// array function
const add6 =(first, second) => first + second;
