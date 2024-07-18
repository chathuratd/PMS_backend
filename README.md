Pharmacy Management System Backend
This is the backend of a Pharmacy Management System built with the MERN stack. It is dockerized and deployed using GitHub Actions.

Docker Image
You can pull the Docker image for this backend using the following command:

sh
Copy code
docker pull chathuratd007/pms_back:latest
Routes
The backend exposes the following main routes:

/api/user: Handles user-related operations.
/api/prescription: Manages prescriptions.
/api/reorder: Handles reorder operations.
/api/expired: Manages expired medications.
/api/abtexpired: Handles ABT expired medications.
/api/outofstock: Manages out-of-stock medications.
/api/abtoutofstock: Handles ABT out-of-stock medications.
/api/drugouts: Manages drug outs.
/api/medicinenames: Handles medicine names.
/api/billing: Manages billing operations.
/api/staffReward: Handles staff reward operations.
/api/leaves: Manages leave operations.
/api/leaderboard: Handles leaderboard operations.
/api/salesreport: Manages sales reports.
/api/allPres: Handles all prescriptions.
/api/email: Manages email operations.
Deployment
The backend is currently hosted at: http://54.172.39.22:4000/

Getting Started
To run the backend locally, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/chathuratd/pharmacy-management-system.git
cd pharmacy-management-system/backend
Install dependencies:

sh
Copy code
npm install
Create a .env file with the necessary environment variables:

makefile
Copy code
MONGO_URI=<your-database-connection-string>
PORT=4000
SECRET=<your_jwt_SECRET>
Start the server:

sh
Copy code
npm start
The server will start on http://localhost:4000.
