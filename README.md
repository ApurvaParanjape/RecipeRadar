This project is a recipie finder website.
This project is created using React and an external API 'Spoonacular'.

Here's how I made this project.

First create a basic template using create-react-app. I deleted some files that were of no use in the project.

First create a basic template using create-react-app. I deleted some files that were of no use in the project.<br/>

Then fix the design of the website.

Create components Picks rendering a specific type of recepies.(in this case vegetarian type).

Create component Popular rendering the latest trending recipes.

<bold>Popular.js</bold>

Create a function that will fetch recipes from API and convert to JSON format. Use the useEffect hook to call the function during mounting.

To show fetched recipes on the screen, use the usState hook. Use map method on the array to display each recepie on the screen.

Install styled-components for styling.

Create styled-components Wrapper(for displaying content of popular picks) and Card(to display different recipes individually).Use them in return(). You can create a Gradient component to enhance the  look of each card.

To make the carousel, install splide.

Use Splide component just after wrapper (denotes the carousel) and SplideSlide component just before card(denotes each individual slide);

You can store the fetched results into local storage using JSON.stringify() so that there is no need to fetch results from the API.
