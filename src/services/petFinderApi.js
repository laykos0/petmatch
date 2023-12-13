import axios from 'axios'; 
console.log("testing");
// try {
//     //const response = await axios.get(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
//     const response = await axios.get(
//         `https://api.petfinder.com/v2/organizations`, {
//     headers: { 'X-Api-Key': import.meta.env.VITE_PETFINDER_API_KEY },
//     });
//     console.log(response.data);

// } catch (error) {
//     console.error('Error fetching data:', error);
// }


// Get user Input

function getPetFinderData(){
    let token;
    // get authorization token
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body:
        "grant_type=client_credentials&client_id=" +
        import.meta.env.VITE_PETFINDER_API_KEY +
        "&client_secret=" +
        import.meta.env.VITE_PETFINDER_API_SECRET,
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((res) => res.json())
        .then((data) => {
        token = data.access_token;
        })
        .then(() => {
        // use token to fetch animals
        fetch(
            `https://api.petfinder.com/v2/organizations?state=MA&location=02421&sort=distance&limit=5`,
            {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            }
        )
            .then((res) => res.json())
            .then((data) => processLocationData(data));
        })
        .catch((err) => console.error(err));
    
        function processLocationData(data){
            console.log("data: ");
            console.log(data);
            console.log("data length: ", data.length);
            organizations = data.organizations;
        }
        
}
getPetFinderData();
