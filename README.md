This project is a recipie finder website.
This project is created using React and an external API 'Spoonacular'.

Here's how I made this project.

First create a basic template using create-react-app. I deleted some files that were of no use in the project.<br/>
Then fix the design of the website.
Create components Picks rendering a specific type of recepies.(in this case vegetarian type).
Create component Popular rendering the latest trending recipes.

Popular.js
Create a function that will fetch recipes from API and convert to JSON format. Use the useEffect hook to call the function during mounting.
To show fetched recipes on the screen, use the usState hook. Use map method on the array to display each recepie on the screen.
