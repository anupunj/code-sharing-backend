// // // // const mongoose = require('mongoose');

// // // // const TestCaseSchema = new mongoose.Schema({
// // // //   input: String,
// // // //   output: String
// // // // });

// // // // const SolutionSchema = new mongoose.Schema({
// // // //   questionId: mongoose.Schema.Types.ObjectId,
// // // //   solutionText: String,
// // // //   createdAt: { type: Date, default: Date.now }
// // // // });

// // // // const QuestionSchema = new mongoose.Schema({
// // // //   title: String,
// // // //   content: String,
// // // //   imageUrl: String,
// // // //   testCases: [TestCaseSchema],
// // // //   createdAt: { type: Date, default: Date.now }
// // // // });

// // // // const Question = mongoose.model('Question', QuestionSchema);
// // // // const Solution = mongoose.model('Solution', SolutionSchema);

// // // // module.exports = { Question, Solution };

// // // // models/allmodels.js
// // // const mongoose = require('mongoose');

// // // const questionSchema = new mongoose.Schema({
// // //   title: String,
// // //   content: String,
// // //   imageUrl: String,
// // //   testCases: [String] // Ensure testCases is an array of strings
// // // });

// // // const solutionSchema = new mongoose.Schema({
// // //   questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
// // //   solutionText: String
// // // });

// // // const Question = mongoose.model('Question', questionSchema);
// // // const Solution = mongoose.model('Solution', solutionSchema);

// // // module.exports = { Question, Solution };

// // const mongoose = require('mongoose');

// // const TestCaseSchema = new mongoose.Schema({
// //   input: String,
// //   output: String,
// // });

// // const QuestionSchema = new mongoose.Schema({
// //   title: { type: String, required: true },
// //   content: { type: String, required: true },
// //   imageUrl: { type: String, required: false },
// //   testCases: [TestCaseSchema],
// // });

// // const Question = mongoose.model('Question', QuestionSchema);

// // module.exports = Question;


// const mongoose = require('mongoose');

// // Define the TestCase schema
// const TestCaseSchema = new mongoose.Schema({
//   input: String,
//   output: String,
// });

// // Define the Question schema
// const QuestionSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   imageUrl: { type: String, required: false },
//   testCases: [TestCaseSchema],
//   createdAt: { type: Date, default: Date.now }
// });

// // Define the Solution schema
// const SolutionSchema = new mongoose.Schema({
//   questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
//   solutionText: String,
//   createdAt: { type: Date, default: Date.now }
// });

// // Create models
// const Question = mongoose.model('Question', QuestionSchema);
// const Solution = mongoose.model('Solution', SolutionSchema);

// module.exports = { Question, Solution };


const mongoose = require('mongoose');

// Define the TestCase schema
const TestCaseSchema = new mongoose.Schema({
  input: String,
  output: String,
});

// Define the Question schema with an array of imageUrls
const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String},
  imageUrls: { type: [String] },  // Updated to store an array of image URLs
  testCases: [TestCaseSchema],
  createdAt: { type: Date, default: Date.now }
});

// Define the Solution schema
const SolutionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  solutionText: String,
  createdAt: { type: Date, default: Date.now }
});

// Create models
const Question = mongoose.model('Question', QuestionSchema);
const Solution = mongoose.model('Solution', SolutionSchema);

module.exports = { Question, Solution };
