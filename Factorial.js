const ps = require("prompt-sync");
const prompt = ps();
const num=prompt("Enter the number ");
if(num==0)
console.log("Factorial is 1");
else
{
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    console.log("Factorial is "+fact);
}