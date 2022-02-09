function prime(num)
{
    for(i=2;i<num;i++)
    if(num%i==0)
    {
        isprime=false;
        break;
    }
}
if (isprime)
console.log("Prime Number");
else
console.log("Not prime Number");

const num=26;
var isprime=true;
prime(num);
