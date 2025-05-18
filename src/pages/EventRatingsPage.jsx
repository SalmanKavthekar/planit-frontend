import RatingForm from '../components/RatingForm';
import UserRatings from '../components/UserRatings';
import AverageRating from '../components/AverageRating';

export default function EventRatingsPage() {
  const raterId = 1;     // Replace with logged-in user ID
  const userId = 2;      // Replace with participant user ID
  const eventId = 1001;  // Replace with selected event ID

  const refresh = () => window.location.reload(); // Simplified refresh

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rate Participants</h1>
      <RatingForm raterId={raterId} userId={userId} eventId={eventId} onSuccess={refresh} />
      <AverageRating userId={userId} />
      <UserRatings userId={userId} />
    </div>
  );
}
