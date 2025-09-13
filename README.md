# 🛒 MART - React E-Commerce App

**MART** is a simple and interactive e-commerce web application built with **React** and **Tailwind CSS**. Users can browse products, add items to a cart, view and remove items in the cart, and see the total price of their selected products. The app simulates a mini Amazon-style shopping experience.  

---

## 🔹 Features

- **Product Listing**  
  - Fetches real products from [Fake Store API](https://fakestoreapi.com/)  
  - Displays products in a responsive grid layout  

- **Add to Cart**  
  - Click the "Add to Cart" button to add products to the shopping cart  

- **Shopping Cart**  
  - View all products added to the cart  
  - Remove individual items from the cart  
  - See the total price of all items  
  - Proceed to checkout button (UI only, functionality not implemented yet)  

- **Responsive Design**  
  - Works on mobile, tablet, and desktop screens  

- **Cart Badge**  
  - Shows a dynamic badge on the cart button indicating the number of items  

---

## 🔹 Technologies Used

- **React** – UI building and state management  
- **Tailwind CSS** – Styling and responsive layout  
- **Axios** – Fetching product data from API  
- **JavaScript (ES6+)** – Logic and data manipulation  

---

## 🔹 Project Structure

src/
- ├─ Components/
- │ ├─ Navbar.jsx # Navbar with cart button and dynamic badge
- │ ├─ Card.jsx # Individual product card with add-to-cart button
- │ └─ AllCards.jsx # Grid display of all products
- ├─ App.jsx # Main component managing cart state and view toggle
- └─ App.css # Optional custom styling

## 🔹 Commands to execute

`npm i`
`npm run dev`

## Output
<img width="1913" height="871" alt="image" src="https://github.com/user-attachments/assets/dfa0841e-df1c-41c9-b3d3-a977adacc26e" />

## 🔹 Future Improvements

- Add quantity selector for each cart item

- Implement checkout functionality and payment integration

- Filter and sort products by category or price

- Add user authentication and order history

## 🔹 License

This project is open-source and free to use.
