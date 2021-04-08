

function greeter(greeting)
{
    function greet(name)
    {
        console.log(greeting,name())
    }
    return greet
}

// function greeter(greeting)
// {
//     function greet(name)
//     {
//         console.log(greeting,name)              // comment wla in html corresponds to this code
//     }
//     return greet
// }

function getname()
{
    return document.getElementById("namebox").value
}

let g1 = greeter('Good Morning')
let g2 = greeter('Good Evening')
g1('Neeraj')