2. ans
Output of the following code snippet is 

GoodBye


Goodbye
Asynchronous :
It is declared with async keyword;
Ex:
function readAfter5sec(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved');},3000);
        });
    
}

async function callAsync(){
    consol.log('hackethon');// This line will print first
    const result= await resolveAfter3sec();
    consol.log('today');// this line will print after 3 sec

}

callback:
it is a type of function which passed into another function as argument , then put inside outer function to complete process


function today(id){
alert('hi'+yourName)
}
function userNmae(callback)
{var yourName = prompt('please enter');
callback(yourName);}
userNmae(today);

