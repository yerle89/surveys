const { pgDriver } = require('../drivers');

async function createSurvey (surveyData) {
  const { title, description, questions } = surveyData;
  const pgClient = pgDriver.getInstance();
  const result = await pgClient.query(
      'INSERT INTO surveys (title, description, questions) VALUES ($1, $2, $3) RETURNING *',
      [title, description, JSON.stringify(questions)]
  );
  return result.rows[0];
};

async function getSurveys () {
  const pgClient = pgDriver.getInstance();
  const result = await pgClient.query('SELECT * FROM surveys');
  return result.rows;
};

async function getSurveyById (id) {
  const pgClient = pgDriver.getInstance();
  const result = await pgClient.query('SELECT * FROM surveys WHERE id = $1', [id]);
  return result.rows[0];
};

async function updateSurvey (id, surveyData) {
  const { title, description, questions } = surveyData;
  const pgClient = pgDriver.getInstance();
  const result = await pgClient.query(
      'UPDATE surveys SET title = $1, description = $2, questions = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      [title, description, JSON.stringify(questions), id]
  );
  return result.rows[0];
};


async function deleteSurvey (id) {
  const pgClient = pgDriver.getInstance();
  const result = await pgClient.query('DELETE FROM surveys WHERE id = $1', [id]);
  return result.rowCount > 0;
};

module.exports = {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey
}