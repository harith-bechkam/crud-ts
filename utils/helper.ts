import _ from 'lodash';
import { Request, Response } from 'express';
const getReqValues = (req: Request) => {
    return _.pickBy(_.extend(req.body, req.params, req.query), _.identity);
}


export default getReqValues