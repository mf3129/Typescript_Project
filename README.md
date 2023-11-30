## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies\

### `npm run start`

Runs the client side of the application.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Additional Notes`

Was not sure if you want me to hit a database so I left the processing of the clients payload on the application server side. If this was needed as well,
I would have just conneted to a database with a Tasks table using knex.js.


### `Additional Functionalities`

1. Clicking the star per todo item favorities the todo item which then implements a style update.\
2. Clicking on the todo item text will strikethrough the todo item as completed thus crossing out the todo item on the list. 
3. I decided to implement localStorage for this todoList so when the window is refreshed the data to do list persist.
4. Clicking on the last icon will shorten the description and give you the ability only when the task description is shortened to see a tooltip to view the complete word.
5. Toggle button per item on to do list is hidden if it does not meet the 60 letter minimum.
5. Search bar is disabled if there are no items in the list. 
