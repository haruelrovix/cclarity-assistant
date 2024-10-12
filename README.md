# Welcome to CClarity Expo app 👋

This is a simplified version of the CClarity writing assistant interface, focusing on core functionality and clean implementation.<br />Built with [Expo](https://expo.dev).

## LIVE DEMO 👉 [cclarity.semboja.tech](https://cclarity.semboja.tech)

Deployed on S3 then exposed via CloudFront and Route53.

## Get started

1. Clone the repository

   ```bash
   ➜ git clone https://github.com/haruelrovix/cclarity-assistant
   ```
2. Install dependencies

   ```bash
   ➜ npm install
   ```
3. Create the `.env` file

   ```bash
   ➜ touch .env
   ```
4. Put the correct `API URL` and `API Key`

   ```bash
    EXPO_PUBLIC_API_BASE_URL=https://***
    EXPO_PUBLIC_API_KEY=***
   ```
   _(Contact havit or inspect cclarity.semboja.tech's Network 😉 to grab the credentials)_
5. Start the Web app

   ```bash
   ➜ npm run web
   ```

   It's running on `port:8081` by default.
   <img width="1526" alt="image" src="https://github.com/user-attachments/assets/0bf40174-f765-43da-8397-8fb736aa9776">

If you have a React Native environment ready, simply press `a` to open it on Android emulator or `i` for iOS Simulator.

[![iOS & Android, Watch the video](https://img.youtube.com/vi/Km0L7OGq2qw/0.jpg)](https://www.youtube.com/watch?v=Km0L7OGq2qw)

## Responsiveness

[![WEB, Watch the video](https://img.youtube.com/vi/JqfHWmTIpD8/0.jpg)](https://www.youtube.com/watch?v=JqfHWmTIpD8)

## AI Backend

Unfortunately, the code is not available in this repository. However, the project has been deployed to Amazon Web Services (AWS) with the following technology stack and architecture:

1. Backend Framework:

- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.

2. Serverless Architecture:

- AWS Lambda: For running code without provisioning or managing servers.

3. AI/ML Integration:

- Amazon Bedrock: A fully managed service that offers foundation models from leading AI companies.
- Model: Meta Llama 3 70B Instruct, Base Model (`meta.llama3-70b-instruct-v1:0`)

4. API Management:

- Amazon API Gateway: To create, publish, maintain, monitor, and secure APIs at any scale.

5. DNS Management:

- Amazon Route 53: For routing end users to the application with low latency.

6. Backend Exposure:

- Similar to the frontend, the backend is exposed to external access via API Gateway and Route 53.

This serverless architecture leverages AWS services to provide a scalable, maintainable, and cost-effective solution for AI-powered applications. The use of NestJS allows for structured and modular backend development, while Amazon Bedrock provides access to advanced language models like Meta's Llama 3.
