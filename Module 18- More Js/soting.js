//Genheral Method(Linear Sort)
 const a= [2, 1, 6, 4, 9, 3, 10, 8, 7, 5];

 for(let i=0; i<a.length; i++)
{
     for(let j=i; j<a.length; j++) 
    {
        if(a[i]>a[j])
        {
            let temp=a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
 console.log("Sorted Array:", a);

 //General (Bubble Sort)
 const b= [19, 5, 123, 4, 56, 22, 10, 87, 72, 5];

 for(let pass=0; pass<b.length; pass++)
 {
    let swapped = false;
    for(let i=0; i<b.length-1-pass; i++)
    {
        if(b[i]>b[i+1])
        {
            let temp = b[i];
            b[i] = b[i+1];
            b[i+1] = temp;
            swapped = true;
        }
    }
    if(!swapped) break;

 }
    

console.log("Bubble Sorted Array:", b);