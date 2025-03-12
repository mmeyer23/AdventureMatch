# AdventureMatch

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Concurrently](https://img.shields.io/badge/Concurrently-00BFB3?style=for-the-badge&logo=concurrently&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76B900?style=for-the-badge&logo=nodemon&logoColor=white)
![CSS Loader](https://img.shields.io/badge/CSS%20Loader-2A9D8F?style=for-the-badge&logo=css3&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-2E8B57?style=for-the-badge&logo=cors&logoColor=white)
![Dotenv](https://img.shields.io/badge/dotenv-72A98D?style=for-the-badge&logo=dotenv&logoColor=white)

**AdventureMatch** is a platform designed to connect people based on their hobbies and skill levels. By creating a personal profile with your favorite activities and skill levels, you can search for like-minded individuals nearby and plan adventures together!

## Features

- **Create an Account:** Sign up and set up a profile with your hobbies, interests, and skill levels.
- **Search for Matches:** Find other members in your area who share similar hobbies and skill levels.
- **Hobby Categories:** Supports a wide range of hobbies, from outdoor activities to arts, music, and games.
- **Skill Level Matching:** Specify your skill level for each hobby (Beginner, Intermediate, Advanced) and find people at a similar experience level.
- **Location-Based Search:** Easily discover people nearby using Google Maps API for accurate geolocation matching.
- **Secure Authentication:** User accounts are securely managed with bcrypt encryption and session cookies.
- **Privacy and Security:** Users have full control over their profile visibility, ensuring data privacy and security.

## How It Works

1. **Sign Up & Create a Profile:**
   - Register using email and create a secure password.
   - Specify your hobbies and skill levels.
   - Set your location to connect with people nearby.

2. **Search for Matches:**
   - Use filters to search for other users based on hobbies and skill levels.
   - Browse their profiles to see their interests, skill levels, and location.
   - Send a connection request to plan your next adventure together.

3. **Plan Your Adventure:**
   - After connecting, plan a hobby-based event or activity.
   - Whether solo or in a group, AdventureMatch helps you set up your next experience with ease.

## Technologies Used

- **Frontend:** React.js for building an interactive user interface.
- **Backend:** Node.js and Express.js to handle API requests and server-side logic.
- **Database:** PostgreSQL for reliable and efficient data storage (user profiles, hobbies, connections).
- **Authentication:** bcrypt for secure password hashing and cookies for session management.
- **Geolocation:** Google Maps API for location-based user matching and mapping.
- **Build Tools:** Webpack for module bundling and optimization.
- **Environment Variables:** Configured for storing sensitive information like database credentials and API keys.

## Installation

### Prerequisites

- Node.js (v14 or above)
- PostgreSQL (either local installation or cloud-based)
- Google Maps API Key (for geolocation features)

### Steps to Set Up Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/adventurematch.git
    cd adventurematch
    ```

2. Install the dependencies:

    **For backend (Node.js & Express):**

    ```bash
    cd backend
    npm install
    ```

    **For frontend (React):**

    ```bash
    cd frontend
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in both the **backend** and **frontend** directories with the following:

    - In `backend/.env`:

      ```bash
      DATABASE_URL=your_postgresql_connection_url
      JWT_SECRET=your_jwt_secret_key
      COOKIE_SECRET=your_cookie_secret_key
      GOOGLE_MAPS_API_KEY=your_google_maps_api_key
      ```

    - In `frontend/.env`:

      ```bash
      REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
      ```

4. Run the application locally:

    **Start the backend server:**

    ```bash
    cd backend
    npm run server
    ```

    **Start the frontend development server:**

    ```bash
    cd frontend
    npm start
    ```

    Your application will be accessible at `http://localhost:3000`.

## Contributing

We welcome contributions to make AdventureMatch even better! To contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure that your changes follow the coding standards, and provide tests where applicable.

## License

AdventureMatch is licensed under the MIT License. See [LICENSE](LICENSE) for more details.
