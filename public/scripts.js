document.addEventListener('click', event => {
    event.preventDefault()
    if(event.target.id === 'submit-burger') {
        if(document.getElementById('burger-name').value != '') {
            axios.post('/burger', {
                burgerName: document.getElementById('burger-name').value,
                wasEaten: false
            })
            .then(status =>{
                window.location.reload()
            })
        }
    } else if(/burger-[0-9]+/.test(event.target.id)) {
        let id = event.target.id.replace('burger-', '')
        axios.put('/burger', {
            wasEaten: true,
            id: parseInt(id)
        })
        .then(status => window.location.reload())
    }
})