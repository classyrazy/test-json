// javascript for index.html
var blogsDivEl = document.querySelector(".blogs")
var formEl = document.querySelector("form")

var renderposts = async(term)=>{
    let uri = "http://localhost:3000/posts?_sort=likes&_order=desc"
    if(term){
        uri+=`&q=${term}`
    }
    var res = await fetch(uri)
    var posts = await res.json()
    let template = "";
    posts.forEach(post => {
        template+= `<div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0,200)}</p>
            <a href="details.html?id=${post.id}">Read more...</a>
        </div>`
    });
    blogsDivEl.innerHTML = template;
}
formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    renderposts(formEl.term.value.trim())
})

window.addEventListener("DOMContentLoaded",(e)=>renderposts())