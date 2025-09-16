-- SQL User Logins
-- Your table: maintable_OMJJR
-- MySQL version: 8.0.23
-- In this MySQL challenge, 
-- the table provided shows all new users signing up on a specific date in 
-- the format YYYY-MM-DD. 
-- Your query should output the change from one month to the next. 
-- Because the first month has no preceding month, 
-- your output should skip that row. 
-- Your output should look like the following table.

-- | Month      | MonthToMonthChange |
-- | February   |                 -1 |
-- | March      |                  6 |
-- | April      |                 -6 |
-- | May        |                  4 |

-- Here’s the SQL query to solve the SQL User Logins challenge from the image:

SELECT 
	DATE_FORMAT(DateJoined,"%M") AS Month,
    COUNT(ID) -
    (
        SELECT COUNT(`m2`.ID) AS preCount FROM `maintable_omjjr` AS `m2`
		WHERE MONTH(`m2`.DateJoined) = MONTH(`m1`.DateJoined) - 1
    ) as MonthToMonthChange
FROM `maintable_omjjr` AS `m1`
WHERE MONTH(`m1`.DateJoined) != 1 GROUP BY Month ORDER BY DateJoined;

-- Explanation:
-- - We group the users by month and count signups.
-- - Use a self-join to compare the current month with the previous month.
-- - The result shows the month name and the change in user count from the previous month.

-- Let me know if you want this rewritten for another SQL dialect like PostgreSQL