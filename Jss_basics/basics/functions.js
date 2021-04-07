
console.log(fun())

function fun() {
    console.log("hello")    
}

// console.log(a()) Reference Errror    /// function hoisting is done normal function not in let wle function 

let a = function()
{
    console.log("hello mr")
}

console.log(a()) 

//Function Polymorphism 


function area(height,width)
{
    if(width==undefined)
    {
        return Math.PI * height * height;
    }

    return height*width
}

console.log('area of 3 4 ',area(3,4))
console.log('area of 4 ',area(4))