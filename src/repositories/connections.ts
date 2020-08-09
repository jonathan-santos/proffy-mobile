import api from '../services/api'

export const getTotalConnections = async () => {
  const res = await api.get('/connections')
  return res.data.total
}

export const createConnection = async (userId: number) => {
  await api.post('/connections', {
    user_id: userId
  })
}
