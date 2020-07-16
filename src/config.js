export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51H5DheCggi1e4V3xDYuQBuFj5znSuhI3WjB925rgDLlFKog2lUUb4NHQ7dJ6rUvODdbW4R7goyfeE9au9sCe0yWt000dU9xIXr",
    s3: {
      REGION: "eu-west-2",
      BUCKET: "notes-myapp-uploads-bucket"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://t4waxv9ph8.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_CL8BGmt2U",
      APP_CLIENT_ID: "31rn7ojlcvf0e6u7u58cc7qra6",
      IDENTITY_POOL_ID: "us-east-2:583fe581-b684-4f64-9c6d-1ab63b755134"
    }
  };