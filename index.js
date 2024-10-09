//RESUELVE TUS EJERCICIOS AQUI


async function getAllBreeds() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();

        if (data.status === 'success') {
            const breeds = Object.keys(data.message); // Obtener todas las keys (razas) del objeto message
            return breeds;
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}


/// 2 imagen random 

async function getRandomDog() {
    
    try{
        const objetoPerro = await fetch('https://dog.ceo/api/breed/affenpinscher/images/random')
        const objetoPerroJSON = await objetoPerro.json()
        console.log(objetoPerroJSON);

        if(objetoPerroJSON.status === 'success') {
            const imagen = Object.values(objetoPerroJSON.message);
            return imagen.join('');
        }

    

} catch (error) {
    console.error('Error al imprimir imagen:', error);
}}

async function getRandomDog() {
    
    try{
        const objetoPerro = await fetch('https://dog.ceo/api/breed/affenpinscher/images/random')
        const objetoPerroJSON = await objetoPerro.json()
        console.log(objetoPerroJSON);

        if(objetoPerroJSON.status === 'success') {
            const imagen = Object.values(objetoPerroJSON.message);
            return imagen.join('');
        }

    

} catch (error) {
    console.error('Error al imprimir imagen:', error);
}}



async function getAllImagesByBreed() {
    
    try{
        const imagenPerro = await fetch('https://dog.ceo/api/breed/komondor/images')  
        const imagenesPerroJSON = await imagenPerro.json()
        console.log(imagenesPerroJSON);

        if(imagenesPerroJSON.status === 'success') {
            const imagen1 = Object.values(imagenesPerroJSON.message);
            return imagen1;
        }

    

} catch (error) {
    console.error('Error al imprimir imagen:', error);
}}




//4.- Declara una funcion getAllImagesByBreed2(breed) 
//que devuelva las imágenes de la raza pasada por el argumento


async function getAllImagesByBreed2(breed) {

    try {
        const imagenesKomondor = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const imagenesKomondorJson = await imagenesKomondor.json();
        console.log(imagenesKomondorJson);

        if (imagenesKomondorJson.status === 'success') {
            const listadoImagenes = Object.values(imagenesKomondorJson.message);
            return listadoImagenes
        }
    } catch {
        console.log('Error al cargar las imagenes de la raza komondor', error)
    }
}

// 5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de 
//usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

function getGitHubUserProfile(username) {
    const url = `https://api.github.com/users/${username}`;
    let result = fetch(url)
        .then(response => response.json())
        .then(data => {
            let nameUsuario = data;
            return nameUsuario;
        })
        .catch(error => {
            return;
        })
    return result;
}

// // 6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username),
// // retorne {img, name} y pinte la foto y el nombre en el DOM.

// function printGithubUserProfile(username) {
//     const result = getGitHubUserProfile(username)
//                     .then(data => {
//                       let img = data.avatar_url1;
//                       let name = data.name;
                      
//                       // pintar en el DOM (hecho al final)
  
//                       return { img, name };
//                     })
//                     .catch((error) => {
//                       return;
//                     });
//     return result;
//   }
  
//   printGithubUserProfile("alenriquez96").then((usuario) => {
//     const imgElement = document.createElement("img");
//     imgElement.src = usuario.img;
//     imgElement.alt = `Avatar de ${usuario.name}`;
  
//     const nameElement = document.createElement("h3");
//     nameElement.textContent = usuario.name;
  
//     const container = document.getElementById("ejercicio 6");
//     container.innerHTML = "";
//     container.appendChild(imgElement);
//     container.appendChild(nameElement);
  
//     console.log(usuario.img);
//   });

//  // 7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese
//  // usuario y devuelva un string que represente una tarjeta HTML 
//   //como en el ejemplo, la estructura debe ser exactamente la misma:


//   function getAndPrintGitHubUserProfile(username) {
//     let perfil = fetch(`https://api.github.com/users/${username}`)
//         .then(res => res.json())
//         .then(data => {

//             // Esto es para el ejercicio 8 (quitar y hacer el 8 con innerHTML)
//             let section = document.createElement('section');

//             let img = document.createElement('img');
//             img.setAttribute('src', data.avatar_url);
//             img.setAttribute('alt', "imagen de usuario");

//             let h1 = document.createElement('h1');
//             h1.textContent = data.name;

//             let p = document.createElement('p');
//             p.textContent = `Public repos: (${data.public_repos})`

//             document.body.appendChild(section);
//             section.appendChild(img);
//             section.appendChild(h1);
//             section.appendChild(p);

//             return 
//                 `<section>
//                     <img src="${data.avatar_url}" alt="${data.name}">
//                     <h1>${data.name}</h1>
//                     <p>Public repos: ${data.public_repos}</p>
//                 </section>`
            

//         })
//         .catch(err => console.log("MENSAJE DE ERROR: " + err.message));

//     return perfil;
// }

// //   8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. 
// //   El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. 
// //   Después llamaremos a la función getAndPrintGitHubUserProfile(username) que se 
// //   ejecute cuando se pulse el botón buscar.(Esto no se testea)
// //   /
//   document.getElementById('btn_buscarUsuario').addEventListener('click', function() {
//       const userValue = document.getElementById('usuario').value.trim();
  
//       // validamos que el campo 'usuario' no este vacio
//       if (userValue != "") {
//           getAndPrintGitHubUserProfile(userValue).then(datosUsuario => {
//               console.log("Ejercicio 8");
  
//               // añadimos el reasultado al DOM
//               const container = document.getElementById('ejercicio_8');
//               container.innerHTML = datosUsuario;
//               console.log("**");
//           });
  
//       } else {
//           document.getElementById('ejercicio_8').innerHTML = `
//               <label>Por favor, ingrese un nombre de usuario válido.</label>`
//           ;
//       }
//   });
  
// // 9.- Dada una lista de usuarios de github guardada en una array,crea una funcion 
// // fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/$%7Bname%7D' 
// // para obtener el nombre de cada usuario.
// // Objetivo: Usar Promise.all()
// // Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
// // Pregunta. ¿cuántas promesas tendremos?
// // /
// //async function fetchGithubUsers(usernames) {}
// const fetchGithubUsers = async (usernames) => {
//     // creamos un array de promesas de fetch usando map
//     const arr_Promises = usernames.map(user => 
//         fetch(`https://api.github.com/users/${user}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new `Error(Error: ${response.status})`;
//                 }
//                 return response.json();
//             })
//     );

//     // Esperamos a que todas las promesas se resuelvan y devuelve un array 
//     // con los datos de los usuarios.
//     try {
//         // /
//         // await: Este operador se usa dentro de funciones async y le dice 
//         // al motor de JavaScript que debe esperar a que la promesa se resuelva 
//         // antes de seguir adelante con la ejecución del código. 
//         // Si no utilizamos await, el código que sigue se ejecutará inmediatamente, 
//         // sin esperar el resultado de la promesa.
//         // */
//         const users = await Promise.all(arr_Promises);
//         return users;
//     } catch (error) {
//         console.error('Error en alguna de las Promesas:', error);
//     }
// };
// fetchGithubUsers(['octocat', 'alenriquez96', 'alejandroereyesb'])
//     .then(users => {
//         console.log("Ejercicio 9");
//         console.log(users);
//         console.log("**");
//     });