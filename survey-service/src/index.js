const express = require('express');
const pgDriver = require('./drivers/pg.driver');
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();
app.use(express.json());
app.use('/api/surveys', surveyRoutes);

const PORT = process.env.PORT || 3000;

const start = async () => {
  pgDriver.init();
  app.listen(PORT, () => {
    console.log(`Survey service running on port ${PORT}`);
});
};

start();