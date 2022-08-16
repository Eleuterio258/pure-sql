import { Request, Response, Router } from "express";
import connection from "../../config/db";
const usersRouter = Router();


usersRouter.get('/users', (req: Request, res: Response) => {
    try {
        connection.query('SELECT u.name,u.email,u.fname,u.lname,u.profile_img,u.address,u.is_admin FROM users u', function (error: any, results: any, fields: any) {
            if (error) throw error;

            res.json({
                status: 200,
                result: true,
                data: results

            })
        });

    } finally {
        connection.end();
    }

})


export default usersRouter