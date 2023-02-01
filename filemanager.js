const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


const route = './src/assets/api/files/'
app.post('/api/file', (req, res) => {
    const { filename, content } = req.body;
    const fileNameAndPath = `${route}${filename}.json`
    fs.writeFile(fileNameAndPath, JSON.stringify(content), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
    res.send('Done!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})