-- Product Sales per City For each pair of city and product, 
-- return the names of the city and product, as well the total amount spent on 
-- the product to 2 decimal places, Order the result by the amount spent 
-- from high to low then by city name and product name in ascending order. 

-- Tables are customer, city, invoice, invoice_item, product

SELECT 
    ci.city_name AS city,
    p.product_name AS product,
    ROUND(SUM(ii.quantity * ii.unit_price), 2) AS total_spent
FROM city ci
JOIN customer c ON ci.city_id = c.city_id
JOIN invoice i ON c.customer_id = i.customer_id
JOIN invoice_item ii ON i.invoice_id = ii.invoice_id
JOIN product p ON ii.product_id = p.product_id
GROUP BY ci.city_name, p.product_name
ORDER BY total_spent DESC, city ASC, product ASC;
