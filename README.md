# Dream-Heaven

Welcome to my E-commerce website built using React. This project allows users to browse and purchase products, manage a cart, and explore a wishlist. The website includes various features such as dynamic product sorting, cart management, and more.

## Live Website Link
[Live Website](https://www.your-website-link.com)

## Requirement Document Link
[Requirement Document](https://www.your-requirement-doc-link.com)

## React Fundamental Concepts Used
- **JSX (JavaScript XML)**: Used for writing UI components in a syntax that resembles HTML.
- **Functional Components**: The project uses functional components instead of class components.
- **State and Props**: React's state and props are used to handle and pass data between components.
- **React Hooks**: 
  - `useState`: Used for managing the component’s state.
  - `useEffect`: Used for side-effects like fetching data or setting up subscriptions.
  - `useContext`: For accessing global state across components (in combination with Context API).
- **Event Handling**: Functions like `onClick`, `onChange` are used to handle user interactions.
- **Conditional Rendering**: Render content conditionally based on state or props (e.g., displaying the cart only if there are items).
- **React Router**: For handling page navigation and routing in the application.
  
## Data Handling and Management
For handling and managing data, the project utilizes:

- **Context API**: The application uses Context API to manage global state such as products, cart, wishlist, etc. The `ProductContext` is used to provide and consume shared data throughout the application.
- **Local Storage**: Used for persisting cart items and wishlist across page reloads to provide a consistent user experience.

## 5 Features of the Website/Project
1. **Product Browsing**: Users can browse a variety of products categorized by different types.
2. **Dynamic Cart Management**: Users can add, remove, and view items in their cart with a real-time update of the total price.
3. **Wishlist Management**: Users can add products to their wishlist for later viewing or purchase.
4. **Product Sorting**: Users can sort the products by price (ascending or descending) to make browsing more convenient.
5. **User Authentication**: The website includes basic authentication for logging in and registering, providing access to personalized features like the cart and wishlist.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
