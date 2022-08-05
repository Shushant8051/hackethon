var maxmin=[];
var size = 5;
for (var a=0; a<size; a++)
{
    maxmin[a] = prompt('enter array element' + (a+1));

}

let value= Math.max(...maxmin) + Math.min(...maxmin);
console.log(value);
