# Lost and Found - Using LocationIQ API.

**Author** : Cailum Leyshon
**Version** : v1.0.12

## Overview

This web app is designed to interact with the LocationIQ API and utilize its geolocation services. The application provides a user-friendly interface for users to input a location, and it will return various location-related information such as latitude, longitude, and other geographical data. The goal of this project is to demonstrate how to integrate external APIs, specifically the LocationIQ API, into a React web application using Axios for making HTTP requests.

## Getting it Started

- npm create vite@latest
- cd "project name"
- npm run dev
- create .env file to store API Key
- add to .gitignore to hide file from external use
- git init
- git clone "project name"
- git add .
- git commit -m "Initial commit"
- git push -u origin main
- add to vercel as a project
- add environment variable
- deploy

## Architecture

This application is built using the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- LocationIQ API: An external API for geolocation services.

The application consists of the following components:

- `App.js`: The main application component that manages the state and handles user interactions.
- `LocationSearch.js`: A component responsible for accepting user input and sending requests to the LocationIQ API.
- `LocationInfo.js`: A component that displays location information retrieved from the API.
- `.env`: An environment variable file for storing the LocationIQ API key securely.

## Change Log

//

## Credits and Collaborations

- The LocationIQ API documentation: [LocationIQ API Documentation](https://locationiq.com/docs)
- React Documentation: [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- Axios Documentation: [Axios GitHub Repository](https://github.com/axios/axios)
