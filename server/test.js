const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client', 'dist')));
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
});
app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
