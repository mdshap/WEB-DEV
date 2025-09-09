const loadData =() =>{
    const url = "https://jsonplaceholder.typicode.com/posts#"

    fetch(url)
    .then((response)=>response.json())
    .then((data)=> {
        displayPosts(data)
    })
}

const displayPosts = (posts) =>{
//   for(const post of posts){
//         console.log(post)
//     }


//1, get the post container
    const postContainer = document.getElementById("post-container")

    //0. set to empty


posts.forEach((post)=>{

    //2. create html element
    const postCard=document.createElement("div")
    postCard.innerHTML=
    `
    <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
    </div>
    `
    // const postCard=document.createElement("div")
    // const li=document.createElement("li")
    // li.innerText = post.title

    //3. add li into container
    postContainer.appendChild(postCard)

})
}

