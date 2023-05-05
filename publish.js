var AWS = require("aws-sdk"); // must be npm installed to use
var sns = new AWS.SNS({
  endpoint: "http://127.0.0.1:4002",
  region: "us-east-1",
});
sns.publish({
  Message: "{content: \"hello!\"}",
  // MessageStructure: "json",
  TopicArn: "arn:aws:sns:us-east-1:000000000000:topi-test",
}, () => {
  console.log("ping");
});