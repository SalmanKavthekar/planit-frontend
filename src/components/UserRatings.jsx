import { useEffect, useState } from 'react';
import { getRatingsForUser } from '../services/ratingService';

export default function UserRatings({ userId }) {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    getRatingsForUser(userId).then(res => setRatings(res.data));
  }, [userId]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Ratings Received</h3>
      <ul className="space-y-2">
        {ratings.map(rating => (
          <li key={rating.id} className="border p-3 rounded shadow-sm">
            <p><strong>From:</strong> User #{rating.rater.id}</p>
            <p><strong>Score:</strong> {rating.score}</p>
            {rating.comment && <p><strong>Comment:</strong> {rating.comment}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
