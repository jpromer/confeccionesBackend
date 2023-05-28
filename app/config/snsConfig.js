const { SNSClient } = require("@aws-sdk/client-sns");

module.exports = () => {
  const snsClient = new SNSClient({
    region: process.env.REGION,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
      sessionToken: process.env.sessionToken,
    },
  });

  return snsClient
};
