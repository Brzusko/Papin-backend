const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const imageUtils = require('./utils/images');

app.use(cors());
app.use('/static', express.static('static'));

app.get('/gallery', async(req, res) => {
    res.send(await imageUtils.getImagesPath());
});

app.listen(PORT, async() => {
    console.log('Server is running on port ', PORT);
});

console.log("dziolo");