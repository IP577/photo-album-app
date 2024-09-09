# Getting Started with Create React App

Run the below script to install all packages mentioned in package.json

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test -- --watchAll=false --coverage`

Runs all available test suits and show the coverage of each file at the end

I have covered most files but if I had more time would've tried to go for 100% coverage in each one

ASSUMPTIONS:

1. I assumed that I don't have an API which would take a string as query or url parameter and return filtered images/items

What more would I have done if I had more time:

1. Would have aimed to add separate tests for both custom hooks, also I have not covered content.jsx since time was limited and all it's child components are already tested with every scenario .
2. Wanted to add the option for user to navigate between the result items using up and down arrow keys for even better accessibility, although currently same is possible via Tab and Shift + Tab.
3. Currently only 1 error message is shown in every invalid entry case, if I had more time I wanted to give the correct error message in case user left a space accidentally, then they will see "No spaces allowed", in case of special characters they will see "No special characters can be used".
4. Even better screen reading experience, would have liked to add image number for screen reader to read as user navigates to each list item.

App Usage Instructions

1. Just start typing in the search box and wait for 500ms for results to populate, since debouncing is implemented.
2. You can change the default time of debounce by going to src\components\content\content.jsx; line number: 14: and adding a property called 'dobounceDelay' to the component 'SearchBox'.
3. Browsing and navigation via keyboard is fully supported.
4. alt properties and aria-labels are provided whereever necessary to encourage assistive technologies like screen readers
5. Error handling is done such that we are not making a filter call unless the text input is valid, that means if there is a list before user types invalid text, we are retaining it.
