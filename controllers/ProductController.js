import Product from '../models/Product.js';

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) throw Error('Gagal saat mengambil data Product');

    res.status(200).json({ data: products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const result = await Product.insertMany({ name, price, description });
    if (!result) throw Error('Gagal menambahkan data Product');

    res.status(201).json({ data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findById({
      _id: id,
    });
    if (!result) return res.status(404).json({ message: 'Data tidak ditemukan' });

    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const { id } = req.params;

  try {
    const response = await Product.findOneAndUpdate(
      {
        _id: id,
      },
      {
        name,
        price,
        description,
      }
    );
    if (!response) throw Error('Gagal menambahkan data Product');

    res.status(200).json({ data: response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findOneAndDelete({ _id: id });

    res.status(200).json({ message: 'OK' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
