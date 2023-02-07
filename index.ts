import express, { Express, Request, Response } from 'express';
import baseRouter from './routes/app';
import varmongoose from './db'


const app: Express = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express'),
    swaggerDocument = require('./swagger/swagger.json');



app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerDocument)));


app.use(express.json())

app.use('/api',baseRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello from the TypeScript world!</h1>');
});

  

app.listen(8080,()=>{   
    var dbconnection = varmongoose
    console.log('server started')
})