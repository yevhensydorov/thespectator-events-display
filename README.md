# thespectator-events-display

The Spectator events viewer

## Boilerplate

Boilerplate for this project was create using Create React App for Typescript <br />
`npx create-react-app APP_NAME --template typescript`

## Setup and run the project locally

Clone the project to your local machine <br />
`git clone https://github.com/yevhensydorov/thespectator-events-display.git` <br />
<br />
Go to the project directory <br />
`cd thespectator-events-display` <br />
<br />
Install project dependencies <br />
`npm install` <br />
<br />
In the project directory, you need to create `.env` file with next value: <br />
`REACT_APP_API_SERVER_URL=EVENTS_LIST_LINK_FROM_THE_EMAIL` <br />
<br />
Run the project <br />
`yarn start` <br />
It'll run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Tests

To run the tests you can use command <br />
`yarn test` <br />
It'll launch the test runner in the interactive watch mode.<br />

## Explanation

It's React app, which uses Typescript, React Hooks and React Context APIs

### root

The Root of the project is `App.tsx` file where we are displaying a heading element and rendering `TableGenerator` component. <br />

### logic, data management and components

All the logic and data management lives in the `index.tsx` file in the `Tablegenerator` folder. We are using `useState` hook for initializing the state of our functional component. <br />
Initial state object should be:

```js
{
  status: Statuses.loading,
  payload: [],
  errorMessage: null,
}
```

`status` property will help us to handle the different state of our response, and display the right elements users. I have created `Statuses` _ENUM_ for better management named constants. <br />
`payload` property will have results of our response, actual data from the REST API. </br>
`errorMessage` property can be used for error handling and displaying messages to users. <br>

`fetchEvents` function is doing basic fetch. In case if everything is ok, we are changing status to loaded, getting our payload array and setting errorMessage to null. If there is an error, we set the status to error, leave payload as an empty array and setting errorMessage to the error message which comes from the API response.

#### Status Loading

There will be div with the text `Loading...` while we are fetching our data.

#### Error handling

There will be div with the text `Error while fetching events` if something is wrong with the API response.

#### Displaying the table

If our status is `loaded` we are displaying `Fetch latest events` button and the table. <br />
`Fetch latest events` button is provided for updating the table if the new events occur. Button has _onClick_ handler which is invoking `fetchEvents` function to get updated values.<br />
The Table itself is rendering in the `<Table />` component which has a standart structure with table head and table body. The interesting thing here that I wrapped `<Table />` component into the one of the latest React feature _Context_. `EventContext` creator lives in the `srs/contexts` folder.<br />

```js
<EventContext.Provider value={results}>
  <Table />
</EventContext.Provider>
```

I did it for easier data management for events. If in the future we will have several children of `<Table />` components, all of them will have the way to get the data which come from our API. Otherwise, we would need to do a _prop drilling_ which is a bad practice.<br />

`<Table />` component has a children `<EventRow />` where we are generating/mapping our event rows(Table rows). To get the data we are using `useContext` hook from react.<br />

```js
const results = useContext(EventContext);
```

After getting the results, we just need to loop through them and generate every row. Also, I've changed the display of Dates values to the _DD/MM/YYYY_ format for the better readability reasons.

## Future improvements

If I had more time I'd create next features/improvements:

1. Mock Tests for fetch and update elements in the table
2. Whole CRUD availability to manage events (show one event route, delete an event, update event)
3. App definitely needs styles to add
4. Better error handling to display an exact message which comes from the API
5. Display spinner while data is loading
6. **Extra Stretch Goal.** Wrap three apps (this one, REST API, event generator) into AWS Websockets service. It'll help to avoid having `Fetch latest events` button.
