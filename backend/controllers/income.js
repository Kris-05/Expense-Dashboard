const IncomeSchema = require('../models/incomeModel.js');

exports.addIncome = async (req, res) => {
  // console.log(req.body);
  const { title, amount, category, description, date } = req.body;

  // create an instance
  const income = new IncomeSchema({
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
    await income.save();
    res.status(200).json({message: 'Income Added Successfully'});

  } catch (error) {
    res.status(500).json({message: 'Server Error'});
  }

  // console.log(income);
}

exports.getIncome = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({createdAt: -1});
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
  .then((income) => {
    res.status(200).json({message: 'Income Deleted Successfully'});
  }).catch((err) => {
    res.status(500).json({message: 'Server Error'});
  })
}