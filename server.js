const express = require('express');
const app = express();

app.get('/api/name', (req, res) => {
	const name = "Nicolas Malo";

	res.json(name);
});

const port = 3001;
app.listen(port, () => console.log(`express server started on port ${port}`));