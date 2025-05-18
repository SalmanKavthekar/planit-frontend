import { useEffect, useState } from 'react';
import { getAverageRating } from '../services/ratingService';

export default function AverageRating({ userId }) {
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    getAverageRating(userId).then(res => setAvg(res.data));
  }, [userId]);

  return (
    <div className="text-lg font-semibold mt-4">
      ⭐ Average Rating: {avg.toFixed(2)}
    </div>
  );
}
