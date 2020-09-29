require('dotenv/config');
const express = require('express');
const db = require('./database');
// eslint-disable-next-line no-unused-vars
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/questions', (req, res) => {
  const sql = `
  SELECT  "q"."questionid" as "Id",
        "q"."content" as "Question", array_agg("answer")
      FROM "questions" as "q" join "answers" as "a" using("questionid") GROUP BY "q"."questionid","q"."content" order by random() ;
 `;

  db.query(sql)
    .then(result => {
      const all = result.rows;
      return res.status(200).json(all);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
