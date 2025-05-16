import { Router } from 'express';
import axios from 'axios';

const router = Router();
const API_URL = 'http://localhost:3000/proverbs';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.render('home', { proverbs: response.data });
  } catch (error) {
    res.status(500).send('Failed to fetch proverbs.');
  }
});

router.get('/proverb/:id', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    res.render('proverbDetail', { proverb: response.data });
  } catch {
    res.status(404).send('Proverb not found.');
  }
});

router.get('/add', (req, res) => {
  res.render('addProverb');
});

router.post('/add', async (req, res) => {
  try {
    await axios.post(API_URL, req.body);
    res.redirect('/');
  } catch {
    res.status(500).send('Failed to add proverb.');
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    res.render('editProverb', { proverb: response.data });
  } catch {
    res.status(404).send('Proverb not found.');
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    await axios.put(`${API_URL}/${req.params.id}`, req.body);
    res.redirect('/');
  } catch {
    res.status(500).send('Failed to update proverb.');
  }
});

router.get('/delete/:id', async (req, res) => {
  try {
    await axios.delete(`${API_URL}/${req.params.id}`);
    res.redirect('/');
  } catch {
    res.status(500).send('Failed to delete proverb.');
  }
});

export default router;
