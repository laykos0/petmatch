import React from 'react';
import { useObserver } from 'mobx-react-lite';
import '../styles/details.css';

function ResultDetailsView(props) {
  return useObserver(() => (
    <div className='flex'>
      {props.displayedDog.name ? (
        <div className='details-container'>
            <div>
            <div className=' text-5xl font-extrabold bg-orange-400 rounded-full w-7/10 mx-auto text-center mt-10'> {props.displayedDog.name} </div>
            <div className="dog-details-container flex">
                <div className="dog-image">
                <img src={props.displayedDog.image_link} height="100" alt={props.displayedDog.name} />
                </div>
                <div className="dog-details-info relative">
                    <div className='personality-attributes'>{renderPersonalityAttributes(props.displayedDog.personalityPreferences)}</div>
                        <a href="#/results-summary" className='flex justify-between'>
                            <button onClick={removeDogACB} className="remove-button px-4 py-2 mt-32">
                            Remove
                            </button>
                            <button onClick={() => console.log('going back')} className="back-button px-4 py-2 mt-32">
                            Go back!
                            </button>
                        </a>
                </div>
            </div>
            </div>

            <div className='mt-5 mb-5 bg-white info'>
                <div className=' bg-indigo-200 font-thin text-4xl text-slate-900 text-center p-4'>About the Dog</div>
                <div className=' text-violet-950'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eos, eveniet fugiat commodi corporis ipsa modi dolore rem doloremque obcaecati harum voluptates fugit sapiente nihil aliquam ex quidem praesentium quas ab voluptatibus iusto. Debitis enim expedita autem ut magni, sint dolor eos accusantium atque? Temporibus eos quos distinctio porro culpa rerum soluta possimus nam ipsam! Ducimus possimus temporibus deserunt omnis consectetur libero facere rem voluptatibus voluptates aperiam, animi dicta, eveniet exercitationem natus nesciunt tenetur impedit inventore perspiciatis accusamus dolores maxime asperiores atque odit? Dolores aut libero hic dolorum similique accusantium architecto voluptates possimus distinctio delectus sint, itaque aliquam. Cupiditate, illum.
                {/* {props.dogDescription || <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"/>} */}
                </div> 
            </div>

            <div className='bg-gray-300 mb-20 flex flex-col h-full w-full rounded-lg'>
              <div className='bg-indigo-200 font-thin text-4xl text-slate-900 text-center p-4'>
                Adoption shelters near you
              </div>
              <div className='flex-1 overflow-auto'>
                <table className='rounded w-full text-slate-900 bg-orange-300'>
                  <thead>
                    <tr>
                      <th className='bg-violet-300'>Organization Name</th>
                      <th className='bg-violet-300'>Distance From You (miles)</th>
                      <th className='bg-violet-300'>Phone Number</th>
                      <th className='bg-violet-300'>Website Link</th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.organizations
                      ? props.organizations.map(renderOrganization)
                      : (props.stateOrganizations ? props.stateOrganizations.map(renderOrganization):(
                        <tr key={11}>
                          <td>Select a state in the profile page</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

        </div>
      ) : (
        <h1>Please select a dog!</h1>
      )}
    </div>
  ));

  function removeDogACB() {
    props.removeDogCustomACB();
  }

  function renderPersonalityAttributes(attributes) {
    return (
      <div className="personality">
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

  function renderOrganization(organization) {
    return (
      <tr key={organization.id}>
        <td>{organization.name}</td>
        <td>{organization.distance}</td>
        <td>{organization.phone}</td>
        <td>{organization.website}</td>
      </tr>
    );
  }

  function renderStars(numberOfStars) {
    const stars = Array.from({ length: numberOfStars }, (_, index) => <span key={index}>&#9733;</span>);
    return stars;
  }
}

export default ResultDetailsView;