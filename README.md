#  EventMaster API

##  Description
EventMaster is a REST API developed to manage events and reservations in real time.

The system allows:
- Users to register, log in, view events, and reserve tickets.
- Administrators to create, edit, and delete events.

The API implements authentication using JWT and role-based access control (admin and user).

---

##  Features

###  Users
- Register and login
- View available events
- Make reservations
- View their own reservations

###  Admin
- Register and login
- Create events
- Update events
- Delete events
- View admin profile

---

##  Authentication
- JWT (JSON Web Token)
- Protected routes using middleware
- Role-based access:
  - `user`
  - `admin`



##  Project Structure (N-Layers Architecture)


```
src/
├── config/
│   ├── db.js
│   └── swagger.js
│
├── controllers/
│   ├── adminController.js
│   ├── eventController.js
│   ├── reservationController.js
│   └── userController.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── loggerMiddleware.js
│
├── models/
│   ├── Admin.js
│   ├── Event.js
│   ├── Reservation.js
│   └── User.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── adminEventRoutes.js
│   ├── publicEventRoutes.js
│   ├── reservationRoutes.js
│   └── userRoutes.js
│
├── app.js
└── index.js
```


##  Installation Guide

1. Clone repository
```bash
git clone https://github.com/your-username/eventmaster.git
cd eventmaster

2. Install dependencies
npm install
3. Create .env file
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run server
node index.js
Server will run on:
http://localhost:3000


🧪 API Testing
Swagger UI
http://localhost:3000/api-docs
How to authorize:
Click Authorize
Paste your token:
Bearer YOUR_TOKEN


📡 Main Endpoints


👤 Users
Register user
POST /users/register
Login user
POST /users/login


🎫 Reservations
Create reservation
POST /users/reservations/create-reservation
Get my reservations
GET /users/reservations/my-reservations
Cancel reservation
DELETE /users/reservations/cancel-reservation/:id


📅 Events
Get all events (public)
GET /events


🛠️ Admin
Register admin
POST /admin/register
Login admin
POST /admin/login
Get admin profile
GET /admin/profile
Create event
POST /admin/events/create-event
Update event
PUT /admin/events/update-event/:id
Delete event
DELETE /admin/events/delete-event/:id


🔒 Security
Password encryption using bcrypt
JWT authentication
Protected routes with middleware
Role validation (admin/user)


🗄️ Database
MongoDB Atlas
Mongoose ODM


🧰 Technologies Used
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT (jsonwebtoken)
bcryptjs
Swagger (swagger-jsdoc + swagger-ui-express)


The project uses Git branches and Pull Requests to organize development and maintain the stability of the main branch.

Branches
main → Stable version of the project.
develop → Integration branch for development.
feature/* → Used to develop new features.
fix/* → Used to fix bugs.
docs/* → Used for documentation changes.
Development Workflow
Create a new branch from main or develop.
git checkout -b feature/name-of-feature
Make the required changes to the project.
Check the changes:
git status
Add and commit the changes:
git add .
git commit -m "feat: add new feature"
Push the branch to GitHub:
git push -u origin feature/name-of-feature
Create a Pull Request on GitHub.
The Pull Request must be reviewed before merging into the target branch.
After approval, the Pull Request can be merged.
Pull Request Rules
Pull Requests must have a clear title and description.
Changes should be tested before creating a Pull Request.
Do not commit passwords, API keys, or .env files.
Keep commits clear and descriptive.
Avoid pushing directly to main when working on new features or fixes.
Reviewers should verify the changes before approving the Pull Request.
Commit Convention

The project uses descriptive commit messages:

feat: add event reservation
fix: correct authentication middleware
docs: update README
refactor: improve event controller


Developed by:

Juan Carlos Alba Zermeño 3992

