-- Query the Manhattan Distance between points
-- and round it to a scale of  decimal places.

-- p1 at (x1, y1) and p2 at (x2, y2), it is |x1 - x2| + |y1 - y2|.

-- MIN(LAT_N)  -- a == x1
-- MIN(LONG_W) -- b == y1
-- MAX(LAT_N)  -- c == x2
-- MAX(LONG_W) -- d == y2

SELECT (
    ROUND((ABS(MIN(LAT_N) - MAX(LAT_N)) + ABS(MIN(LONG_W) - MAX(LONG_W))),4)
) AS MD
FROM
    STATION