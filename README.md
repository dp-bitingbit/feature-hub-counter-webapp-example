# Feature Hub Counter Web App

### Overview

The "Feature Hub Counter" is a web application that allows users to interact
with a counter. It provides a user interface with buttons to increment,
decrement, and reset the counter. Additionally, it displays the current count
and the last updater's ID, if available.

### Application Structure

The application is divided into several modules, each serving a specific
purpose:

- **counter-control.js:** This module creates buttons for incrementing and
  decrementing the counter. It depends on the 'example:counter' feature service.

- **counter-display.js:** This module is responsible for displaying the current
  count and the last updater's ID (if available). It also depends on the
  'example:counter' feature service.

- **counter-reset.js:** This module creates a button to reset the counter to
  zero, also depending on the 'example:counter' feature service.

- **counter.js:** This module defines the 'example:counter' feature, which
  provides the counter functionality. It includes a CounterV1 class for managing
  the counter state and a ConsumerCounterV1 class for interacting with the
  counter. This feature is versioned as '1.0.0'.

- **index.js:** This is the main entry point of the application. It sets up
  Feature Hub, loads the necessary modules, and renders the user interface
  components.

- **user-counter.js:** This module provides a React hook called 'useCounter' to
  manage and update the counter state.

### How to Run

To run the "Feature Hub Counter" web app, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Install the required dependencies by running: `npm install`
3. Start the development server with:`npm start`

### Usage

Once the application is running, you can interact with the counter by clicking
the '+' and '-' buttons to increment and decrement the count, respectively. You
can also reset the counter to zero using the 'reset' button.

The application will display the current count, and if you interact with it, it
will show the last updater's ID.
