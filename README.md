# EventMaster API

## Description

EventMaster is a REST API developed to manage events and reservations in real time.

The system allows users to register, log in, view available events, reserve tickets, and manage their reservations. Administrators can manage events through protected endpoints.

The API uses JWT authentication and role-based access control to protect resources and separate user and administrator permissions.

## Features

### Users
- Register and log in.
- View available events.
- Make event reservations.
- View their own reservations.
- Cancel reservations.

### Administrators
- Register and log in.
- Create events.
- Update events.
- Delete events.
- View their administrator profile.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Swagger
- Git and GitHub

## Authentication and Security

The API implements the following security mechanisms:

- JWT authentication.
- Protected routes using middleware.
- Role-based access control for `user` and `admin`.
- Password encryption using bcrypt.
- Environment variables for sensitive configuration.
- Protected administrator operations.

Never commit passwords, API keys, database credentials, or `.env` files to the repository.

## Project Structure

The project follows an N-layer architecture.

```text
src/
├── config/
│   ├── db.js
│   └── swagger.js
├── controllers/
│   ├── adminController.js
│   ├── eventController.js
│   ├── reservationController.js
│   └── userController.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── loggerMiddleware.js
├── models/
│   ├── Admin.js
│   ├── Event.js
│   ├── Reservation.js
│   └── User.js
├── routes/
│   ├── adminRoutes.js
│   ├── adminEventRoutes.js
│   ├── publicEventRoutes.js
│   ├── reservationRoutes.js
│   └── userRoutes.js
├── app.js
└── index.js
```

## Installation Guide

### Requirements

- Node.js and npm.
- A MongoDB Atlas database or another compatible MongoDB instance.
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/st4537-sys/EventMaster.git
cd EventMaster
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the variables required by the application.

Example:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Use your actual configuration values locally. Do not commit the `.env` file.

### 4. Start the server

```bash
npm start
```

If the start script is not configured, use:

```bash
node index.js
```

The server should run at:

`http://localhost:3000`

## API Documentation and Testing

Swagger UI:

`http://localhost:3000/api-docs`

To authorize a protected request:

1. Log in and obtain a valid JWT.
2. Click **Authorize** in Swagger UI.
3. Enter the token in the format expected by the API, commonly `Bearer YOUR_TOKEN`.
4. Execute the authorized endpoint.

## Main API Endpoints

The following endpoints describe the API routes.

### Users

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/register` | Register a user |
| POST | `/users/login` | Log in as a user |

### Events

| Method | Endpoint | Description |
|---|---|---|
| GET | `/events` | View available events |

### Reservations

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/reservations/create-reservation` | Create a reservation |
| GET | `/users/reservations/my-reservations` | View personal reservations |
| DELETE | `/users/reservations/cancel-reservation/:id` | Cancel a reservation |

### Administrators

| Method | Endpoint | Description |
|---|---|---|
| POST | `/admin/register` | Register an administrator |
| POST | `/admin/login` | Log in as an administrator |
| GET | `/admin/profile` | View administrator profile |
| POST | `/admin/events/create-event` | Create an event |
| PUT | `/admin/events/update-event/:id` | Update an event |
| DELETE | `/admin/events/delete-event/:id` | Delete an event |

## Database

EventMaster uses MongoDB Atlas as its database service and Mongoose as its object data modeling (ODM) library.

## Git Branching Strategy

The project uses Git branches to organize development and GitHub Pull Requests to review changes before merging.

### Branches

- `main`: Stable version of the project.
- `develop`: Integration branch for development.
- `feature/*`: New features.
- `fix/*`: Bug fixes.
- `docs/*`: Documentation changes.

Create a separate branch for each task instead of making changes directly to `main`.

### Branch Naming Examples

```text
feature/event-registration
fix/reservation-validation
docs/github-workflow
```

## Development Workflow

1. Update your local repository.
2. Create a working branch from the appropriate base branch.
3. Make the required changes.
4. Review and test your changes.
5. Commit the changes with a descriptive message.
6. Push the branch to GitHub.
7. Open a Pull Request targeting `main` or `develop`, as appropriate.
8. Request a review from a team member.
9. Address requested changes and wait for the required approval.
10. Confirm that required checks pass.
11. Merge the Pull Request after all required conditions are satisfied.
12. Delete the working branch after merging if it is no longer needed.

### Example Git Commands

```bash
git checkout main
git pull origin main
git checkout -b feature/name-of-feature

git status
git add .
git commit -m "feat: add new feature"
git push -u origin feature/name-of-feature
```

After pushing the branch, create a Pull Request on GitHub.

## Pull Request Rules

Every Pull Request should follow these guidelines:

- Use a clear and descriptive title.
- Explain the purpose of the changes.
- Describe the main modifications.
- Link a related issue when applicable.
- Test changes before requesting a review.
- Keep changes focused on one task.
- Do not include passwords, API keys, or `.env` files.
- Use descriptive commit messages.
- Do not merge your own changes without the required review and approval.
- Address review comments before merging.

## Code Review and Approval Process

1. The author opens a Pull Request with a clear description.
2. A team member reviews the proposed changes.
3. The reviewer checks the implementation, readability, security, and potential errors.
4. The reviewer requests changes if problems are found.
5. The author updates the branch and responds to review comments.
6. At least one approval is required before merging when repository rules enforce this requirement.
7. Required status checks must pass, if configured.
8. The Pull Request can be merged once all applicable requirements are satisfied.

The review and approval must be recorded in GitHub. Describing this process in the README does not replace an actual Pull Request review.

## Merge Procedure

Before merging a Pull Request:

- Confirm that the target branch is correct.
- Verify that the required review has been approved.
- Resolve outstanding review comments.
- Confirm that required automated checks pass.
- Check for merge conflicts and resolve them if necessary.
- Merge the Pull Request using the available GitHub merge option.

The `main` branch should remain stable and should receive changes through the required Pull Request process.

## Commit Convention

Use descriptive commit messages with the following prefixes:

- `feat:` New feature.
- `fix:` Bug fix.
- `docs:` Documentation changes.
- `refactor:` Code restructuring.
- `test:` Test-related changes.
- `chore:` Maintenance tasks.

Examples:

```text
feat: add event reservation
fix: correct authentication middleware
docs: update README
refactor: improve event controller
```

## GitHub Templates

The repository includes templates to standardize collaboration:

- `.github/pull_request_template.md`: Provides a checklist and description structure for Pull Requests.
- `.github/ISSUE_TEMPLATE/feature_request.md`: Helps team members propose new features.
- `.github/ISSUE_TEMPLATE/bug_report.md`: Helps team members report bugs consistently.

## Continuous Integration

The repository includes a GitHub Actions workflow under `.github/workflows/validate.yml` to run the configured validation steps on pushes and Pull Requests targeting `main`.

The workflow helps identify problems before changes are merged. The checks that actually run depend on the current workflow configuration.

## Project Goals

EventMaster aims to provide a structured and secure API for event management and reservations while encouraging collaborative development, code review, and version control best practices.

## Author

Juan Carlos Alba Zermeño — 3992


