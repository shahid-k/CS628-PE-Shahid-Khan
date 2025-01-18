# PE02 Analysis Report

![PE02-2](https://github.com/user-attachments/assets/8c0a0d95-515d-469a-a619-2b292879f2f2)
![PE02-1](https://github.com/user-attachments/assets/b11daf80-726b-48b4-8760-7987323a2825)


## Input
The program takes a predefined list of movies as input, each represented as an object with properties: title, genre, and releaseYear (hardcoded in MovieList.js). Additionally, user input is captured via a dropdown menu to filter movies by genre and through click events on movie cards.

## Process
- **State Management**: The `useState` hook initializes the movies list and tracks the selected genre (`selectedGenre`).
- **Genre Filtering**: A unique list of genres is dynamically generated using `Set`, including "All Genres" as the default option. When a user selects a genre, the `handleGenreChange` function updates `selectedGenre`, and the `filteredMovies` array is recalculated to include only movies matching the selected genre.
- **Event Handling**: The `handleMovieClick` function triggers an alert displaying the title of the clicked movie card.

## Output
The program dynamically renders a list of filtered movie cards (title, genre, release year) in the browser. A dropdown allows users to filter movies by genre, and clicking on a movie card displays an alert with its title. The interface is styled using MovieList.css.
