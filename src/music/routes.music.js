import { Routes } from 'express'

const router = Routes()

router.get('/api/music', (req, res) => {
  res.json('Obtener Musicas')
})
router.get('/api/music/:id', (req, res) => {
  res.json('Obtener Música')
})
router.post('/api/music/:id', (req, res) => {
  res.json('Insertar Música')
})
router.put('/api/music/:id', (req, res) => {
  res.json('Editar Música')
})
router.delete('/api/music/:id', (req, res) => {
  res.json('Eliminar Música')
})

export default router;