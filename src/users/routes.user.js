import { Router } from 'express';
const router = Router();

router.get('/api/users', (req, res) => {
  res.json('Getting Users');
});
router.get('/api/users/:id', (req, res) => {
  res.json('Getting Users');
});
router.post('/api/users/:id', (req, res) => {
  res.json('Getting Users');
});
router.put('/api/users/:id', (req, res) => {
  res.json('Getting Users');
});
router.delete('/api/users/:id', (req, res) => {
  res.json('Getting Users');
});

export default router;