# This is the frontend part of a full-stack game match app.

Deployment link: https://game-match-frontend.vercel.app/

# Brief description:

In this part of the project, I implement the client side of the application using ReactJS bootstrapped with create-react-app,
The frontend consists of a SearchTable component that consumes the two endpoints provided by the backend part of this project : https://github.com/elyessAR/game-match-backend

# Additional used libraries

- MUI: used to create the search table and to help with the design
- axios: used to retrieve the api data

# Handling edge cases

- In case of the user leaving the "genre" and the "platform" empty, the table will return the highest (by playtime or by unique players) available games without taking in consideration the genre/platform.
- In case of the user entering an non-existing genre or a platform, the table will return an error message saying "  No games with such a genre/platform."


 Thank you.
