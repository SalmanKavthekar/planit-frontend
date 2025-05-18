import { useState } from 'react';
import { addRating } from '../services/ratingService';

export default function RatingForm({ raterId, userId, eventId, onSuccess }) {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRating({ rater: { id: raterId }, user: { id: userId }, event: { id: eventId }, score, comment });
      onSuccess();
    } catch (err) {
      alert(err.response?.data?.message || 'Error submitting rating');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Rate this participant</h2>
      <select value={score} onChange={(e) => setScore(parseInt(e.target.value))}
              className="w-full p-2 mb-3 border rounded" required>
        <option value="">Select Score</option>
        {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
      </select>
      <textarea placeholder="Add comment..." value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 mb-3 border rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Rating
      </button>
    </form>
  );
}
