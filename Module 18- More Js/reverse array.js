let a=[1,2,3,4,5,6,7,8,9,10];

///reversed array

for(let i=0; i<a.length/2; i++)
{
    let temp = a[i];
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = temp;
}

console.log("Reversed Array:", a);