import { createEmail } from "./createEmail.js";
import { createEmailDetails } from "./createEmailDetails.js";
import { customAlert } from "./customAlert.js";
import { readFetch } from "./helpers/readFetch.js";
import { sendEmailFetch } from "./helpers/sendEmailFetch.js";
import { showMailboxFetch } from "./helpers/showMailboxFetch.js";
import { setForm } from "./setForm.js";

document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  load_mailbox('inbox');
});

function compose_email() {

  // Show compose view and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';


  // Clear out composition fields
  setForm({
    recipients: '',
    subject: '',
    body: '',
  })
  document.querySelector('#compose-recipients').value = '';
  document.querySelector('#compose-subject').value = '';
  document.querySelector('#compose-body').value = '';

  const formulario= document.querySelector("#compose-form");
  formulario.addEventListener("submit", async(event) => {
    event.preventDefault();//evita el comportamiento por defecto del componente

    const recipients = document.querySelector("#compose-recipients").value ;
    const subject = document.querySelector("#compose-subject").value ;
    const body = document.querySelector("#compose-body").value ;

    const initialState = {
      recipients,
      subject,
      body,
    }

    const response = await sendEmailFetch(initialState);

    const newAlert = {
      message: response.hasOwnProperty('message') ? response.message : response.error,
      type: response.hasOwnProperty('message') ? 'message' : 'error',
    }

    customAlert(newAlert);
    clear();
  })

}

async function load_mailbox(mailbox) {
  
  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

  const emails = await showMailboxFetch(mailbox);
  const emailsView = document.querySelector('#emails-view');

  emails.forEach(email => {
    const emailDiv = createEmail(email);

    emailDiv.addEventListener("click", async()=>{
      const emailDetailsDiv = createEmailDetails(email, load_mailbox, compose_email, mailbox);
      emailsView.innerHTML="";
      emailsView.append(emailDetailsDiv);
      await readFetch(email.id);
    })

    emailsView.append(emailDiv);
  });
}

const clear = () => {
  document.querySelector('#compose-recipients').value = '';
  document.querySelector('#compose-subject').value = '';
  document.querySelector('#compose-body').value = '';
}