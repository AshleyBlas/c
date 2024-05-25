export const sendEmailFetch = async({ recipients, subject, body }) => {
    const response = await fetch('/emails',  {
        method: 'POST',
        body: JSON.stringify({
            recipients,
            subject,
            body
        }),
      })
      const data = await response.json();
      return data;
}