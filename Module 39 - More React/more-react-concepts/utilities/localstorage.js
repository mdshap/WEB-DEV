
const addBoughtItemToLocalStorage = (id) =>{

    const bought= getBoughtItemsFromLocalStorage() 
    bought.push(id)
    localStorage.setItem('bought', JSON.stringify(bought))
}

const getBoughtItemsFromLocalStorage = () => {
    const storedItems= localStorage.getItem('bought')
    if(storedItems){
        const stored = JSON.parse(storedItems)
        return stored;
    }
    else
        return [];
     
}

export{
    getBoughtItemsFromLocalStorage,
    addBoughtItemToLocalStorage
}