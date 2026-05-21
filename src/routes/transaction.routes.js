const {Router} = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const transactionController = require('../controller/transaction.controller');

const transactionRoute = Router();

/**
 * Post /api/transaction/
 * Create a new transaction
 */

transactionRoute.post('/', authMiddleware.authMiddleware, transactionController.createTransaction);

/**
 * post /api/transactions/system/initial.funds
 * Create initial funds transaction from system user
 */

transactionRoute.post('/system/initial-funds', authMiddleware.authMiddleware, transactionController.createInitialFundsTransaction);

module.exports = transactionRoute;
