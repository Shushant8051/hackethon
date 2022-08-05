var maxmin=[];
var size = 5;
for (var a=0; a<size; a++)
{
    maxmin[a] = prompt('enter array element' + (a+1));

}

let value= math.max(...maxmin) + math.min(...maxmin);
console.log(value);
