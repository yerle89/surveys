const express = require('express');
const surveyController = require('../controllers/surveyController');

const router = express.Router();

router.post('/', surveyController.createSurvey);
router.get('/', surveyController.getSurveys);
router.get('/:id', surveyController.getSurveyById);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.deleteSurvey);

module.exports = router;