# Practice Challenge: Toy Tales

You've got a friend in need! Again!

Andy has misplaced of his toys (again) and need your help to organize them.

## Features

This Toy Tales application is a fully functional CRUD (Create, Read, Update, Delete) application that allows users to manage their toy collection. All features have been successfully implemented with proper state management and API integration.

### ✅ Completed Features

1. **Display All Toys** - View all toys on page load
   - Fetches toys from the backend using `useEffect`
   - Displays toy cards with name, image, and likes count
   - Toys persist on page refresh

2. **Add a Toy** - Create a new toy via form submission
   - Form validation with required fields
   - POST request to backend to create new toy
   - Initial likes count set to 0
   - Form clears after successful submission
   - New toy immediately appears on the page

3. **Delete a Toy** - Remove a toy from the collection
   - "Donate to Goodwill" button sends DELETE request
   - Toy is removed from backend and UI
   - Updated toy list displays without deleted toy

4. **Like a Toy** - Increment toy's like count
   - "Like" button sends PATCH request to backend
   - Likes count increments in real-time
   - Toy order is maintained in the collection

## Application Screenshot
![alt text](<Screenshot from 2026-05-09 19-23-02.png>)

Below is a screenshot of the completed Toy Tales application showing all toys displayed with their information:

**Toy Tales Application - Main View:**

The screenshot displays:
- **Header**: Toy Tales branding at the top
- **Add a Toy Button**: Red button to toggle the toy form
- **Toy Collection**: Multiple toy cards displaying:
  - Toy name (e.g., Woody, Mr. Potato Head, Slinky Dog, Rex)
  - Toy image/avatar with visual representation
  - Current likes count for each toy
  - "Like <3" button (red) - Click to increment likes count via PATCH request
  - "Donate to GoodWill" button (red) - Click to delete toy via DELETE request

All toys are fetched from the backend on page load and displayed in a responsive grid layout. Each toy card shows all relevant information and provides interactive buttons for liking and deleting toys.

## Setup

All the information about Andy's toys can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, in separate terminal tabs, run:

1. **Start JSON Server** (API backend on port 3001):
   ```bash
   npm run server
   ```

2. **Start React Development Server** (on port 3000):
   ```bash
   npm run dev
   ```

3. **Run Tests** (in another tab):
   ```bash
   npm run test
   ```

The application will be available at `http://localhost:3000` once the dev server is running.

## API Endpoints

The application uses the following RESTful API endpoints:

- `GET /toys` - Fetch all toys
- `POST /toys` - Create a new toy
- `PATCH /toys/:id` - Update toy likes
- `DELETE /toys/:id` - Delete a toy

## Component Architecture

### App Component
- Manages central state for toys and form visibility
- Handles all CRUD operations
- Passes callbacks to child components for state updates

### ToyForm Component
- Controlled form component with name and image inputs
- Handles POST requests to create new toys
- Manages form state and validation

### ToyContainer Component
- Maps over toys array and renders individual ToyCard components
- Passes down callbacks for delete and update operations

### ToyCard Component
- Displays individual toy information
- Handles like button clicks (PATCH requests)
- Handles delete button clicks (DELETE requests)

## Testing

Run the test suite to verify all features are working:

```bash
npm run test
```

The test suite includes tests for:
- Displaying all toys
- Creating new toys
- Deleting toys
- Liking toys

## Development

### Tech Stack
- React 19.0.0 with Hooks (useState, useEffect)
- Vite for fast development and building
- JSON Server for RESTful API
- Vitest for testing

### Key Concepts Used
- Component State Management (useState)
- Side Effects (useEffect)
- Event Handling
- Controlled Components
- Props and Callbacks
- Fetch API (GET, POST, PATCH, DELETE)
- Array Methods (map, filter)

## Implementation Notes

- All components use React Hooks for state and lifecycle management
- The toys state is centralized in the App component
- Event handlers use callbacks to maintain single source of truth
- Form inputs are controlled components
- DELETE and PATCH requests maintain data consistency between frontend and backend

## Future Enhancements

Possible improvements to the application:
- Add error handling and loading states
- Add sorting and filtering options
- Add local storage to persist data
- Add animation on toy addition/deletion
- Add toy search functionality
- Add edit/update toy name or image feature
