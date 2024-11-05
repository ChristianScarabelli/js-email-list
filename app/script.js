console.log('Email List')


function generateRandomEmails() {
    const emailList = []  // Array per memorizzare le email

    for (let i = 0; i < 10; i++) {
        axios
            // API
            .get('https://flynn.boolean.careers/exercises/api/random/mail')

            // riposta
            .then((res) => {
                emailList.push(res.data.response)  // Aggiungi l'email all'array

                if (emailList.length === 10) {
                    displayEmailsInList(emailList)  // Se tutte le 10 email sono state generate, chiama la funzione per mostrarle
                }
            })

            // errore
            .catch((err) => {
                console.log('Errore:', err)
            })
    }
}

function displayEmailsInList(emails) {
    const listContainer = document.getElementById('email_list_container')
    listContainer.innerHTML = '' // Svuoto la lista

    const listUlContainer = document.createElement('ul')   // creo l'ul
    listUlContainer.classList.add('list-group')
    listContainer.appendChild(listUlContainer)   // appendo l'ul al contenitore

    emails.forEach(el => {
        const emailItem = document.createElement('li')  // creo gli li
        emailItem.textContent = el    // il testo degli li corrisponde all'elemento, cioè la mail
        emailItem.classList.add('list-group-item')
        listUlContainer.appendChild(emailItem) // Aggiungi l'elemento <li> all'elemento <ul>
    })
}


// chiamo la funzione
generateRandomEmails()