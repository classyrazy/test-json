// javascript for create.html
var form = document.querySelector("form")

var createPost = async(e) =>{
    e.preventDefault()
    var doc = {
        title:form.title.value,
        body: form.body.value,
        likes:0
    }
    await fetch("http://localhost:3000/posts",{
        method: "POST",
        body: JSON.stringify(doc),
        headers: {"Content-Type":"application/json"} 
    })
    window.location.replace("./index.html")
}

form.addEventListener("submit",createPost)