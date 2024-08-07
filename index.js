// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const { Question, Solution } = require('./models/allmodels');
// // const { QuestionSummary } = require('./models/questionSummary');

// // const app = express();
// // const port = 5000;

// // app.use(bodyParser.json());
// // app.use(cors());

// // mongoose.connect('mongodb://localhost:27017/code', { useNewUrlParser: true, useUnifiedTopology: true });

// // app.get('/questions', async (req, res) => {
// //   const questions = await Question.find({});
// //   res.json(questions);
// // });

// // app.get('/question-summaries', async (req, res) => {
// //   const questionSummaries = await QuestionSummary.find({});
// //   res.json(questionSummaries);
// // });

// // app.post('/questions', async (req, res) => {
// //   const { title, content, imageUrl, testCases } = req.body;
// //   const question = new Question({ title, content, imageUrl, testCases });
// //   await question.save();
  
// //   const questionSummary = new QuestionSummary({ title, questionId: question._id });
// //   await questionSummary.save();

// //   res.json(question);
// // });

// // app.get('/questions/:id/solutions', async (req, res) => {
// //   const { id } = req.params;
// //   const solutions = await Solution.find({ questionId: id });
// //   res.json(solutions);
// // });

// // app.post('/questions/:id/solutions', async (req, res) => {
// //   const { id } = req.params;
// //   const { solutionText } = req.body;
// //   const solution = new Solution({ questionId: id, solutionText });
// //   await solution.save();
// //   res.json(solution);
// // });

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const { Question, Solution } = require('./models/allmodels'); // Ensure this is correct
// const { QuestionSummary } = require('./models/questionSummary');

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/code', { useNewUrlParser: true, useUnifiedTopology: true });

// app.get('/questions', async (req, res) => {
//   try {
//     const questions = await Question.find({});
//     res.json(questions);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.get('/question-summaries', async (req, res) => {
//   try {
//     const questionSummaries = await QuestionSummary.find({});
//     res.json(questionSummaries);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.get('/questions/:id', async (req, res) => {
//    try {
//      const { id } = req.params;
//      const question = await Question.findById(id);
     
//      if (!question) {
//        return res.status(404).send('Question not found');
//      }
     
//      res.json(question);
//    } catch (err) {
//      res.status(500).send(err.message);
//    }
//  });


// // app.post('/questions', async (req, res) => {
// //   try {
// //     const { title, content, imageUrls, testCases } = req.body;  // Updated to receive imageUrls as an array
// //     const question = new Question({ title, content, imageUrls, testCases });
// //     await question.save();
    
// //     const questionSummary = new QuestionSummary({ title, questionId: question._id });
// //     await questionSummary.save();

// //     res.json(question);
// //   } catch (err) {
// //     res.status(500).send(err.message);
// //   }
// // });

// app.post('/questions', async (req, res) => {
//   try {
//     const { title, content, imageUrls = [], testCases = [] } = req.body;
//     if (!title ) {
//       return res.status(400).send("Title and content are required.");
//     }

//     const question = new Question({ title, content, imageUrls, testCases });
//     await question.save();

//     const questionSummary = new QuestionSummary({ title, questionId: question._id });
//     await questionSummary.save();

//     res.status(201).json(question);
//   } catch (err) {
//     console.error('Error saving question:', err.message);
//     res.status(500).send(err.message);
//   }
// });


// app.get('/questions/:id/solutions', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const solutions = await Solution.find({ questionId: id });
//     res.json(solutions);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.post('/questions/:id/solutions', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { solutionText } = req.body;
//     const solution = new Solution({ questionId: id, solutionText });
//     await solution.save();
//     res.json(solution);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { Question, Solution } = require('./models/allmodels'); // Ensure this is correct
const { QuestionSummary } = require('./models/questionSummary');

const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
    
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/question-summaries', async (req, res) => {
  try {
    const questionSummaries = await QuestionSummary.find({});
    res.json(questionSummaries);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);
    
    if (!question) {
      return res.status(404).send('Question not found');
    }
    
    res.json(question);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/questions', async (req, res) => {
  try {
    const { title, content, imageUrls = [], testCases = [] } = req.body;
    if (!title) {
      return res.status(400).send("Title and content are required.");
    }

    const question = new Question({ title, content, imageUrls, testCases });
    await question.save();

    const questionSummary = new QuestionSummary({ title, questionId: question._id });
    await questionSummary.save();

    res.status(201).json(question);
  } catch (err) {
    console.error('Error saving question:', err.message);
    res.status(500).send(err.message);
  }
});

app.get('/questions/:id/solutions', async (req, res) => {
  try {
    const { id } = req.params;
    const solutions = await Solution.find({ questionId: id });
    res.json(solutions);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/questions/:id/solutions', async (req, res) => {
  try {
    const { id } = req.params;
    const { solutionText } = req.body;
    const solution = new Solution({ questionId: id, solutionText });
    await solution.save();
    res.json(solution);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
