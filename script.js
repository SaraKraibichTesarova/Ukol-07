
document.querySelector('#newsletter').addEventListener('submit', (e) => {
    e.preventDefault()
    const emailValue = document.querySelector('#email').value
    document.body.innerHTML = `Děkujeme za zájem. Newsletter se bude odesílat na adresu ${emailValue}.`
    })


document.querySelector('#email').addEventListener('input', () => {
    const field = document.querySelector('.field')
    const emailValue = document.querySelector('#email').value
    
        if(emailValue === '' || !emailValue.includes('@')) {
            field.classList.add('neplatny-vstup')
        } 
    
        else {
            field.classList.remove('neplatny-vstup')
        }
    })







