import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import UserModel from '../models/user-model';
import getReqValues from '../utils/helper';

const { CREATED, OK, FORBIDDEN } = StatusCodes;


export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
}

const list = async (req: Request, res: Response) => {
    try {
        let result = await UserModel.find({})
        let jsonMsg = { "status": true, responsecode: OK, data: result, message: "Data listed successfully" };
		res.status(OK).send(jsonMsg);
    }
    catch (err) {
        res.status(FORBIDDEN).send(err)
    }
}

const add = async (req: Request, res: Response) => {
    try {
        let userInput: CreateUser = req.body

        let result = await UserModel.create({
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            email: userInput.email
        })
        let jsonMsg = { "status": true, responsecode: 201, data: result, message: "Data inserted successfully" };
		res.status(OK).send(jsonMsg);
    }
    catch (err) {
        res.status(FORBIDDEN).send(err)
    }
}

const updatefun = async (req: Request, res: Response) => {
    try {
        const userInput = req.body;
        type ID = {
            _id?: string;
        };

        let whereCodn: ID = {};
        if (userInput.id) {
            whereCodn._id = userInput.id;
        }
        delete userInput.id;

        await UserModel
            .updateOne(whereCodn, { $set: userInput })
            .then(async (resp) => {
                if (resp) { 
                    let jsonMsg = { "status": true, responsecode: 201, data: resp, message: "updated successfully" };
                    res.status(OK).send(jsonMsg);
                }
            });
    } catch (err) {
        res.status(FORBIDDEN).send(err)
    }
};

const Deletefun = async (req: Request, res: Response) => {
    try {
        const userInput = req.body;
        type ID = {
            _id?: string;
        };

        let whereCodn: ID = {};
        if (userInput.id) {
            whereCodn._id = userInput.id;
        }
        delete userInput.id;
        await UserModel
            .deleteOne(whereCodn)
            .then(async (resp) => {
                if (resp) {
                    let jsonMsg = { "status": true, responsecode: OK, data: resp, message: "Deleted successfully" };
                    res.status(OK).send(jsonMsg);
                }
            });
    } catch (err) {
        console.log(err);
        res.status(FORBIDDEN).send(err)

    }
};


export default {
    list,
    add,
    updatefun,
    Deletefun
} as const;
