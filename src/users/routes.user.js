import { Router } from 'express';
import * as userCtrl from './controller.user.js';
const router = Router();

router.get('/api/users', (req, res) => {
  return userCtrl.getUsers(req, res);
});
router.get('/api/users/:id', (req, res) => {
  return userCtrl.getUser(req, res);
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