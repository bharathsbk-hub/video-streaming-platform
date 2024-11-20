import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // This file is auto-generated after amplify push

Amplify.configure(awsconfig);

Amplify.Auth.signUp({
    username: 'your-username',
    password: 'your-password',
    attributes: {
        email: 'your-email@example.com', // Optional
        phone_number: '+12345678900'     // Optional
    }
}).then(data => console.log(data))
  .catch(err => console.error(err));

  Amplify.Auth.signIn('your-username', 'your-password')
    .then(user => console.log(user))
    .catch(err => console.error(err));

    Amplify.Auth.signOut()
    .then(() => console.log('Signed out'))
    .catch(err => console.error(err));
