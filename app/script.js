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
    listContainer.innerHTML = ''  // svuoto la lista

    emails.forEach(el => {
        const emailItem = document.createElement('li')
        emailItem.textContent = el
        listContainer.appendChild(emailItem)
    })
}

// chiamo la funzione
generateRandomEmails()