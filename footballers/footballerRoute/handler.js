const Model = require('../footballerModel/index');

const createFootballer = async (req, res) => {
  const { name, position } = req.body;

  try {
    const footballer = await Model.insert({ name, position });

    res.status(201).json({
      status: 201,
      data: footballer,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Cannot create footballer',
    });
  }
};

module.exports = {
  createFootballer,
};
