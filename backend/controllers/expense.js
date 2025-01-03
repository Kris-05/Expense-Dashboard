const ExpenseSchema = require('../models/expenseModel.js');

exports.addExpense = async (req, res) => {
  // console.log(req.body);
  const { title, amount, category, description, date } = req.body;

  // create an instance
  const expense = new ExpenseSchema({
    title,
    amount,
    category,
    description,
    date
  });

  try {
    //validations
    if(!title || !category || !description || !date){
      return res.status(400).json({message: 'All fields are required!'})
    }
    if(amount <= 0 || typeof amount !== 'number'){
        return res.status(400).json({message: 'Amount must be a positive number!'})
    }
    await expense.save();
    res.status(200).json({message: 'Expense Added Successfully'});

  } catch (error) {
    res.status(500).json({message: 'Server Error'});
  }

  // console.log(income);
}

exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({createdAt: -1});
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
  .then((income) => {
    res.status(200).json({message: 'Expense Deleted Successfully'});
  }).catch((err) => {
    res.status(500).json({message: 'Server Error'});
  })
}