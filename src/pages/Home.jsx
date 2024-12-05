import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [mockRequests, setMockRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/requests/all'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMockRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="home">
      <h2>Available Scribe Positions</h2>
      <div className="requests-grid">
        {mockRequests.map((request) => (
          <Link to={`/request/${request.id}`} key={request.id} className="request-card">
            <h3>{request.examName}</h3>
            <p>{request.examDate}</p>
            <p>{request.examTime} hours</p>
            <p>{request.venue}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home