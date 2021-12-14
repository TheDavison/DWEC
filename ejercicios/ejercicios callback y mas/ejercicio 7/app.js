const urlAPI = "https://jsonplaceholder.typicode.com";

const codigoHTML = document.querySelector(".aplicacion");

// fetch(`${urlAPI}/users`)
//     .then(response => response.json())
//     .then((users) => {
//         const template = users.map((user) =>`<li> ${user.name} ${user.email}</li>`);
//         codigoHTML.innerHTML = `<ul>${template}</ul>`;
//     })

// fetch(`${urlAPI}/users`)
//     .then(response => response.json())
//     .then((users) => {
//         let elementoUl = document.createElement("ul");
//         users.forEach((user) => {
//             let elementoLi = document.createElement("li");
//             elementoLi.appendChild(document.createTextNode(`${user.name} ${user.email}`));
//             elementoUl.appendChild(elementoLi);
//         });
//         codigoHTML.appendChild(elementoUl);
//     })
//     .catch(console.log("Illo pa que tocas"));

// fetch(`${urlAPI}/posts/1`)
//     .then(response => response.json())
//     .then((posts) => {
//         console.log(posts);
//     })
//     .catch((error) => {console.log(error);});


// async function fetchAPI(){
//     try {
//         let response = await fetch(`${urlAPI}/posts/1`);
//         let posts = await response.json();
//         console.log(posts);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchAPI();

// fetch(`${urlAPI}/todos`)
//     .then(response => response.json())
//     .then((posts) => {
//         console.log(posts);
//     })


//POST
fetch(`${urlAPI}/users`,{
    method: "POST",
    body: JSON.stringify({"name" : "David", "email" : "david@gmail.com"})
})
    .then(response => response.json())
    .then((users) => {
        console.log(users);
    })