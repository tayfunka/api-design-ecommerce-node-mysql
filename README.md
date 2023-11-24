# api-design-ecommerce-node-mysql
A comprehensive Postman collection that simulates the API design and functionality of a sample e-commerce application.


This project implements a simple Node.js API for managing products and shopping carts. It includes functionalities such as creating products, listing products, viewing product details, and managing a shopping cart.


## Requirements

- Node.js (version v18.17.1)
- MySQL Database

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tayfunka/api-design-ecommerce-node-mysql
git

2. Install dependencies:
```bash
cd api-design-ecommerce-node-mysql
npm install
```
3. Configure the database:
  - Create a MySQL database named api-design-ecommerce-node-mysql.
  - Update the database connection details in db.js.

4. Run the application:
```bash
  npm start
```

5. Project Structure
  - server.js: Main entry point for the Node.js server.
  - db.js: Database configuration.
  - products.js: Router for product-related API endpoints.
  - cart.js: Router for shopping cart-related API endpoints.

6. API Endpoints
  - Product Management:

    - GET /api/products: List all products.
    - GET /api/products/details/:productId: Get details of a specific product.
    - POST /api/products/create: Create a new product.

  - Shopping Cart:

    - GET /api/cart/get/:userId: Get products in the user's shopping cart.
    - POST /api/cart/add: Add a product to the user's shopping cart.
    - POST /api/cart/remove: Remove a product from the user's shopping cart.

7. Usage
  - Use Postman or a similar tool to test the API endpoints.

