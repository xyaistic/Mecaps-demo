let url="https://jsonplaceholder.typicode.com/todos/";

async function fetchData(){
try{
    const serverResponse= await fetch(url)
    const jSonResp=  await serverResponse.json();
    console.log(jSonResp)
}catch(error){
    console.log(error)
}
}

fetchData()

// Post se data sent hota hai
// Put se data update hota hai
// Delete se data delete hota hai
// Get se data recieve hota hai
// Patch se data specific field  update hota hai