import { createArchiveButton } from "./createArchiveButton.js";
import { createReplyButton } from "./createReplyButton.js";

export const createEmailDetails=({ sender, subject, timestamp, body,recipients,archived,id }, load_mailbox, compose_email, mailbox)=>{
    const emailDiv = document.createElement("div");
    emailDiv.innerHTML=`
       
        <p><strong>From:</strong> ${sender}</p>
        <p><strong>To:</strong>${recipients}</p>
        <p><strong>subject:</strong>${subject}</p>
        <p><strong>Timestamp:</strong>${timestamp}</p>
        <hr>
        <p>${body}</p>
    `

    const archiveButton= createArchiveButton(archived,id, load_mailbox);
    const replyButton= createReplyButton(sender,subject,timestamp,  body,recipients, compose_email,mailbox);
    emailDiv.append(archiveButton, replyButton);


    return emailDiv;
}