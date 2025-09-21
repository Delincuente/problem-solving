-- As part of business expansion efforts at a company, 
-- your help is needed to find all pairs of customers 
-- and agents who have been in contact more than once. 
-- For each such pair, display the user id, first name, 
-- and last name, and the customer id, name, and the number of their contacts. 
-- Order the result by user id ascending

SELECT 
    a.user_id,
    a.first_name,
    a.last_name,
    c.customer_id,
    c.name AS customer_name,
    COUNT(*) AS contact_count
FROM contacts ct
JOIN agents a 
    ON ct.agent_id = a.user_id
JOIN customers c 
    ON ct.customer_id = c.customer_id
GROUP BY 
    a.user_id, a.first_name, a.last_name,
    c.customer_id, c.name
HAVING COUNT(*) > 1
ORDER BY a.user_id ASC;
