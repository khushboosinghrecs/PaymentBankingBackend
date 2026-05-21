const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const accountController = require('../controller/account.controller');

const accountRouter = express.Router();


/**
 * POST api/account/
 * Create a new account
 * Protected Route
 */


accountRouter.post('/', authMiddleware.authMiddleware, accountController.createAccountController);


/**
 * GET /api/accounts/
 * Get all accounts of the logged in user
 * Protected Route
 */

accountRouter.get('/', authMiddleware.authMiddleware, accountController.getUserAccountSController)


/**
 * GET /api/accounts/balance/:accountId
 */

accountRouter.get('balance/:accountId', authMiddleware.authMiddleware, accountController.getAccountBalanceController)

module.exports = accountRouter