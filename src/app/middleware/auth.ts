import { Request, Response, Next } from "express";
import { verify } from 'jsonwebtoken';
import SECRET_KEY from "../Config/token";

export default function Auth(req: Request, res: Response, next: Next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if(token == null) return res.sendStatus(401);

    verify(token, SECRET_KEY,  (err: any, user: any)=>{
        console.log(err)

        if(err) return res.sendStatus(403)

        console.log(user);
        req.id_user = user.id;
        req.nome = user.nome;
        
        next()
    })


}