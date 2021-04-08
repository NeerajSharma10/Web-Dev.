
function checkthis()
{
    console.log(this)
}

let obj = {
    x : 10,
    y : 'neeraj',
    z : true,
    d : function(){
        console.log(this)
    },
    e : {
        a : 10,
        10 : 232344,
        q : function()
        {
            console.log(this)
        }
    }
}

//obj['a'] is also valid to write as js makes l side to string 