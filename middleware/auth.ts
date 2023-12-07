import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, 'authorization', (error: any, userData: any) => {
            res.locals.username = userData.user.email;
            if (error) {
                console.log(error);
                res.sendStatus(403);
            } else {
                return next();
            }
        })
    } else {
        res.sendStatus(403);
    }
}