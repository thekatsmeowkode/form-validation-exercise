const form = document.getElementById('form')
const email = document.getElementById('email')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const passConfirm = document.getElementById('password2')

email.addEventListener('blur', () => {validateEmailInput()})
zip.addEventListener('blur', () => {validateZipInput()})

const validateEmailInput = () => {
    const emailValue = email.value
    if (emailValue === '') {alertError(email, 'Email is required')}
    if (!isValidEmail(emailValue)) {alertError(email, 'Must provide valid email')}
    else {alertSuccess(email)}
    //
    // const zipValue = zip.value
    // if (/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/.test(zipValue)) {alertSuccess(email)}
    // else {alertError(zip, "Must provide valid US zip code.  Example XXXXX or XXXXX-XXXX")}
}
const validateZipInput = () => {
    const zipValue = zip.value
    if (zipValue === '') {alertError(zip, "Zip Code is required")}
    if (!isValidZip(zipValue)) {alertError(zip, "Must provide valid zip code")}
}

function isValidEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    .test(email)
}

function isValidPostalCode(postalCode, countryCode) {
    switch (countryCode) {
        case "US":
            postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
            break;
        case "CA":
            postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
            break;
        default:
            postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
    }
    return console.log(postalCodeRegex.test(postalCode));
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