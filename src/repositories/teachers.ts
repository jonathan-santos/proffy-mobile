import api from '../services/api'

export const getTeachers = async (params: any) => {
  const res = await api.get('/classes', {
    params
  })
  return res.data
}
