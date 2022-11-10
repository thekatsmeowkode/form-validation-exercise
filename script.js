const form = document.querySelector('#form')
const email = document.getElementById('email')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const passConfirm = document.getElementById('password2')
const passRules = document.getElementsByClassName('pass-rules')
const submitButton = document.getElementById('submit')

function checkRules(e) {
    const rule1 = document.getElementById('rule1')
    const rule2 = document.getElementById('rule2')
    const rule3 = document.getElementById('rule3')
    let passwordElement = document.getElementById('password')
    let password = passwordElement.value
    let passConfirms = document.getElementById('password2')
    for (let i=0; i < passRules.length; i++) {
        passRules[i].style.color = 'red'
    }
    if (password.length > 8) {rule1.style.color = 'green'}
    if (/\d/.test(password)) {rule2.style.color = 'green'}
    if (password === passConfirms.value) {rule3.style.color = 'green'}
    if ((password.length>8) && (/\d/.test(password))) {alertSuccess(passwordElement)}
    if (password === passConfirms.value) {alertSuccess(passConfirms)}
    else {return null}
}

const validateEmailInput = () => {
    const emailValue = email.value
    if (emailValue === '') {alertError(email, 'Email is required')}
    if (!isValidEmail(emailValue)) {alertError(email, 'Must provide valid email')}
    else {alertSuccess(email)}
}

const validateZipInput = () => {
    const zipValue = zip.value
    if (zipValue === '') {alertError(zip, "Zip Code is required")}
    if (!isValidZip(zipValue)) {alertError(zip, "Must provide valid zip code (XXXXX or XXXXX-XXXX)")}
    else {alertSuccess(zip)}
}

function isValidEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    .test(email)
}
function isValidZip(zip) {
    return (/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/).test(zip)
}

const alertSuccess = (element) => {
    const formElement = element.parentElement
    const errorMsg = formElement.querySelector('.error')

    errorMsg.innerText = ''
    formElement.classList.add('success')
    formElement.classList.remove('error')
}

const alertError = (element, message) => {
    const formElement = element.parentElement
    const errorMsg = formElement.querySelector('.error')

    errorMsg.innerText = message
    formElement.classList.add('error')
    formElement.classList.remove('success')
}

const submitForm = (e) => {
    console.log('fire')
    // e.preventDefault()
    // let allValid = form.checkValidity()
    // if (!allValid) {e.preventDefault()}
    if (password.value !== passConfirm.value) {e.preventDefault()}
    else (form.submit())
}

email.addEventListener('blur', () => {validateEmailInput()})
zip.addEventListener('blur', () => {validateZipInput()})
passConfirm.addEventListener('input', (e) => {checkRules(e)})
password.addEventListener('input', (e) => {checkRules(e)})
form.addEventListener('submit', (e) => {submitForm(e)})