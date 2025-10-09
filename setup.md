# TaskFlow - Setup Instructions

## Database & phpMyAdmin Setup

### Default Login Credentials:

#### MySQL Database:
- **Host**: mysql-db (or localhost:3307)
- **Root Username**: root
- **Root Password**: rootpassword
- **Database Name**: taskflow_db
- **App Username**: taskflow_user
- **App Password**: taskflow_pass

#### phpMyAdmin:
- **URL**: http://localhost:8080
- **Username**: root
- **Password**: rootpassword
- **Server**: mysql-db

### How to Start:

1. **Start all services:**
   ```bash
   docker-compose up --build