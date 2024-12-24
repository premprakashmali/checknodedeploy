

const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200

    const msg = "!Hello world my name is prem";
    res.end(msg)
});


server.listen(port, () => {
    console.log(`server runing on port ${port}`)
})