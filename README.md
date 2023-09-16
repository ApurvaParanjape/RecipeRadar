This project is a recipie finder website.

This project is created using React and an external API 'Spoonacular'.



All styling is done using styled-components.

All icons are taken from react-icons

Framer-motion is used for fade-in transitions.

Here's how I made this project.



First create a basic template using create-react-app. I deleted some files that were of no use in the project.


Then fix the design of the website.


Here ar all the components and Pages I made in this web app:


App.js

It contains the navigation bar, components search and filters and pages Pages.js.



Home.js

It contains contains the components Picks.js and Popular.js




Pages.js
This page contains all components that are dynamic.

Routing is done in this page.

It contains Home.js, Cuisine.js, SearchResults.js and Recipe.js.


Popular.js

This component displays current trending recipes.

It contains a trending function that fetches the most popular recipes from api

These are then displayed using map function and styled using styled-components.

To make the carousel, install splide.

Use Splide component just after wrapper (denotes the carousel) and SplideSlide component just before card(denotes each individual slide);

You can store the fetched results into local storage using JSON.stringify() so that there is no need to fetch results from the API.



Picks.js

This page is same as popular.js



Filters.js

This component contains some cuisine filters that are commonly searched like Indian, Chinese, etc.

It is created using styled-components and react-icons.



Cuisine.js

It contains a getCuisine function which fetches recipes according to chosen cuisine.

The recipes are then displayed using map method.



Search.js

It contains search bar through which user can get recipes just by typing keywords.

It uses useNavigate Hook in submitHandler function that helps navigate to a different page.

Styling is done using styled-components and react-icons.



SearchResult.js

This page gives recipes correspondig to the keyword in the search bar.

It uses useParams hook to get parameters from url and pass it to the query in api.

It uses styled-components.



Recipe.js

This page is used to display details of a selected recipe.

It uses useParams Hook to get id of selected recipe from url and display information such as ingredients and instructions.


NOTE: dangerouslySetInnerHTML is used to render html that is provided by api

