import { Request, Response, Router } from "express";
import connection from "../../config/db";
const cartsRouter = Router();


cartsRouter.get('/carts', (req: Request, res: Response) => {
    try {
        connection.query('SELECT  * FROM carts u', function (error: any, results: any) {
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


cartsRouter.get("/cart/:id", (req: Request, res: Response) => {
    var userId = req.params.id

    console.log(userId)
    try {
        connection.query('SELECT * FROM carts WHERE user_id = ?', [userId], function (error: any, results: any, fields: any) {



            console.log(results)
            res.json({
                status: 200,
                result: true,
                data: results

            })
        })
    } finally {
        connection.end();
    }
})


cartsRouter.post("/cart/addToCart", (req: Request, res: Response) => {
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;


    console.log(user_id)
    console.log(product_id)
    console.log(quantity)


    const exitsCart = connection.query('SELECT * FROM carts WHERE user_id = ? AND product_id = ?', [user_id, product_id], function (error: any, results: any, fields: any) {
        if (error) throw error;
        if (results.length > 0) {
            console.log(results)
            res.json({
                status: 200,
                result: true,
                data: results
            })
        } else {
            const sql = 'INSERT INTO carts (user_id, product_id, quantity) VALUES (?,?,?)'
            const values = [user_id, product_id, quantity]

            console.log(values);
            connection.query(sql, values, function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.json({
                    status: 200,
                    result: true,
                    data: results
                })
            })
        }

    })
})


export default cartsRouter;
