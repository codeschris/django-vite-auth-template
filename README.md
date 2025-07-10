# Django Vite Auth Template

A starter template for building modern web applications with Django (backend) and Vite (frontend), featuring user authentication out of the box.

## Features

- Django backend with RESTful API
- Vite-powered frontend (React)
- JWT-based authentication
- User registration, login, and profile management
- CORS and CSRF configured for local development

## Backend Endpoints

| Method | Endpoint             | Description                   |
|--------|---------------------|-------------------------------|
| POST   | `/api/auth/register/` | Register a new user           |
| POST   | `/api/auth/login/`    | Obtain JWT tokens and login            |
| POST   | `/api/auth/logout/`   | Logout user (token blacklist) |
| GET    | `/api/auth/user/`     | Get current user profile      |

> **Note:** Endpoints may be prefixed depending on your project structure.

## Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/django-vite-auth-template.git
    cd django-vite-auth-template
    ```

2. **Backend Setup**

    ```bash
    cd web_backend
    virtualenv .
    source bin/activate # `source Scripts/activate` for Windows
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

3. **Frontend Setup**

    ```bash
    cd web_frontend
    npm install
    npm run dev
    ```

## Configuration

- Update `.env` files for Django and Vite as needed.
- Adjust CORS and CSRF settings in Django for your frontend domain.

## License

MIT License
