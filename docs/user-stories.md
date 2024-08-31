# User Stories

## 1. User Registration and Authentication
### Story 1: As a new user, I want to create an account with my email or phone number, so that I can securely log in and access the app.
#### Acceptance Criteria
##### Account Registration Page:
a. The app should display a registration form that prompts the user to enter:
- Email address or Phone number
- Password
- Confirm password

b. Optional fields may include:
- Username
- Full name
- Referral code (if applicable)

##### Validation:
The email or phone number should be validated for correctness:
- Email: Should follow the correct email format (e.g., example@domain.com).
- Phone number: Should follow the appropriate country code and format.
- The password should meet minimum security requirements:
- At least 8 characters long.
- Includes a mix of upper and lower case letters, numbers, and special characters.
- The "Confirm password" field must match the password.

##### User Feedback:
- If any validation fails (e.g., invalid email, weak password), an appropriate error message should be displayed.
- The user should not be able to submit the form until all fields are valid.

##### Account Creation:
- Upon submission, the app should:
- Check if the email or phone number is already associated with an existing account.
- If the email or phone number is unique, create a new account in the database.
- Send a verification email or SMS to the provided contact.
- The user should be redirected to a "Verification" page with instructions to check their email or SMS.

##### Security:
- Passwords should be hashed before being stored in the database.
- The app should use HTTPS for secure communication.
- Implement rate-limiting or CAPTCHA to prevent spam account creation.

##### Confirmation and Verification:
- The user should receive an email or SMS containing a verification link or code.
- Clicking the link or entering the code in the app should verify the user's account and allow them to log in.
- If the user does not verify their account, they should not be able to log in.

##### Edge Cases:
- If the user tries to create an account with an email or phone number that is already registered, they should be prompted to log in instead.
- If the email or SMS fails to send, the user should see a message prompting them to retry.

#### Technical Implementation
##### Backend (Node.js with Express)
###### Routes:
- POST /auth/register: Handles the registration request.
- GET /auth/verify: Handles email/SMS verification.

###### Database Models:
- User: Stores user details including email/phone, hashed password, and verification status.

###### Controller:
- authController.register: Handles the registration logic.
- authController.verify: Manages verification logic.

###### Validation:
Use libraries like express-validator for input validation.

###### Security:
- Use bcrypt to hash passwords.
- Implement JWT or session tokens for secure login.
- Use a service like Twilio for SMS or SendGrid for email verification.

##### Frontend (Optional Structure Based on Platform)
###### UI Components:
- RegistrationForm: Handles input fields and form submission.
- VerificationPage: Allows the user to enter the verification code.

###### State Management:
Use a state management solution like Redux or Context API for managing authentication state (if using React or another web framework).

###### API Integration:
Use Axios or Fetch API to send data to the backend for account creation.

##### Testing Criteria
###### Unit Tests:
- Validate form input (email/phone format, password strength).
- Test the backend routes for correct user creation and verification logic.

###### Integration Tests:
Simulate the entire registration process including user feedback and verification.

###### End-to-End Tests:
Use tools like Cypress or Selenium to automate the registration flow from the frontend to the backend.

##### User Flow
- User navigates to the registration page.
- User enters their email/phone, password, and submits the form.
- The system validates the input and displays any errors if necessary.
- On successful registration, the system sends a verification email/SMS.
- The user verifies their account using the provided link/code.
- The user can now log in and access the app.
- This story lays the groundwork for secure user onboarding, which is essential for any application that requires user accounts.

### Story 2: As a user, I want to log in to my account using my credentials, so that I can access my saved data.
### Story 3: As a user, I want to recover my account if I forget my password, so that I can regain access to my expenses.

## 2. Expense Entry
### Story 4: As a user, I want to manually enter an expense with details like amount, category, date, and payment method, so that I can track my spending.
### Story 5: As a user, I want to quickly add common expenses, so that I can log them with minimal effort.
### Story 6: As a user, I want to edit or delete an expense entry, so that I can correct mistakes or remove unwanted records.

## 3. Category Management
### Story 7: As a user, I want to select from predefined categories when entering an expense, so that I can categorize my spending easily.
### Story 8: As a user, I want to create and manage my own custom categories, so that I can tailor the app to my spending habits.

## 4. Budget Management
### Story 9: As a user, I want to set a monthly or weekly budget for specific categories, so that I can control my spending.
### Story 10: As a user, I want to receive notifications when I’m close to or have exceeded my budget, so that I can adjust my spending accordingly.

## 5. Dashboard and Analytics
### Story 11: As a user, I want to see an overview of my total expenses for the month, so that I can understand my spending patterns.
### Story 12: As a user, I want to view a breakdown of my spending by category, so that I can see where my money is going.
### Story 13: As a user, I want to see trends in my spending over time, so that I can identify patterns and make better financial decisions.

## 6. Expense History
### Story 14: As a user, I want to search and filter my past expenses by date, category, or amount, so that I can easily find specific transactions.
### Story 15: As a user, I want to export my expense data to a CSV or PDF file, so that I can keep a personal record or share it with others.

## 7. Notifications and Reminders
### Story 16: As a user, I want to receive a daily or weekly summary of my expenses, so that I can stay informed about my spending.
### Story 17: As a user, I want to set reminders to log my expenses regularly, so that I don’t forget to track my spending.

## 8. Settings and Customization
### Story 18: As a user, I want to customize the currency displayed in the app, so that it matches my local currency.
### Story 19: As a user, I want to manage my notification preferences, so that I only receive relevant alerts.
### Story 20: As a user, I want to back up my data to the cloud and sync it across devices, so that my information is secure and accessible from anywhere.

----------------------------------------------------------------------
# Milestones
This plan outlines the key milestones and associated user stories to ensure a structured and organized development process for the manual entry expense tracker.

## Milestone 1: Project Initialization and Setup
### Tasks:
- Set up the project repository and development environment.
- Define the project architecture and select the technology stack.
- Create initial wireframes and UI mockups for the app.

### Deliverables:
- Repository with the basic project structure.
- Initial UI designs for key screens (login, expense entry, dashboard).
- Documentation outlining the architecture and chosen technologies.
- Timeline: 1-2 weeks.

## Milestone 2: User Registration and Authentication
### Tasks:
- Implement user registration, login, and logout functionality.
- Integrate secure authentication mechanisms (e.g., JWT or Firebase Auth).
- Develop the password recovery feature.

### Deliverables:
- Fully functional user registration and login system.
- Password recovery process.
- Test cases and user documentation.
- Timeline: 2-3 weeks.

## Milestone 3: Expense Entry and Category Management
### Tasks:
- Implement the manual expense entry form with validation.
- Develop predefined categories and allow users to add custom categories.
- Create APIs for CRUD operations on expenses and categories.

### Deliverables:
- Working expense entry feature with category selection.
- API endpoints for managing expenses and categories.
- Integration with the frontend.
- Timeline: 3-4 weeks.

## Milestone 4: Budget Management
### Tasks:
- Develop the budget-setting feature for each category.
- Implement notifications and alerts for budget tracking.
- Design a simple UI to display budget progress.

### Deliverables:
- Budget management system with user-defined budgets.
- Notification system for budget alerts.
- Test cases for budget-related functionalities.
- Timeline: 3-4 weeks.

## Milestone 5: Dashboard and Analytics
### Tasks:
- Implement the dashboard with an overview of total expenses and budget status.
- Develop analytics features like category breakdowns and spending trends.
- Integrate data visualization tools for charts and graphs.

### Deliverables:
- Fully functional dashboard with visual insights.
- Backend logic for generating analytics.
- Integration of analytics with the frontend.
- Timeline: 4-5 weeks.

## Milestone 6: Expense History and Export
### Tasks:
- Develop the expense history feature with search and filter options.
- Implement data export functionality (CSV, PDF).
- Optimize database queries for efficient retrieval of historical data.

### Deliverables:
- Searchable and filterable expense history.
- Export feature with customizable formats.
- Test cases for history and export features.
- Timeline: 2-3 weeks.

## Milestone 7: Notifications, Reminders, and Settings
### Tasks:
- Implement push notifications and email summaries.
- Develop custom reminders for regular expense logging.
- Build settings pages for managing preferences like currency and notifications.

### Deliverables:
- Functional notification and reminder system.
- Settings UI with customization options.
- Test cases for notification and settings management.
- Timeline: 3-4 weeks.

## Milestone 8: Final Testing, Optimization, and Launch Preparation
### Tasks:
- Conduct thorough testing across all features and platforms (Android, iOS).
- Optimize the app for performance, security, and scalability.
- Prepare deployment pipelines and app store listings.

### Deliverables:
- Fully tested and optimized app.
- Deployment-ready codebase with CI/CD setup.
- App store listings and marketing materials.
- Timeline: 4-5 weeks.

## Overall Timeline:
## Total Duration: Approximately 5-6 months from project initialization to launch.
