const url = 'https://gorest.co.in/public/v2/users/';
const options = {
    headers: {
                 'Authorization': 'bearer 115ebf4aad316127b8972c7e5a7a4e66d0a775f068b0bba3dcc1bb455015088d'
            }
}

const tabela = document.querySelector('#tbody');

async function getAllPosts(){
    const response = await fetch(url, options);

    const data = await response.json();

    console.log(data);

    data.map((post) => {
    linha= document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdEmail = document.createElement("td");
    tdGender = document.createElement("td");
    tdStatus = document.createElement("td");

    const tdEdit = document.createElement("td")
    const tdExcluir = document.createElement("td")
    tdEdit.innerHTML = `<td class="acao"><button><i class='bx bx-edit' ></i></button></td>`
    tdExcluir.innerHTML = `<td class="acao"><button><i class='bx bx-trash' ></i></button></td>`

    tdId.innerHTML = post.id
    tdNome.innerHTML = post.name
    tdEmail.innerHTML = post.email
    tdGender.innerHTML = post.gender
    tdStatus.innerHTML = post.status

    tdEdit.classList.add('acao')
    tdExcluir.classList.add('acao')

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdGender);
    linha.appendChild(tdStatus);
    linha.appendChild(tdEdit)
    linha.appendChild(tdExcluir)

    tabela.appendChild(linha);

    return linha
    })
}

getAllPosts()
