// javascript for details.html
var id = new URLSearchParams(window.location.search).get("id")
var detailsDivEl = document.querySelector(".details")
var deleteBtnEl = document.querySelector(".btn")
var renderdetails = async () => {
    var res = await fetch("http://localhost:3000/posts/" + id)
    var post = await res.json()
    var template =
        `<h1>${post.title}</h1>
        <p>${post.body}</p>`
    detailsDivEl.innerHTML = template
}
deleteBtnEl.addEventListener("click",async (e)=>{
    var res = await fetch("http://localhost:3000/posts/" + id,{
        method: "DELETE"
    })
    window.location.replace("./index.html")
})


window.addEventListener("DOMContentLoaded", (e) => renderdetails())