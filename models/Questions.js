// models/Question.js
const mongoose = require('mongoose');

const TestCaseSchema = new mongoose.Schema({
  input: String,
  output: String,
});

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: false },
  testCases: [TestCaseSchema],
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
