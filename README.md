# ToDo List Application

A simple, browser-based ToDo list application built with JavaScript that allows users to create, mark, and delete tasks with persistent local storage.

## Features

- Add new tasks to your ToDo list
- Mark tasks as completed with a visual indication
- Remove individual tasks
- Empty ToDo list message when no tasks exist
- Persistent storage using browser's localStorage

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/MelnikovSergei/ToDolist.git
   cd todo-list-app
   ```

2. Open `index.html` in your browser to run the application.

## Project Structure

- `index.html` - Main HTML file with the application structure
- `script.js` - Main JavaScript file containing DOM manipulation and event handlers
- `dataStorage.js` - JavaScript module for managing localStorage operations

## Usage

### Adding a Task
1. Type your task in the input field
2. Press Enter or click the Add button to add the task to your list

### Marking a Task as Completed
- Click the checkbox next to a task to mark it as completed
- When marked, the task text will turn red

### Removing a Task
- Click the Remove button (✕) to delete a task

### Data Persistence
- All tasks are automatically saved to localStorage
- Your tasks will remain available even after closing the browser

## How It Works

### Task Rendering
The application uses HTML templates to create task items dynamically. Each task consists of:
- A checkbox for marking completion status
- Task text
- A remove button

### Storage Management
The application uses browser's localStorage to:
- Save new tasks
- Update the status of existing tasks
- Remove deleted tasks
- Retrieve saved tasks when the page loads

### Code Functionality

- `renderTasksFromStorage()`: Loads and displays tasks from localStorage on page load
- `renderTask()`: Creates and displays a new task item
- `addCheckHandler()`: Adds event listeners for checkbox and remove button
- `toggleEmptyListMessage()`: Shows/hides the "No tasks" message
- `initialStorage()`: Initializes the storage array from localStorage
- Various storage functions to manage the tasks in localStorage

## Browser Compatibility

This application works in all modern browsers that support:
- localStorage API
- ES6 JavaScript features
- Modern DOM APIs

## Development

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- A modern web browser
- A text editor or IDE

### Extending the Application
To add new features:
1. Modify the HTML to add new UI elements
2. Extend the JavaScript functionality in `script.js`
3. Update storage methods in `dataStorage.js` if needed
