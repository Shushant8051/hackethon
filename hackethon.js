var maxmin=[];
var size = 5;
for (var a=0; a<size; a++)
{
    maxmin[a] = prompt('enter array element' + (a+1));

}

console.log(math.max(...maxmin));
console.log(math.min(...maxmin));
