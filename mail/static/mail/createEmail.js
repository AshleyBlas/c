export const createEmail =({sender, subject, timestamp, read})=>{
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('card', (read ? 'text-bg-secondary' : 'text-bg-light'));
    emailDiv.innerHTML=`
    
    <div class="card-body d-flex justify-content-between align-items-center">
    <p class="card-text"> <strong> ${sender} </strong> </p>
    <p class="card-text">${subject}</p>
    <p class="card-text">${timestamp}</p>
     </div>
    
    `
    return emailDiv;
}
