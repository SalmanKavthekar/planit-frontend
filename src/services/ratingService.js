import api from '../routes/AppRoutes'

export const addRating = (rating) => api.post('/ratings', rating);
export const getRatingsForUser = (userId) => api.get(`/ratings/user/${userId}`);
export const getRatingsForEvent = (eventId) => api.get(`/ratings/event/${eventId}`);
export const getAverageRating = (userId) => api.get(`/ratings/average/${userId}`);
