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

const deleteFootballer = async (req, res) => {
  const { id } = req.params;

  try {
    const ftl = await Model.remove(id);

    res.status(200).json({
      status: 200,
      message: `${ftl} footballer deleted.`,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Cannot delete footballer',
    });
  }
};

module.exports = {
  createFootballer,
  deleteFootballer,
};
