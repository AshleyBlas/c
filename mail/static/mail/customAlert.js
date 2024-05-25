export const customAlert = ({message, type})=> {
    const alertaDiv = document.createElement('div');
    alertaDiv.classList.add('alert', `${type === 'message' ? 'alert-success' : 'alert-danger' }`, 'alert-dismissible','fade','show' );
    alertaDiv.innerHTML = `
    ${ message }
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    return alertaDiv;
}