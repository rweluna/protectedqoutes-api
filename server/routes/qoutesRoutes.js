const express = require('express');
const {getQoutes} = require('../controllers/qoutesController.js');
const {apiKeyAuth} = require('../middleware/apiKeyAuth.js');

const router = express.Router();

router.get('/', apiKeyAuth, getQoutes);

module.exports = router;