const express = require('express');

const app = express();

app.use(express.static('public/dist'));

app.get('/', (req, res) => { console.log('request received'); });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
