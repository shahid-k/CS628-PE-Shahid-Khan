# Input
The Cities Application allows users to input city details through a user-friendly form. The required fields include:
- **City Name**
- **Country**
- **Population**

Users can navigate to the **Add City** page via the navigation menu to provide the above information. Additionally, the application comes preloaded with a list of cities for reference.

# Process
The application processes the input data using React's state management. When a user submits a new city, the application:
1. Validates and updates the city information in the internal state.
2. Uses React Router for seamless navigation between pages.
3. Displays city details dynamically by extracting the city ID from the URL and matching it to the stored city list.

# Output
The output includes:
- A dynamically updated **Cities List** with city name, country, and population displayed in a table.
- A detailed **City Details** view showing specific information for each city.
- Real-time updates to the list when a new city is added.
