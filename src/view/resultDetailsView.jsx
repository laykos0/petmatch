import { useObserver } from "mobx-react-lite";

function ResultDetailsView(props){
    let currentlyDisplayedDog = {
        name: "Affenpinscher",
        image_link: "https://api-ninjas.com/images/dogs/affenpinscher.jpg",
        personalityPreferences: {
            good_with_other_dogs: 3,
            protectiveness: 1,
            good_with_strangers: 3,
            playfulness: 2, 
            trainability: 4,
            energy: 5,
            barking: 1,
            average_height: 10.25
        }
    }

    let organizations= [
        {
          id: 'MA190',
          name: 'The Cat Connection',
          email: 'info@thecatconnection.org',
          phone: '(781) 899-4610',
          address: [Object],
          hours: [Object],
          url: 'https://www.petfinder.com/member/us/ma/waltham/the-cat-connection-ma190/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
          website: 'http://www.thecatconnection.org',
          mission_statement: 'To control the local feral (undomesticated) cat population through Trap-Neuter-Return-Maintain (TNRM) programs and to facilitate the adoption of stray and...',
          adoption: [Object],
          social_media: [Object],
          photos: [Array],
          distance: 3.5604,
          _links: [Object]
        },
        {
          id: 'MA424',
          name: 'Northeast Coonhound Rescue',
          email: 'necoonhoundrescue@gmail.com',
          phone: null,
          address: [Object],
          hours: [Object],
          url: 'https://www.petfinder.com/member/us/ma/lexington/northeast-coonhound-rescue-ma424/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
          website: 'http://www.necoonhoundrescue.org',
          mission_statement: 'Coonhounds and beagles are abandoned in shelters because in many parts of the country they have very little value as...',
          adoption: [Object],
          social_media: [Object],
          photos: [Array],
          distance: 3.6479,
          _links: [Object]
        },
        {
          id: 'MA556',
          name: "Noel's Dream Bully Rescue",
          email: 'noelsdreambullyrescue@gmail.com',
          phone: '(339) 222-8300',
          address: [Object],
          hours: [Object],
          url: 'https://www.petfinder.com/member/us/ma/waltham/noels-dream-bully-rescue-ma556/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
          website: 'https://form.jotform.com/NoelsDreamBullyRescue/AdoptionApplication',
          mission_statement: 'Noel’s Dream Bully Rescue is a nonprofit 501(c)(3) all-breed rescue located in MA. We are an all-volunteer, shelter-less rescue that...',
          adoption: [Object],
          social_media: [Object],
          photos: [Array],
          distance: 5.7538,
          _links: [Object]
        },
        {
          id: 'MA293',
          name: 'Whiskers of Hope, Inc.',
          email: 'whiskersofhope@gmail.com',
          phone: '(339) 970-9230',
          address: [Object],
          hours: [Object],
          url: 'https://www.petfinder.com/member/us/ma/arlington/whiskers-of-hope-inc-ma293/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
          website: 'http://www.whiskersofhope.org',
          mission_statement: 'Whiskers of Hope, Inc. is a non-profit no-kill adoption organization for cats and kittens. We are an all-volunteer 501(c)3 not-for-profit...',
          adoption: [Object],
          social_media: [Object],
          photos: [Array],
          distance: 6.3467,
          _links: [Object]
        },
        {
          id: 'MA130',
          name: 'Poodle Rescue New England',
          email: 'poodlerescue@poodlerescuene.org',
          phone: '(617) 628-1425',
          address: [Object],
          hours: [Object],
          url: 'https://www.petfinder.com/member/us/ma/somerville/poodle-rescue-new-england-ma130/?referrer_id=2ff42b8e-62c6-4420-a835-bc3ff6ac4580',
          website: 'http://www.poodlerescuene.org',
          mission_statement: 'Poodle Rescue of New England is a 501 (c) 3 non-profit organization dedicated to rescuing, rehabilitating and re-homing poodles throughout...',
          adoption: [Object],
          social_media: [Object],
          photos: [Array],
          distance: 9.6971,
          _links: [Object]
        }
    ];

    return useObserver(() => (
        <div>
            <div>
                <h1> {currentlyDisplayedDog.name} </h1>
                {/* <div className="DogResults">
                    <button onClick={(evt) => console.log("going back to search")}>Back to search</button>
                    <button onClick={(evt) => console.log("logging out")}>Log out</button>
                </div> */}
                <div key = {currentlyDisplayedDog.name} class="dogResults">
                <img src= {currentlyDisplayedDog.image_link} height = "100"></img>
                <div className="dogResultsMainPart">
                    <p>{renderPersonalityAttributes(currentlyDisplayedDog.personalityPreferences)}</p>
                </div>
                <button onClick={console.log("trying to remove dog")} class="dogResultsRemoveButton">x</button>
                </div>
            </div>

            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div>
                <h3> Adoption shelters near you:</h3>
            </div>
            <div>
            <table>
                <thead>
                  <tr>
                    <th>Organization Name</th>
                    <th>Distance From You</th>
                    <th>Phone Number</th>
                    <th>Website Link</th>
                  </tr>
                </thead>

                <tbody>
                  {  
                    organizations.map(renderOrganization)
                  }
                </tbody>
            </table>
            </div>

        </div>
    ));
    
    function renderPersonalityAttributes(attributes){
        return (
        <div>
            <div>Good with other dogs: {renderStars(attributes.good_with_other_dogs)}</div>
            <div>Good with strangers: {renderStars(attributes.good_with_strangers)}</div>
            <div>Playfulness: {renderStars(attributes.playfulness)}</div>
            <div>Protectiveness: {renderStars(attributes.protectiveness)}</div>
            <div>Trainability: {renderStars(attributes.trainability)}</div>
            <div>Energy: {renderStars(attributes.energy)}</div>
            <div>Barking: {renderStars(attributes.barking)}</div>
            <div>Average height: {attributes.average_height}</div>
        </div>
        );
    }


    function renderOrganization(organization){
        return <tr key={organization.id } >
                 <td>{organization.name}</td>
                 <td>{organization.distance} miles </td>
                 <td>{organization.phone}</td>
                 <td>{organization.website}</td>
               </tr>;
    }

    function renderStars(numberOfStars){
        let stars = Array.from({ length: numberOfStars }, (_, index) => (
            <span key={index}>&#9733;</span>
        ));
        return stars;
    }

}

export default ResultDetailsView;