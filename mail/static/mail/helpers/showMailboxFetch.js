export const showMailboxFetch = async(mailbox)=>{
    const response = await fetch(`/emails/${mailbox}`)
    const data = await response.json();

    return data;
}