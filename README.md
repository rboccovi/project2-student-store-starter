# Student Store Project




Link to Demo: 

<iframe src="https://www.loom.com/embed/9699cbd317d04f5ba2ea47e4069220dc?sid=0c277609-4167-4439-9d10-579dfca2ca04" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>



LINK TO PART 2 DEMO:
<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/f1214b12d2b846eeb540c63fbeb6b9ba?sid=64a3ff43-6a32-488e-b7e8-ed5ed9ce293c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

-Click on the different categories (clothing, food, etc.) to filter the list of products.
-  Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

### Core Features

- [X ] The website displays header, banner, search, product grid, *about, *contact, and *footer section.
- [ x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [ x ] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [ x] Users can search for products.
- [ x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [ ] Users can click to expand the shopping cart in the left navigation.
- [ ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ ] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can leave ratings for products they have purchased.)

## *Week 3* Application Features

### Core Features

- [ x] User can click to expand the shopping cart in the left navigation.
- [ x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ x] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [ x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ x] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [ x] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can create a wish list of products they are interested in but not yet ready to purchase.)
