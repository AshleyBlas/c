import { setForm } from "./setForm.js";

export const createReplyButton =(sender,subject,timestamp, body,recipients, compose_email, mailbox)=>{
    const replyButton = document.createElement("button");
    replyButton.classList.add("btn", "btn-primary");
    replyButton.innerText='Responder';
    replyButton.addEventListener("click", async ()=>{
        
        compose_email();
        setForm({
            recipients: (mailbox === 'sent' ? recipients : sender),
            subject: subject.includes('Re: ') ? subject : `Re: ${subject}`,
            body: `\n En ${timestamp}, ${sender}, escribió: ${body} `  
        })
    })
    return replyButton;
}