import gashaModel from '../models/gashaModel.js';
import fs from 'fs';

//add item

const addGasha = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const gasha = new gashaModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await gasha.save();
    res.json({ success: true, message: 'Item added' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

//full gasha list
const listGasha = async (req, res) => {
  try {
    const gashas = await gashaModel.find({});
    res.json({ success: true, data: gashas });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

//remove gitem from list
const removeGasha = async (req, res) => {
  try {
    const gasha = await gashaModel.findById(req.body.id);
    fs.unlink(`uploads/${gasha.image}`, () => {});

    await gashaModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'item removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

export { addGasha, listGasha, removeGasha };
