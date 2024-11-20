const awsConfig = {
    Auth: {
        region: 'us-east-1', // Replace with your AWS region
        userPoolId: 'us-east-1_Oh0Lq68iE', // Replace with your Cognito User Pool ID
        userPoolWebClientId: '1r7c7073vrotgl0ilih1m8qa55', // Replace with your Web Client ID
    }
};

window.awsConfig = awsConfig; // Expose the config globally for use in your HTML
