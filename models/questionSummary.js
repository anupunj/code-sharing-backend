// models/questionSummary.js
const mongoose = require('mongoose');

const questionSummarySchema = new mongoose.Schema({
  title: String,
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
});

const QuestionSummary = mongoose.model('QuestionSummary', questionSummarySchema);

module.exports = { QuestionSummary };
