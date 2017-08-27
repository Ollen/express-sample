/**
 * A simple Express server.
 */

const express = require('express');
const port = process.env.PORT || 3000;

let server = express();

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});