# Skylo

[One sentence describing what Skylo does.]

## Structure

- `backend`: API service, listens on port 3000 inside the Docker network
- `frontend`: web interface, served on port 8080
- `docker-compose.yml`: runs both services together

## Requirements

- Docker and Docker Compose

## Setup

Clone the repository:

    git clone https://github.com/natapereirax-cmd/Skylo.git
    cd Skylo

Create the backend environment file:

    cp backend/.env.example backend/.env

Then edit `backend/.env` and fill in the values. Variables used:

    [VARIABLE_NAME]=[what it is for]

## Run

    docker compose up --build

Open http://localhost:8080 in your browser.

To stop:

    docker compose down

## Notes

- The backend is not exposed to the host, only the frontend is reachable on port 8080.
- Prebuilt images are published as `natep20/skylo-backend` and `natep20/skylo-frontend`.
