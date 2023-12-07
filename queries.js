//For the following question write the corresponding MongoDB queries

//1. Find all the information about each products
//2. Find the product price which are between 400 to 800 3. Find the product price which are not between 400 to 600
//4. List the four product which are grater than 500 in price
//5. Find the product name and product material of each products
//6. Find the product with a row id of 10
//7. Find only the product name and product material
//8. Find all products which contain the value of soft in product material
//9. Find products which contain product color indigo and product price 492.00 
//10. Delete the products which product price value are same

//Below are the corresponding queries for each question:

//1. Find all the information about each product:

db.products.find({})


//2. Find the product price which is between 400 to 800:

db.products.find({ "product_price": { $gte: 400, $lte: 800 } })


//3. Find the product price which is not between 400 to 600:

db.products.find({ "product_price": { $lt: 400, $gt: 600 } })


//4. List the four products which are greater than 500 in price:

db.products.find({ "product_price": { $gt: 500 } }).limit(4)


//5. Find the product name and product material of each product:

db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 0 })


//6. Find the product with a row id of 10:

db.products.find({ "row_id": 10 })


//7. Find only the product name and product material:

db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 0 })


//8. Find all products which contain the value "soft" in product material:

db.products.find({ "product_material": { $regex: /soft/i } })


//9. Find products which contain product color "indigo" and product price 492.00:

db.products.find({ "product_color": "indigo", "product_price": 492.00 })


//10. Delete the products which have the same product price value:

db.products.deleteMany({ "product_price": { $eq: { price: "$price" } } })



