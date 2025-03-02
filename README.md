# Calculator Application

A full-stack calculator application with a JavaScript frontend and Python/Flask backend.

## Project Structure

```
calculator-app/
├── frontend/
│   ├── index.html      # Main HTML file
│   └── Calculator.js   # Calculator logic
└── backend/
    ├── app.py         # Flask server
    ├── test_app.py    # Backend tests
    └── requirements.txt # Backend dependencies
```

## Features

- Basic arithmetic operations (addition, subtraction, etc.)
- Frontend built with React (via CDN) and Tailwind CSS
- RESTful API backend using Flask
- Unit tests for backend functionality

## Prerequisites

- Python 3.x
- Web browser
- Flask (Python web framework)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd calculator-app
   ```

2. Set up the backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

## Running the Application

1. Start the backend server:

   ```bash
   cd backend
   python app.py
   ```

2. Open the frontend:
   - Navigate to `calculator-app/frontend`
   - Open `index.html` in your web browser

## Testing

To run the backend tests:

```bash
cd backend
python -m pytest test_app.py
```

## Additional Documentation

For more details about cloud file transfer implementation, refer to `cloud-file-transfer-2025tht.docx`.

---

This project is intended for educational purposes and as a take-home assignment demonstration.
