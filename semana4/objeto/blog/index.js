let posts = []

function getTitle(){
    const title = document.getElementById("titulo-post")
    return title.value
}

function getAutor(){
    const autor = document.getElementById("autor-post")
    return autor.value
}

function getMessage(){
    const message = document.getElementById("conteudo-post")
    return message.value
}

function getImage(){
    const img = document.getElementById("img-post")
    return img.value
}

function clickButton(event){
    const post = {
        title: getTitle(),
        autor: getAutor(),
        message: getMessage(),
        img: getImage(),
    }
    posts.push(post)
    console.log(posts)

    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<div class="post">`+`<h1>${post.title}</h1>` + 
    `<h3>${post.autor}</h3>` + `<p>${post.img}</p>` + `<p>${post.message}</p>`+`</div>`

    clearAll()
}

function pressEnter(event){
    clickButton(event)
}

function clearAll(){
    const clear_title = document.getElementById("titulo-post")
    const clear_autor = document.getElementById("autor-post")
    const clear_message = document.getElementById("conteudo-post")

    clear_title.value = ""
    clear_autor.value = ""
    clear_message.value = ""    
}


function pressEnter(event){
    clickButton(event)
}
