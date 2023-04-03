import { Routes } from 'express'

const router = Routes()

router.get('/api/music', (req, res) => {
  res.json('Getting Music')
})
router.get('/api/music/:id', (req, res) => {
  res.json('Getting Music')
})
router.post('/api/music/:id', (req, res) => {
  res.json('Getting Music')
})
router.put('/api/music/:id', (req, res) => {
  res.json('Getting Music')
})
router.delete('/api/music/:id', (req, res) => {
  res.json('Getting Music')
})

export default router;