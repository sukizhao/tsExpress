import * as http from 'http';

const serve = http.createServer((request, response) => {
    response.end("hello node!");
});
serve.listen(8000);