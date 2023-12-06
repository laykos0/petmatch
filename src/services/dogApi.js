import axios from 'axios'; 
export async function getNewDogs(user){
    console.log("we are tryna get new dogs");
    try {
        //const response = await axios.get(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
        const response = await axios.get(
            `https://api.api-ninjas.com/v1/dogs?good_with_other_dogs=${user.personalityPreferences.good_with_other_dogs}&good_with_strangers=${user.personalityPreferences.good_with_strangers}&playfullness=${user.personalityPreferences.playfullness}&protectiveness=${user.personalityPreferences.protectiveness}&trainability=${user.personalityPreferences.trainability}&energy=${user.personalityPreferences.energy}&barking=${user.personalityPreferences.barking}`, {
        headers: { 'X-Api-Key': 'byYycketCXubdw6W++wK9A==5QRtGUUW9F3mu4qm' },
        });
        console.log(response.data);
        let dogToDisplay;
        let output = []
        response.data.forEach((element) => {
            dogToDisplay = {
                name: element.name,
                image_link: element.image_link,
                personalityPreferences: {
                    good_with_other_dogs: element.good_with_other_dogs,
                    good_with_strangers: element.good_with_stranger,
                    playfulness: element.playfullness,
                    protectiveness: element.protectiveness,
                    trainability: element.trainability,
                    energy: element.energy,
                    barking: element.barking,
                    average_height: (element.max_height_male + element.min_height_female) / 2
                }
            };
        output.push(dogToDisplay);
    });
    console.log("the output is: ", output);
    return output;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}