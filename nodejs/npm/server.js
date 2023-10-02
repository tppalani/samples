const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Buildpacks.io Java Sample</title>
    <link rel="icon" type="image/png" href="/favicon.png">
    <style>
        html, body {
            font-family: sans-serif;
            margin: 0;
            height: 100%;
        }
        .content-centered {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <div class="content-centered" style="margin: 0 auto; flex-direction: column; width: 67%; height: 100%;">
        <div class="content-centered">
            <a href="https://buildpacks.io"><img src="https://buildpacks.io/docs/concepts/how.svg" alt="Buildpacks.io Logo" style="width:50vw;"></a>
        </div>
        <h1>Hello, Buildpacker first Release!</h1>
    </div>
</body>
</html>`);
});

app.listen(port);
