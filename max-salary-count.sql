-- We define an employee's total earnings to be their monthly  worked, 
-- and the maximum total earnings to be the maximum total earnings for any employee 
-- in the Employee table. Write a query to find the maximum total earnings for 
-- all employees as well as the total number of employees who have maximum total 
-- earnings.

/* Solution by me*/
SELECT 
    (months * salary) AS earnings ,
    count(employee_id)
FROM 
    employee 
GROUP BY earnings
ORDER BY earnings DESC
LIMIT 1;

-- Alternate solution - 1
-- avoid using full sorting for all groups by using having
SELECT 
    (months * salary) AS earnings,
    COUNT(*) AS employee_count
FROM employee
GROUP BY earnings
HAVING earnings = (
    SELECT MAX(months * salary) 
    FROM employee
);

-- Alternate solution - 2
-- use window functions
SELECT earnings, employee_count
FROM (
    SELECT 
        (months * salary) AS earnings,
        COUNT(*) OVER (PARTITION BY (months * salary)) AS employee_count,
        RANK() OVER (ORDER BY (months * salary) DESC) AS rnk
    FROM employee
) t
WHERE rnk = 1;


-- best and most optimal for big dataset
-- Alternate solution - 3
-- use subquery in where cause filter
SELECT 
    (months * salary) AS earnings,
    COUNT(*) AS employee_count
FROM employee
WHERE (months * salary) = (
    SELECT MAX(months * salary)
    FROM employee
);
