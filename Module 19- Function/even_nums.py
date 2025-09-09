def evenArray(a):
    evens=[]
    """for i in range(len(a)):
        if a[i]%2==0:
            evens.append(a[i])
    return evens"""

    for num in a:
        if num%2==0:
            evens.append(num)
    return evens

arr=[2,15,18,21,38,65,70]
x=evenArray(arr)
print(x)