import { connection as db } from '../config/index.js';

class Cart {

    fetchAllCarts(req, res) {
        try {
            const strQry = `SELECT DISTINCT u.userID, u.firstName, u.emailAdd,
                                GROUP_CONCAT(p.prodID) AS productIDs,
                                GROUP_CONCAT(p.prodName) AS productNames,
                                SUM(p.amount) AS totalAmount, 
                                COUNT(p.prodID) AS quantity
                            FROM Cart c
                            JOIN users u ON c.userID = u.userID
                            JOIN products p ON c.prodID = p.prodID
                            GROUP BY u.userID, u.firstName, u.emailAdd
                            ORDER BY totalAmount DESC;`;

            db.query(strQry, (err, results) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    results: results
                });
            });
        } catch (error) {
            res.json({
                status: 404,
                msg: error.message
            });
        }
    }

    fetchCartByID(req, res) {
        try {
            const userID = db.escape(req.params.id); // Escape to prevent SQL injection
            const strQry = `SELECT DISTINCT u.userID, u.firstName, u.emailAdd,
                                GROUP_CONCAT(p.prodID) AS productIDs,
                                GROUP_CONCAT(p.prodName) AS productNames,
                                SUM(p.amount) AS totalAmount, 
                                COUNT(p.prodID) AS quantity
                            FROM Cart c
                            JOIN users u ON c.userID = u.userID
                            JOIN products p ON c.prodID = p.prodID
                            WHERE u.userID = ${userID}
                            GROUP BY u.userID, u.firstName, u.emailAdd
                            ORDER BY totalAmount DESC;`;

            db.query(strQry, (err, results) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    results: results
                });
            });
        } catch (error) {
            res.json({
                status: 404,
                msg: error.message
            });
        }
    }

    addCart(req, res) {
        try {
            const { userID, prodID, quantity, amount } = req.body;
            const strQry = `INSERT INTO Cart (userID, prodID, quantity, amount) 
                            VALUES (?, ?, ?, ?)`;

            db.query(strQry, [userID, prodID, quantity, amount], (err, results) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    message: 'Cart item added successfully',
                    results: results
                });
            });
        } catch (error) {
            res.json({
                status: 404,
                msg: error.message
            });
        }
    }

    updateCart(req, res) {
        try {
            const { userID, prodID, quantity, amount } = req.body;
            const strQry = `UPDATE Cart 
                            SET quantity = ?, amount = ?
                            WHERE userID = ? AND prodID = ?`;

            db.query(strQry, [quantity, amount, userID, prodID], (err, results) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    message: 'Cart item updated successfully',
                    results: results
                });
            });
        } catch (error) {
            res.json({
                status: 404,
                msg: error.message
            });
        }
    }

    deleteCart(req, res) {
        try {
            const { userID, prodID } = req.params;
            const strQry = `DELETE FROM Cart 
                            WHERE userID = ? AND prodID = ?`;

            db.query(strQry, [userID, prodID], (err, results) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    message: 'Cart item deleted successfully',
                    results: results
                });
            });
        } catch (error) {
            res.json({
                status: 404,
                msg: error.message
            });
        }
    }
}

export {
    Cart
}
