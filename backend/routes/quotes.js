const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');

router.get('/', quotesController.getAllQuotes);
router.post('/', quotesController.createQuote);
router.delete('/:id', quotesController.deleteQuote);
router.put('/:id', quotesController.updateQuote);

module.exports = router;
