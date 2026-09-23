# Fitness Tracker Frontend

React frontend for the fitness tracking application.

The frontend communicates with the Django REST API and provides the user interface for the application.

> The frontend is currently in early development and is not yet feature-complete.

## Tech Stack

* React
* TypeScript
* Vite
* Docker
* Docker compose

## Current Status

The frontend is in the initial development stage.

Current work focuses on:

* Application structure and routing
* API integration with the Django backend
* Exercise-related views
* Reusable UI components

More functionality will be added as development progresses.

## Configuration

Environment-specific configuration should be stored in a .env file.

```env
VITE_API_URL=http://127.0.0.1:8000
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Running with Docker

Before initial startup create a network "fitness-tracker-network". This network must exist before starting the service. Compose will not create it automatically:

```bash
docker network create fitness-tracker-network
```

Build and start the service:

```bash
docker compose up --build
```

Start it without rebuilding:

```bash
docker compose up
```

Run it in the background:

```bash
docker compose up -d
```

Stop the service:

```bash
docker compose down
```

## Backend

The frontend communicates with the main Django REST Framework backend.

The backend is responsible for:

* Authentication
* User data
* Exercises and workouts
* Training and nutrition plans
* Persistent storage
* Communication with the AI service
* Development Status

This project is under active development and should currently be considered an early-stage frontend.
