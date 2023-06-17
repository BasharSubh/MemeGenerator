# Meme Generator

The Meme Generator is a web application that allows users to create custom memes by adding text to pre-selected meme images.

https://venerable-cendol-e0d212.netlify.app/

## Features

- Fetches a collection of meme images and data from an API
- Allows users to enter custom text for the top and bottom of the meme
- Generates a random meme image based on the selected text
- Displays the generated meme image along with the entered text
- Provides a button to fetch a new random meme image
- Loading state indicator while fetching meme data
- Real-time updates of the entered text

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## The Meme Generator app is a web application that allows users to create custom memes by adding text to pre-selected meme images. Here's an overview of how the app works:


- When the app loads, it fetches a collection of meme images and data from an API using the fetch function and the useEffect hook. The fetched data contains a list of memes with their respective URLs.

- The app initializes state variables using the useState hook:

#### allMemes: Stores the fetched meme data.
#### isLoading: Represents the loading state of the app.
#### meme: Holds the current meme information, including the top and bottom text entered by the user and a randomly selected meme URL.
## The app renders a user interface that consists of:

- Two input fields for entering the top and bottom text of the meme.
- A button labeled "Get a new meme image" that generates a random meme when clicked.
- A MemeBox component that displays the meme image based on the meme.randomUrl state.
- Paragraph elements that show the top and bottom text entered by the user.
## The app provides interactivity through event handlers:

- The handleFormChange function is called when the user modifies the text in the input fields. It updates the meme state with the new text values.
- The handleClick function is triggered when the "Get a new meme image" button is clicked. It selects a random meme URL from the allMemes data and updates the meme state with the new URL.
#### The app includes conditional rendering based on the isLoading state. When the app is in the loading state, the button is disabled and displays "Loading...". Once the meme data is fetched and the loading is complete, the button becomes clickable and displays "Get a new meme image".

#### The app utilizes the MemeBox component to display the selected meme image. The MemeBox component receives the meme.randomUrl as a prop and renders the image accordingly.

#### The user can enter custom text for the top and bottom of the meme, and the updated text is displayed below the meme image in real time.


That's an overview of how the Meme Generator app works. Users can generate custom memes by adding text to pre-selected meme images and instantly view the results.

Feel free to customize and expand upon the app according to your specific requirements and desired features.

Let me know if you have any further questions!
