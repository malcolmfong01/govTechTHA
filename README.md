# Addition/Subtraction Web Application

A full-stack calculator application with a JavaScript frontend and Python/Flask backend.

## Project Structure

```
calculator-app/
├── frontend/
│   ├── index.html
│   └── Calculator.js
├── backend/
│   ├── app.py
│   ├── test_app.py
└── requirements.txt
```

## Features

- Frontend built with React (via CDN) and Tailwind CSS
- RESTful API backend using Flask
- Unit tests for backend functionality using pytest

## Setup Instructions

2. Install requirements:
   ```bash
   cd calculator-app
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

For more details about cloud file transfer project document, refer to `cloud-file-transfer-2025tht.docx`.
