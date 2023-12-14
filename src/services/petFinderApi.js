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
        // use token to fetch animals
        fetch(
            `https://api.petfinder.com/v2/organizations?state=${model.location.state}&location=${model.location.zip}&sort=distance&limit=5`,
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
    // let organizations= [
    //     {
    //       id: 'MA190',
    //       name: 'The Cat Connection',
    //       email: 'info@thecatconnection.org',
    //       phone: '(781) 899-4610',
    //       address: [Object],
    //       hours: [Object],
    //       url: 'https://www.petfinder.com/member/us/ma/waltham/the-cat-connection-ma190/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
    //       website: 'http://www.thecatconnection.org',
    //       mission_statement: 'To control the local feral (undomesticated) cat population through Trap-Neuter-Return-Maintain (TNRM) programs and to facilitate the adoption of stray and...',
    //       adoption: [Object],
    //       social_media: [Object],
    //       photos: [Array],
    //       distance: 3.5604,
    //       _links: [Object]
    //     },
    //     {
    //       id: 'MA424',
    //       name: 'Northeast Coonhound Rescue',
    //       email: 'necoonhoundrescue@gmail.com',
    //       phone: null,
    //       address: [Object],
    //       hours: [Object],
    //       url: 'https://www.petfinder.com/member/us/ma/lexington/northeast-coonhound-rescue-ma424/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
    //       website: 'http://www.necoonhoundrescue.org',
    //       mission_statement: 'Coonhounds and beagles are abandoned in shelters because in many parts of the country they have very little value as...',
    //       adoption: [Object],
    //       social_media: [Object],
    //       photos: [Array],
    //       distance: 3.6479,
    //       _links: [Object]
    //     },
    //     {
    //       id: 'MA556',
    //       name: "Noel's Dream Bully Rescue",
    //       email: 'noelsdreambullyrescue@gmail.com',
    //       phone: '(339) 222-8300',
    //       address: [Object],
    //       hours: [Object],
    //       url: 'https://www.petfinder.com/member/us/ma/waltham/noels-dream-bully-rescue-ma556/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
    //       website: 'https://form.jotform.com/NoelsDreamBullyRescue/AdoptionApplication',
    //       mission_statement: 'Noel’s Dream Bully Rescue is a nonprofit 501(c)(3) all-breed rescue located in MA. We are an all-volunteer, shelter-less rescue that...',
    //       adoption: [Object],
    //       social_media: [Object],
    //       photos: [Array],
    //       distance: 5.7538,
    //       _links: [Object]
    //     },
    //     {
    //       id: 'MA293',
    //       name: 'Whiskers of Hope, Inc.',
    //       email: 'whiskersofhope@gmail.com',
    //       phone: '(339) 970-9230',
    //       address: [Object],
    //       hours: [Object],
    //       url: 'https://www.petfinder.com/member/us/ma/arlington/whiskers-of-hope-inc-ma293/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
    //       website: 'http://www.whiskersofhope.org',
    //       mission_statement: 'Whiskers of Hope, Inc. is a non-profit no-kill adoption organization for cats and kittens. We are an all-volunteer 501(c)3 not-for-profit...',
    //       adoption: [Object],
    //       social_media: [Object],
    //       photos: [Array],
    //       distance: 6.3467,
    //       _links: [Object]
    //     },
    //     {
    //       id: 'MA130',
    //       name: 'Poodle Rescue New England',
    //       email: 'poodlerescue@poodlerescuene.org',
    //       phone: '(617) 628-1425',
    //       address: [Object],
    //       hours: [Object],
    //       url: 'https://www.petfinder.com/member/us/ma/somerville/poodle-rescue-new-england-ma130/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
    //       website: 'http://www.poodlerescuene.org',
    //       mission_statement: 'Poodle Rescue of New England is a 501 (c) 3 non-profit organization dedicated to rescuing, rehabilitating and re-homing poodles throughout...',
    //       adoption: [Object],
    //       social_media: [Object],
    //       photos: [Array],
    //       distance: 9.6971,
    //       _links: [Object]
    //     }
    // ];