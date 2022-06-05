# 2-Graphs

a) Create a database that can represent a list of restaurants, and the distance in km between each pair of restaurants (Don’t connect all of them, leave some without this piece of data).
b) Create a function in JavaScript to be run with Node that prepopulates the database with dummy data. Insert at least 10 restaurants.
c) Create a node server to fetch this data from the database.
d) Create a page where you can see the list of restaurants.
e) On said page, add a functionality that does the following:

- When clicking on a restaurant R, call the node server to fetch all other restaurants and the distance from R to each of them.
- Implement a “loader” for when the app is calling the server ONLY for the previous step.
- If there is no connection between R and some of the restaurants, it should still show them with a value of distance of “Unknown”.
- BONUS: You should be able to edit them in real time (i.e. edit the distances without a “Save” button; it should save automatically). Use your best judgement for this approach.
