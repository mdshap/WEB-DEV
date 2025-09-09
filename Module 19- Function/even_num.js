function evenArrray(a)
{
    let evens = []

    for(const num of a)
    {
        if(num%2===0)
            evens.push(num)
    }

    return evens
}

const arr=[2,15,18,38,65,70]
const even=evenArrray(arr)

console.log(even)