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

function clickButton(event){
    const post = {
        title: getTitle(),
        autor: getAutor(),
        message: getMessage(),
    }
    posts.push(post)
    console.log(posts)

    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<h1>${post.title}</h1>` + `<h3>${post.autor}</h3>` + `<p>${post.message}</p>`

}


/*function pressEnter(event){
    if (event.key == 'Enter'){
        getTitle()
        getAutor()
        getMessage()
    }
}

const post = {
    title: titles,
    autor: autors,
    message: messages,
}

console.log(post)*/


