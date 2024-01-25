const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Regular expression route
app.get('/user/:name?', (req, res) => {
    const username = req.params.name || 'User';
    res.send(`Welcome, ${username}!`);
});

// 404 error handler
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
