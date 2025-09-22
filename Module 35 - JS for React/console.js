const getData=()=>{
    const name=document.getElementById("name").value
    const id= document.getElementById("id").value
    const info = JSON.stringify({id, name})
    localStorage.setItem(id, info)
}