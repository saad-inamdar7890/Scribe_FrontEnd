import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubmitRequest.css'

function SubmitRequest() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    course: '',
    contact: '',
    examDate: '',
    examName: '',
    examTime: '',
    venue: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Create the request object from formData
      const request = {
        name: formData.name,
        school: formData.school,
        course: formData.course,
        contact: formData.contact,
        examDate: formData.examDate,
        examName: formData.examName,
        examTime: formData.examTime,
        venue: formData.venue,
      };

      // Create the appUser object (you may need to adjust this based on your app's logic)
      const appUser = {
        // Populate with relevant user data, e.g., userId, username, etc.
        // Example: id: currentUser.id, name: currentUser.name
      };

      const requestUserDTO = {
        request: request, // Send the request object
        appUser: appUser, // Send the appUser object
      };

      const response = await fetch('http://localhost:8080/api/requests/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestUserDTO), // Send the updated object
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      console.log('Form submitted:', requestUserDTO) // Log the updated object
      navigate('/')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="submit-request">
      <h2>Submit a Scribe Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields remain unchanged */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="examDate">Exam Date</label>
          <input
            type="datetime-local"
            id="examDate"
            name="examDate"
            value={formData.examDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="examName">Exam Name</label>
          <input
            type="text"
            id="examName"
            name="examName"
            value={formData.examName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="examTime">Exam Time</label>
          <input
            type="text"
            id="examTime"
            name="examTime"
            value={formData.examTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  )
}

export default SubmitRequest