
let researchResult;
const researchYes = document.getElementById('researchYes');
const researchNo = document.getElementById('researchNo');

function selectYes() {
    if(researchYes.checked) {
        researchResult = true;
        researchNo.checked = false;
    }
}

function selectNo() {
    if(researchNo.checked) {
        researchResult = false;
        researchYes.checked = false;
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
form.addEventListener('reset', () => {
    researchResult = undefined;
});


function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    validateField(document.forms['form'].elements['name'], formData['name'], validateName, 'Campo nome não tem 10 caracterers');
    validateField(document.forms['form'].elements['email'], formData['email'], validateEmail, 'Email não válido');
    validateField(document.forms['form'].elements['comment'], formData['comment'], validateComment, 'Comentário não tem caractéres');
    displayResearchMessage(researchResult);
}

function validateField(field, data, validationFunction, failMessage) {
    if(data !== undefined && validationFunction(data)) return;
    alert(failMessage);
    field.focus();
}

function validateName(name) {
    return name.length >= 1;
}

function validateEmail(email) {
    const realEmail = email.trim();
    return realEmail !== '' && email.includes('@') && email.includes('.');
}

function validateComment(comment) {
    const realComment = comment.trim();
    return realComment.length >= 20;
}

function displayResearchMessage(result) {
    if(result === undefined) {
        alert('Responda a pesquisa');
        return;
    }
    if(!result) {
        alert('Que bom que você voltou a visitar esta página!')
        return;
    }
    alert('Volte sempre à está página!');
}
