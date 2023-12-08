# PetMatch
## Description
This repository contains the code for the WIP web application **PetMatch**. PetMatch allows users to browse through different dog breeds, and say if they like or dislike the dog as a potential pet (in a similar fashion to most online dating apps). Then, the user can view a list of generated dog breed recommendations. These are dogs closely match the preference profile that the website builds up based on user activity in the browsing page. The user can then select certain dogs and view more  details about these particular breeds. The user can even be given a list of adoption centers nearest the user which contain their preferred dog breeds.


## Current Progress
- Created the basic views containing all necessary information and user actions, such as buttons, input fields, etc. for the following pages: 
    - Browsing
    - ResultsDetails
    - ResultsSummary
    - Welcome
- Created a shared navigation bar rendered at the top of each of the views.
- Implemented router and defined routes used by the navigation bar to access different views. 
- Implemented the API function calls necessary to be able to fetch dogs to display and recommend using the dog API.
- Initialized Firebase SDK and deploy the app.
- Implemented module responsible for user authentication through Firebase Authenticaion.
- Implemented module responsible for data persistence through Firebase RealtimeDatabas.


## Further Plans

- Implement the `ResultDetailsView` which displays in depth details about a selected dog, as well as displaying the adoption centers near the user which hold the selected dog. This view is reached by clicking on a dog in the `ResultsSummaryView`
- Integrate the application with the petFinders API, which will provide the `ResultDetailsView` with data about nearby adoption centers
- Design a more sophisticated dog matching algorithm. Currently it doesn't remember the dogs already seen and unseen, and recommends dogs by finding dogs closest in personality to the average of the personality attributes of all selected
- Make the application persistent. Save all user information, including personality preferences and recommended dogs. 
- Improve style and user experience. Design logo, get user feedback and improve design. 


## Project structure
### `src/main.jsx`
Contains the main bootstrapping for the website.

### `src/components`
This folder was made for the purpose of any component files, which  are common for the entire website such as the navigation bar component which is shared between all the screens of the website. This directory contains the file `navbar.jsx`. The navigation bar also contains a dropdown menu, which the user can click at any time to navigate to another page.

### `src/model`
This directory contains the files `dog.js`, `personalityAttributes.js` and `user.js` that define objects that store information about the `User`, `Dog` and the `PersonalityAttributes`. These objects are then encompassed by the **main app model** found in `appModel.js` that contains following model related functions: 
- `getDogRecommendations()`: Set `currentlyRecommendedDogs`.
- `removeDogFromRecommendations(dog)`: Remove dog from `currentlyRecommendeDogs`.
- `generateDisplayDog()`: Set `currentlyDisplayedDog`.

### `src/presenter`
This directory contains the main component `App` found in `app.jsx` that provides the routing functionality of the website and encompasses the following presenters: 

- `welcomePresenter.js`: Presenter for the `WelcomeView`
- `browsingPresenter.js`: Presenter for the `BrowsingView`
- `resultDetailsPresenter.js`: Presenter for the `ResultsDetailsView`
- `resultsSummaryPresenter.js`: Presenter for the `ResultsSummaryView`

### `src/services`
This directory contains modules responsible for:
- `dogApi.js`: Handles communication with the Api Ninjas **Dogs API**.
- `firebase.js`: Initializes the **Firebase SDK**.
- `firebaseConfig.js`: Imports and stores **Firebase configuration** from the environment variables stored in the `.env` file. (For reference, see: `.env_example`)
- `auth.js`: Manages user authentication through **Firebase Authentication**. 
- `db.js`: Manages persistence through **Firebase Realtime Database**.

### `src/styles`
This directory contains **CSS stylesheets** for components and views.

### `src/view`
This directory contains views for each of the different pages on the website:
- `browsingView.jsx` : This view contains the page where the user is presented with a bunch of dogs fetched from an API and presented in the form of swipable cards which the user can swipe or click on a like/dislike button to indicate their like/dislike towards the result. This will be used to tailor an algorithm which would show better results based on current data deduced from the user swiping.
- `welcomeView.jsx`, `loginView.jsx` and `signupView.jsx` : This views contains what's shown on the main page of the website. It mainly consists of a login form and different options to login or signup. The user can either login with a google account or login using another email.
- `resultDetailsView.jsx`: This view shows more details about a specific dog breed once a user clicks on one of them. It presents details on the different personality attributes of a dog breed such as trainability, it's average height, playfullness, energy etc. as well as displaying the adoption centers near the user which hold the selected type of dog. This view is reached by clicking on a dog in the `ResultsSummaryView` or by clicking on the dropdown menu on the navigation bar at the top.
- `resultsSummaryView.jsx`: Presents a list of dogs which the website thinks are suited to your preferences. This is based on your history of liking and disliking different dogs in the `BrowsingView`. The view shows a name, a picture and an `X` button for each dog. Clicking on the name or picture leads the user to the `ResultDetailsView`, which shows further information about the selected dog. Clicking on the `X` removes the dog from your recommended dogs, and updates the user's preferences such that this dog is never recommended again.
