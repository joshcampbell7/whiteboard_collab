const AWStest = require('aws-sdk');

// Configure AWS with credentials from environment variables
AWStest.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION
});

console.log(process.env.REACT_APP_AWS_ACCESS_KEY_ID);
console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);
console.log(process.env.REACT_APP_AWS_REGION);

module.exports = AWStest;
