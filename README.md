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

## PE03 Analysis Report
![PE03 Screenshots](https://github.com/user-attachments/assets/32fe0925-a53d-4810-8d75-b30f5cea7e70)

### Input
The todo list application follows the Input-Process-Output model and consists of separate components for the ToDo list and ToDo tasks. The Input stage involves capturing user input through an input field where users can enter descriptions of tasks they want to add to the list. The application uses the useState hook to manage the state of the ToDos. The user-entered data is stored in the newTodo state variable, allowing the application to handle changes and updates efficiently.

### Process
The Process stage is driven by event handlers that capture user interactions, such as clicking the "Add Task" or "Delete" buttons. The addTodo function processes the input by checking if the newTodo input is not empty, ensuring valid task descriptions. When the user clicks the "Add Task" button, the function updates the todo list by adding the new task to the todos state array using the setTodos function. Subsequently, the newTodo state is cleared, enabling the user to add more tasks consecutively.

The removeTodo function handles task deletion. When the user clicks the "Delete" button associated with a specific task, the function is triggered with the index of the task to be removed. The program creates a new array, updatedTodos, by filtering out the task at the specified index from the todos array. The setTodos function updates the state with updatedTodos, effectively removing the selected task from the todo list.

### Output
The Output stage presents the todo list to the user, dynamically rendered using the .map() function to display the list of ToDos. The ToDo tasks are showcased in a visually appealing table format, enhancing the user interface. The TodoList component renders a table with two columns - "Description" and "Actions." The description of each task is displayed in the first column, while an interactive "Delete" button is provided for each task in the second column. This enables users to manage their tasks effectively by easily adding new tasks or removing existing ones.

CSS styling is applied to further improve the user interface, making the todo list visually appealing and user-friendly. The TodoList.css file provides the necessary styles to enhance the layout and overall look of the application.

The todo list application adheres to the Input-Process-Output model effectively. By capturing user input, processing it through event handlers and state management with useState, and presenting the result as a dynamic and visually pleasing todo list, the application offers a seamless and efficient way for users to manage their tasks. The use of separate components and the .map() function enhances code modularity and readability, contributing to a well-organized and maintainable application.
