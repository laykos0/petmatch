import axios from 'axios';

export async function getPetFinderData(model){
    let token;
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
        fetch(
            `https://api.petfinder.com/v2/organizations?state=${model.user.location.state}&location=${model.user.location.zip}&sort=distance&limit=5`,
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
            .then((data) => {model.organizations = data.organizations});
        })
        .catch((err) => console.error(err));
}

export async function getPetFinderDataState(model){
    let token;
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
        fetch(
            `https://api.petfinder.com/v2/organizations?state=${model.user.location.state}&limit=5`,
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
            .then((data) => {model.stateOrganizations = data.organizations});
        })
        .catch((err) => console.error(err));
}