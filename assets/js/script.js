const form = document.querySelector('.form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const topic = document.querySelector('#topic')
const message = document.querySelector('#message')
const errorMessages = document.querySelectorAll('.error-message')

form.addEventListener('submit', e => {
    e.preventDefault()
    resetErrors()
    validateInput()
})

const setError = (input, errorMessage) => {
    const errorMessageElement = input.nextElementSibling
    errorMessageElement.textContent = errorMessage
    input.parentElement.classList.add('error')
}

const resetErrors = () => {
    errorMessages.forEach(msg => msg.textContent = '')
    name.parentElement.classList.remove('error')
    email.parentElement.classList.remove('error')
    topic.parentElement.classList.remove('error')
    message.parentElement.classList.remove('error')
}

const validateInput = () => {
    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const topicValue = topic.value.trim()
    const messageValue = message.value.trim()

    if(nameValue === '') {
        setError(name, 'O campo nome é obrigatótio')
    }
    
    if(emailValue === '') {
        setError(email, 'O campo email é obrigatório')
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'E-mail inválido')
    }
    if(topicValue === '') {
        setError(topic, 'O campo assunto é obrigatório')
    }
    if(messageValue === '') {
        setError(message, 'O campo mensagem é obrigatório')
    }
}

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)