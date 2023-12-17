import BrowsingImage from '../images/browsing1.png';
import ResultsImage from '../images/results1.png';
import DetailsImage from '../images/details1.png';
import "../styles/about.css";
import React from 'react';

function AboutView(props) {

  return (
    <div className="page-container my-10">
      <div className="section">
        <h2 className="section-title text-center text-5xl mb-10">What is Woof Finder?</h2>
        <p>
          Woof Finder is an App dedicated to helping you find a dog that will be your perfect match! Simply create an account and find your dream dog! Our goal is to match you with dogs most compatible with the personality and location you prefer. Our team, Jakub, Aditya, Anthony and Maia thought, what better way to do this than the same way we all look for love - by swiping! And most importantly, since the dogs we match you with are all shelter dogs, you will be able to give your perfect dog its forever home.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title text-center text-5xl mb-10">How does Woof Finder work?</h2>
        <div className="sub-section mx-auto flex">
          <div className="user-evaluation-images md:w-2/5 md:h-2/5 rounded-lg mb-10">
            <img src={BrowsingImage} alt="Browsing Image" />
          </div>
          <div className="evaluation-section flex-1 px-10">
            <div className="evaluation-content row-container">
              <div className="sub-section bg-indigo-100 rounded-lg m-3">
                <h4 className="sub-section-title">The Browsing Page</h4>
                <p className='text-lg text-black p-10'>
                  This page shows a set of different dogs, which the user can swipe through or use the like/dislike button on, in order to tailor their personalised recommendation algorithm for the type of dog they might like based on the first impression of the user upon looking at the dogs. After they have swiped through a few dogs, the user can go to the Results page to see their recommended dogs. The user can do this by clicking on the Dropdown Menu on the navigation bar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="sub-section mx-auto flex">
          <div className="user-evaluation-images md:w-2/5 md:h-2/5 rounded-lg mb-10">
            <img src={ResultsImage} alt="Results Image" />
          </div>
          <div className="evaluation-section flex-1 px-10">
            <div className="evaluation-content row-container">
              <div className="sub-section bg-indigo-100 rounded-lg m-3">
                <h4 className="sub-section-title">The Results Page</h4>
                <p className='text-lg text-black p-10'>
                  This page shows a collection of dogs, based on the user's swiping actions on the browsing page and the current location set by the user on their profile. The user can click on the dog's name to get more information on the dog and in effect navigate to the details page. The recommendations are such that the personality attributes match close to the attributes of the dogs which the user liked on the browsing page. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="sub-section mx-auto flex">
          <div className="user-evaluation-images md:w-2/5 md:h-2/5 rounded-lg mb-10">
            <img src={DetailsImage} alt="Details Image" />
          </div>
          <div className="evaluation-section flex-1 px-10">
            <div className="evaluation-content row-container">
              <div className="sub-section bg-indigo-100 rounded-lg m-3">
                <h4 className="sub-section-title">The Details Page</h4>
                <p className='text-lg text-black p-10'>
                  This page is reached by clicking on the name of a dog and presents the user with information about the dog's different personality attributes and a short description of the selected dog. The user can also see a list of nearby adoption centres with their contact details at the bottom of this page. This page also allows the user to remove the dog from the recommendations if they feel that the dog doesn't match their needs or navigate back to the results page in order to browse through their other recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section contact-detailss">
        <h2 className="section-title">Contact us</h2>
        <div className="contact-details-container">
          <p className="contact-item">Email: petmatchpetmatch@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default AboutView;