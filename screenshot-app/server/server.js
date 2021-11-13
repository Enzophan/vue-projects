const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');
const cors = require('cors');

const cleanImages = require('./utils/cleanImages');

const app = express();
const port = 5000 || process.env.PORT;

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

app.post('/screenshot', async (req, res) => {
    const ID = (new Date().getTime().toString(36));
    const loc = "./public/screenshots/" + ID + ".png";

    // start browser
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1920,
            height: 3000
        },
        ignoreDefaultArgs: ['--disable-extensions']
    });

    // open page
    const page = await browser.newPage();
    console.log("URL request: ", req.body.url)
    await page.goto(req.body.url);

    //take a screenshot
    await page.screenshot({
        path: loc
    });
    await browser.close();

    return res.json({
        success: true,
        ID,
        imageAdd: `/static/screenshots/${ID}.png`
    });
});

cleanImages();

app.listen(port, () => {
    console.log(`Server run on port: ${port}`)
})