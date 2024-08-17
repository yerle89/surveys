const surveyService = require('../services/surveyService');

async function createSurvey (req, res) {
  try {
      const survey = await surveyService.createSurvey(req.body);
      res.status(201).json(survey);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

async function getSurveys(req, res) {
  try {
    const surveys = await surveyService.getSurveys();
      res.status(200).json(surveys);
      console.log('Request Get Surveys');
      console.log('Response Status:', res.statusCode);
      console.log('Response Status Message:', res.statusMessage)
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

async function getSurveyById (req, res) {
  try {
      const survey = await surveyService.getSurveyById(req.params.id);
      if (survey) {
          res.status(200).json(survey);
      } else {
          res.status(404).json({ error: 'Survey not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

async function updateSurvey (req, res) {
  try {
      const survey = await surveyService.updateSurvey(req.params.id, req.body);
      if (survey) {
          res.status(200).json(survey);
      } else {
          res.status(404).json({ error: 'Survey not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

async function deleteSurvey (req, res) {
  try {
      const success = await surveyService.deleteSurvey(req.params.id);
      if (success) {
          res.status(200).json({ message: 'Survey deleted successfully' });
      } else {
          res.status(404).json({ error: 'Survey not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
}