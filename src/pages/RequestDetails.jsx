import { useParams } from 'react-router-dom'
import './RequestDetails.css'
import { useEffect, useState } from 'react';

function RequestDetails() {
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState(null);

  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/requests/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRequestDetails(data);
      } catch (error) {
        console.error('Error fetching request details:', error);
      }
    };

    fetchRequestDetails();
  }, [id]);

  if (!requestDetails) {
    return <div>Loading...</div>;
  }

  const { request, appUser } = requestDetails;

  return (
    <div className="request-details">
      <h2>{request.examName}</h2>
      <div className="details-card">
        <p><strong>Name:</strong> {appUser.name || 'N/A'}</p>
        <p><strong>School:</strong> {appUser.school || 'N/A'}</p>
        <p><strong>Course:</strong> {appUser.course || 'N/A'}</p>
        <p><strong>Contact:</strong> {appUser.contact || 'N/A'}</p>
        <p><strong>Exam Date:</strong> {new Date(request.examDate).toLocaleString() || 'N/A'}</p>
        <p><strong>Exam Time:</strong> {request.examTime} hours</p>
        <p><strong>Venue:</strong> {request.venue}</p>
      </div>
    </div>
  );
}

export default RequestDetails;