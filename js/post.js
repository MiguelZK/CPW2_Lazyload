// const myGitUser = 'miguelzk'

const urlDog = `https://dog.ceo/api/breeds/image/random`
// const urlGithub = `https://api.github.com/users/${myGitUser}`

const catContainer = document.querySelector('#caes')
// const gitContainer = document.querySelector('#github')

function mostraCatioros(data) {
    const { message } = data
    console.log(message)

    const dog = 
        `
        <img src="${message}" alt="${message}"/>
        `
    catContainer.innerHTML += dog
}

// function mostraGithub(data) {
//     const { avatar_url } = data

//     const git =
//         `
//         <img src=${avatar_url} alt="foto do usuário"/>
//         `
//     gitContainer.innerHTML = git
// }

async function fetchCatioros(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        mostraCatioros(data)
        console.log(data.message)        

    } catch (error) {
        catContainer.innerHTML = error.response.body
    }
}

// async function fetchGit(url) {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         mostraGithub(data)

//     } catch (error) {
//         gitContainer.innerHTML = error.response.body
//     }
// }

// fetchGit(urlGithub)
fetchCatioros(urlDog)

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetchCatioros(urlDog)
    }
}