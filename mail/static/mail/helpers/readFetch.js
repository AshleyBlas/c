export const readFetch = async(id)=>{
  await fetch(`/emails/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        read: true
    })
  }) 


}