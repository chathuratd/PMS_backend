# Pharmacy Management System Backend

This is the backend of a Pharmacy Management System built with the MERN stack. It is dockerized and deployed using GitHub Actions.

## Docker Image

You can pull the Docker image for this backend using the following command:

```sh
docker pull chathuratd007/pms_back:latest
```

## Running with Docker

To run the Docker container, use the following command:

```sh
docker run -d -p 4000:4000 \
          -e "MONGO_URI=<your-database-connection-string>" \
          -e "SECRET=<your-jwt-secret>" \
          -e "PORT=4000" \
          --name pms_back \
          chathuratd007/pms_back:latest
```

## Routes

The backend exposes the following main routes:

- `/api/user`: Handles user-related operations.
- `/api/prescription`: Manages prescriptions.
- `/api/reorder`: Handles reorder operations.
- `/api/expired`: Manages expired medications.
- `/api/abtexpired`: Handles ABT expired medications.
- `/api/outofstock`: Manages out-of-stock medications.
- `/api/abtoutofstock`: Handles ABT out-of-stock medications.
- `/api/drugouts`: Manages drug outs.
- `/api/medicinenames`: Handles medicine names.
- `/api/billing`: Manages billing operations.
- `/api/staffReward`: Handles staff reward operations.
- `/api/leaves`: Manages leave operations.
- `/api/leaderboard`: Handles leaderboard operations.
- `/api/salesreport`: Manages sales reports.
- `/api/allPres`: Handles all prescriptions.
- `/api/email`: Manages email operations.

## Deployment

The backend is currently hosted at: [http://34.228.79.166:4000/](http://34.228.79.166:4000/)

## Getting Started

To run the backend locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/chathuratd/PMS_backend.git
    cd PMS_backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file with the necessary environment variables:
    ```makefile
    MONGO_URI=<your-database-connection-string>
    SECRET=<your-jwt-secret>
    PORT=4000
    ```

4. Start the server:
    ```sh
    npm start
    ```

The server will start on [http://localhost:4000](http://localhost:4000).

## GitHub Actions

The workflow file for continuous integration and deployment can be found in the repository's GitHub Actions tab.
