# All PEs
## PE 01 Analysis Report

![SS-PE01](https://github.com/user-attachments/assets/554b61d9-e7d4-4a11-91b7-ed773715b69c)

Deployed CodeSpaces link: https://potential-fiesta-vq79r5q5v57fp5g4-3000.app.github.dev/

150 words analysis: The assignment focused on building a static resume using React components, which enhances modularity and reusability. By dividing the resume into distinct components such as Header, Personal Info, Education, Work Experience, Skills, Projects, and Social Links, developers can maintain a clean code structure that simplifies updates and maintenance. Applying CSS or a styling library ensures that the application has a visually appealing and cohesive design, allowing users to present their information professionally. The inclusion of interactive features, such as editable content, enhances user experience by enabling real-time modifications, catering to individual needs. This approach not only empowers users to personalize their resumes but also fosters user engagement through intuitive interactions. Overall, the assignment demonstrates the effective use of React’s component-based architecture, styling solutions, and interactive design principles, culminating in a polished and functional resume UI that meets modern web standards.

## PE02 Analysis Report

![PE02-2](https://github.com/user-attachments/assets/8c0a0d95-515d-469a-a619-2b292879f2f2)
![PE02-1](https://github.com/user-attachments/assets/b11daf80-726b-48b4-8760-7987323a2825)


### Input
The program takes a predefined list of movies as input, each represented as an object with properties: title, genre, and releaseYear (hardcoded in MovieList.js). Additionally, user input is captured via a dropdown menu to filter movies by genre and through click events on movie cards.

### Process
- **State Management**: The `useState` hook initializes the movies list and tracks the selected genre (`selectedGenre`).
- **Genre Filtering**: A unique list of genres is dynamically generated using `Set`, including "All Genres" as the default option. When a user selects a genre, the `handleGenreChange` function updates `selectedGenre`, and the `filteredMovies` array is recalculated to include only movies matching the selected genre.
- **Event Handling**: The `handleMovieClick` function triggers an alert displaying the title of the clicked movie card.

### Output
The program dynamically renders a list of filtered movie cards (title, genre, release year) in the browser. A dropdown allows users to filter movies by genre, and clicking on a movie card displays an alert with its title. The interface is styled using MovieList.css.
