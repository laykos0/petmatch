import axios from 'axios'; 
export async function getNewDogs(user) {
  if (import.meta.env.VITE_ENV == 'dev') {
    console.log("mocking dog api");
    return mockDogs;
  }
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
  console.log(dogs)
  return dogs;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

const mockDogs = [
    {
      "name": "Affenpinscher",
      "image_link": "https://api-ninjas.com/images/dogs/affenpinscher.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 10.25
      }
    },
    {
      "name": "Carolina Dog",
      "image_link": "https://api-ninjas.com/images/dogs/carolina_dog.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 18.625
      }
    },
    {
      "name": "Cesky Terrier",
      "image_link": "https://api-ninjas.com/images/dogs/cesky_terrier.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 11.5
      }
    },
    {
      "name": "Japanese Spitz",
      "image_link": "https://api-ninjas.com/images/dogs/japanese_spitz.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 13.5
      }
    },
    {
      "name": "Lakeland Terrier",
      "image_link": "https://api-ninjas.com/images/dogs/lakeland_terrier.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 14.75
      }
    },
    {
      "name": "Norwegian Lundehund",
      "image_link": "https://api-ninjas.com/images/dogs/norwegian_lundehund.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 14
      }
    },
    {
      "name": "Shikoku",
      "image_link": "https://api-ninjas.com/images/dogs/shikoku.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 19.5
      }
    },
    {
      "name": "Skye Terrier",
      "image_link": "https://api-ninjas.com/images/dogs/skye_terrier.jpg",
      "personalityPreferences": {
        "good_with_other_dogs": 3,
        "protectiveness": 3,
        "trainability": 3,
        "energy": 3,
        "barking": 3,
        "average_height": 10
      }
    }
]