🌐 Mini URL Shortener API ✅
A production-ready backend application to shorten long URLs and redirect to the original URL using JavaScript Node.js, Express, and MongoDB Atlas.

📦 Features
🔗 Shorten long URLs to unique short codes

🚀 Redirect to original URLs

⏳ Optional expiry date for URLs

📊 Track number of clicks (analytics)

🔒 Rate limiting to prevent abuse

✅ Clean API validation and error handling

🛠️ Tech Stack
Layer	Technology
Backend	Node.js + Express
Database	MongoDB (Atlas)
ORM	Mongoose
Validation	valid-url
Rate Limiting	express-rate-limit

⚙️ Setup Instructions
1. 📥 Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-username>/url-shortener-api.git
cd url-shortener-api
2. 📦 Install Dependencies
bash
Copy
Edit
npm install
3. 🔑 Configure Environment Variables
Create a .env file in the root directory using this template:

ini
Copy
Edit
PORT=5000
MONGO_URI=<your-mongodb-atlas-connection-string>
BASE_URL=http://localhost:5000
✔ Replace <your-mongodb-atlas-connection-string> with your MongoDB Atlas URI.

4. 🚀 Start the Server
For development (auto restart with nodemon):

bash
Copy
Edit
npm run dev
For production:

bash
Copy
Edit
npm start
✔ The server will run at http://localhost:5000

📚 API Endpoints
🔗 POST /shorten
Description: Shorten a long URL (with optional expiry date).

Request Body:

json
Copy
Edit
{
  "url": "https://example.com/very/long/link",
  "expiryDate": "2025-07-12T00:00:00Z" // optional
}
Response:

json
Copy
Edit
{
  "shortUrl": "http://localhost:5000/abc123"
}
🔗 GET /:code
Description: Redirects to the original long URL.

Response: Redirects to original URL or returns 410 Gone if expired.

🗃️ Database Schema
Field	Type	Description
originalUrl	String	The original long URL
shortCode	String	Generated short code
createdAt	Date	Timestamp of creation
expiryDate	Date	(Optional) Expiry date
clicks	Number	Number of times URL accessed

✅ Validation & Error Handling
✔ Validates input URL format

❌ Returns 400 Bad Request for invalid URLs

❌ Returns 404 Not Found if short code does not exist

❌ Returns 410 Gone if link is expired

🧪 Testing
Use Postman or Thunder Client:

POST /shorten – Verify shortened URL generation

GET /:code – Test redirection and expiry logic

(Optional) Import the Postman collection included for easy testing.

🎯 Deliverables
✅ REST API code in GitHub

✅ README with setup and usage instructions

✅ (Optional) Postman collection

📝 What It Tests
API design and routing

CRUD operations with MongoDB

URL validation and expiry logic

Analytics tracking (click count)

Rate limiting middleware integration

🚀 Future Enhancements
🌐 Deploy on Render, Railway, or Cyclic

🐳 Add Docker support for containerization

✨ Allow custom short codes

💻 Integrate frontend UI for public usage

👤 Author
Utkarsh Tripathi
