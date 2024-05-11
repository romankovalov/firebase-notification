
## Notification service 

### How to setup

0. Install the Firebase CLI via npm by running the following command: `npm install -g firebase-tools`
1. Create new account and related project on https://console.firebase.google.com/
2. Inside created project navigate to "Build", "Firestore Database" and create new "Test" tier database
3. In the Terminal in the Root directory of the project run `firebase init`. Follow the prompts to select already created valid **ProjectId**, Firebase services (Firestore, Hosting, Emulators) and set up Firebase Emulators (Firestore, Hosting). 
   1. Do not replace `index.html` file.
   2. You can also choose to serve `/build` folder as a Firebase Hosting root directory to use "production" build of react-app.
4. Install all dependencies with `npm i` command.
5. Visit https://console.firebase.google.com/ and choose test project settings. Find and copy firebase config variables.
6. Populate `src/store/firebase.ts` with valid Firebase configs from step 5.
7. Run command `npm build` to build an application (Optional, should be used with `/build` folder for Firebase Hosting settings).
8. Run command `firebase emulators:start` to host local firebase application.
9. Visit http://localhost:5000/ (default route for Firebase Hosting emulator)

Additional steps:
10. Run `firebase deploy --only hosting` to deploy built version of webapp to your unique Firebase Hosting URL