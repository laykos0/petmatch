import axios from 'axios'; 



export async function getNewDogs(user, rand_rec) {
  console.log("GET NEW DOG");
  if (import.meta.env.VITE_ENV == 'dev') 
    return mockDogs;
  
  let queryParams;
  try {
    console.log("IN TRY NEW DOG");
      const dogApiUrl = "https://api.api-ninjas.com/v1/dogs?"
      

      if(rand_rec){
        console.log("IN BROWSING GENERATION");
        queryParams = queryParamString(generateRandomAttributes())
        console.log(queryParams);
      }
      else{
        console.log("IN RECOMMENDATION GENERATION");
        queryParams = queryParamString(generateRecommendations())
        console.log(queryParams);
      }
      

      const response = await axios.get(
          dogApiUrl + queryParams,
          //dogApiUrl + `good_with_other_dogs=${user.personalityPreferences.good_with_other_dogs}&good_with_strangers=${user.personalityPreferences.good_with_strangers}&playfullness=${user.personalityPreferences.playfullness}&protectiveness=${user.personalityPreferences.protectiveness}&trainability=${user.personalityPreferences.trainability}&energy=${user.personalityPreferences.energy}&barking=${user.personalityPreferences.barking}`, 
          {headers: { 'X-Api-Key': import.meta.env.VITE_DOGS_API_KEY },});
      console.log(response.data);
      let dogToDisplay;
      let output = []
      response.data.forEach((element) => {
          dogToDisplay = {
              name: element.name,
              image_link: element.image_link,
              personalityPreferences: {
                  good_with_other_dogs: element.good_with_other_dogs,
                  good_with_strangers: element.good_with_strangers,
                  playfulness: element.playfulness,
                  protectiveness: element.protectiveness,
                  trainability: element.trainability,
                  energy: element.energy,
                  barking: element.barking,
                  average_height: (element.max_height_male + element.min_height_female) / 2
              }
          };
      output.push(dogToDisplay);
  });
  console.log(output)
  return output;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function generateRandomAttributes() {
  const attributes = [
    'protectiveness',
    'trainability',
    'energy',
    'barking',
    'shedding',
  ];

  const randomAttributes = {};
  const attributeName = attributes[Math.floor(Math.random() * attributes.length)];
  randomAttributes[attributeName] = Math.floor(Math.random() * 5) + 1;
  randomAttributes['offset'] = Math.floor(Math.random() * 16);
  console.log("random attributes are:");
  console.log(randomAttributes);
  return randomAttributes;
}


function generateRecommendations() {
  console.log("IN REC GEN FUNC");
  const attributes = [
    'protectiveness',
    'trainability',
    'energy',
    'barking',
    'shedding',
  ];

  const recommendations = {};
  const attributeName = attributes[Math.floor(Math.random() * attributes.length)];
  recommendations[attributeName] = Math.floor(Math.random() * 5) + 1;
  recommendations['offset'] = Math.floor(Math.random() * 16);
  console.log("random attributes are:");
  console.log(recommendations);
  return recommendations;
}

function queryParamString(attributes) {
  return Object.entries(attributes).map(([key, value]) => `${key}=${value}`).join('&');
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