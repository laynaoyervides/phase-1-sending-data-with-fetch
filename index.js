// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', 
        {
            method: 'POST',
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"     
            },
            body: JSON.stringify(
                {
                    "name": userName,
                    "email" : userEmail
                }
            )
        })
        .then (response => response.json())
        .then(data => renderId(data))
        .catch((error)=>{
           document.body.innerHTML = error;
        });
        

    }
    const renderId = data => {
        document.body.innerHTML = data.id;
   
    };