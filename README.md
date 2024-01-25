# express_RouteParams

STEPS TO RUN SERVER:

1. clone repo into your desired folder
2. open terminal and change directory to your folder, command may vary based on preference of terminal. `cd`
3. type command `node index.js` and hit enter
4. terminal will print message that server is running, then go to `localhost:3000/user` or `localhost:3000/user/name` to see results

HOW ROUTE PARAMETERS ARE USED:

Route Parameters are used by the following regular expression `user/:name?` indicated in the index.js file in the callback function
this simple change will ensure that typing /user will display the default name 'User' and using /user/name with 'name' being whatever  
you want like 'john' will display john on the page 

req.params.name is the express object used to capture the data for `/:name?`   
