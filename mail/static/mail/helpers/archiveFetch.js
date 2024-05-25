export const archiveFetch =async(isArchive, id)=>{
    await fetch(`/emails/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            archived: !isArchive
        })
    })  
    
    return !isArchive;
}