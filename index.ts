import Server from './classes/server';
import Router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;
// BodyParse
server.app.use( bodyParser.urlencoded({extended: true}) );
server.app.use( bodyParser.json() );

// Cors
server.app.use( cors({origin: true, credentials: true}) );

// Routes
server.app.use('/', Router);

server.start( () => {
    console.log(`Server running on: http://localhost:${server.port}`);
    
})