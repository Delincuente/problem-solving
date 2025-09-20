-- Query the Western Longitude (LONG_W) for the 
-- largest Northern Latitude (LAT_N) in STATION that is less than 137.2345. 
-- Round your answer to  decimal places.

-- My Solution
SELECT 
    ROUND(LONG_W,4)
FROM 
    station
WHERE 
    LAT_N = (SELECT MAX(LAT_N) FROM STATION WHERE LAT_N < 137.2345);


-- Alternative - 1
SELECT 
    ROUND(LONG_W,4)
FROM
    station
WHERE 
    LAT_N < 137.2345
ORDER BY 
    LAT_N DESC
LIMIT 1;

-- Alternative - 2
SELECT ROUND(LONG_W, 4)
FROM (
    SELECT LONG_W, ROW_NUMBER() OVER (ORDER BY LAT_N DESC) AS rn
    FROM station
    WHERE LAT_N < 137.2345
) x
WHERE rn = 1;