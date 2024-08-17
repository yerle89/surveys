const surveyModel = require('../models/surveyModel');

async function createSurvey (surveyData) {
  const survey = await surveyModel.createSurvey(surveyData);
  return survey;
};

async function getSurveys () {
  return await surveyModel.getSurveys();
};

async function getSurveyById (id) {
  return await surveyModel.getSurveyById(id);
};

async function updateSurvey (id, surveyData) {
  const survey = await surveyModel.updateSurvey(id, surveyData);
  return survey;
};

async function deleteSurvey (id) {
  return await surveyModel.deleteSurvey(id);
};

module.exports = {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
}