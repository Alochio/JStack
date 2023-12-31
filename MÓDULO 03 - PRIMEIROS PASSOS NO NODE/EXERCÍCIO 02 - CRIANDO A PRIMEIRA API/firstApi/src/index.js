const http = require('http');
const routes = require('./routes');

const server = http.createServer((request, response) => {
    console.log(`Request  method: ${request.method} | Endpoint: ${request.url}`);

    const route = routes.find((routeObj) =>(
        routeObj.endpoint === request.url && routeObj.method === request.method 
    ));

    if(route){
        route.hendler(request, response);
    } else{
        response.writeHead(404, {'content-Type' : 'application/json'});
        response.end(`Cannot ${request.method} ${request.url}`);
    } 
});

server.listen(3000, ()=> console.log('Server started at http://localhost:3000/users'));