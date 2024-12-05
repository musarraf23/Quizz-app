import {Server} from "node:http"

const server = new Server((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
        .then(r=>r.json())
        .then(({results})=>{
            res.end(JSON.stringify(results));
        });
});

server.listen(1000);

