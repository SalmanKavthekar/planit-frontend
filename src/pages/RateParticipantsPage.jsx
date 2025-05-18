import React from "react";
import RatingForm from "../components/RatingForm";
import UserRatings from "../components/UserRatings";
import AverageRating from "../components/AverageRating";
import { useParams } from "react-router-dom";

const RateParticipantsPage = () => {
  const { userId, eventId } = useParams(); // user to be rated and event where they participated
  const raterId = localStorage.getItem("userId"); // Or use Redux/auth context

  const refreshPage = () => window.location.reload();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Rate Participant</h2>
      <RatingForm raterId={raterId} userId={userId} eventId={eventId} onSuccess={refreshPage} />
      <AverageRating userId={userId} />
      <UserRatings userId={userId} />
    </div>
  );
};

export default RateParticipantsPage;
