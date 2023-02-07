import mongoose, { ConnectOptions } from 'mongoose';
const varmongoose = mongoose
const url = 'mongodb://0.0.0.0:27017/testts'

mongoose
    .connect(process.env.MONGOURL || url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        autoIndex: true,
        // poolSize: parseInt(process.env.POOL_SIZE!),
    } as ConnectOptions)
    .then((res) => {
        console.log(`Connected to db - ${url}`);
    })
    .catch((err) => {
        console.log(`db error occured - ${err}`,);
    });

export default varmongoose