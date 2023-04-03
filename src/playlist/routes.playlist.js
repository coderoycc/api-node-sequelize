import { Router } from 'express';

const router = Router();

router.get('/api/playlist', (req, res) => {
  res.json('Getting Playlist');
});
router.get('/api/playlist/:id', (req, res) => {
  res.json('Getting Playlist');
});
router.post('/api/playlist/:id', (req, res) => {
  res.json('Getting Playlist');
});
router.put('/api/playlist/:id', (req, res) => {
  res.json('Getting Playlist');
});
router.delete('/api/playlist/:id', (req, res) => {
  res.json('Getting Playlist');
});

export default router;
