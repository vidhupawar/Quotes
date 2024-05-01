    # Backend for Quotes Editor App

    ## Introduction
    This directory contains the server-side code for the Quotes Editor App, built with Express.js and connected to MongoDB.

    ## Setup
    ### Requirements
    - Node.js
    - npm
    - MongoDB

    ### Installation
    1. Install dependencies:
    ```bash
    npm install
    2. Set up environment variables:
        In .env, fill in your MongoDB URI and any other configurations.
    3. Start the server:
        npm start


    API Endpoints

    GET /quotes: Fetch all quotes.
    POST /quotes: Add a new quote.
    PUT /quotes/:id: Update an existing quote.
    DELETE /quotes/:id: Delete a quote.