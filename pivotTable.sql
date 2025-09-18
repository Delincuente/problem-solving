-- Pivot the Occupation column in OCCUPATIONS so that each Name is sorted 
-- alphabetically and displayed underneath its corresponding Occupation. 
-- The output should consist of four columns (Doctor, Professor, Singer, and Actor)
-- in that specific order, with their respective names listed alphabetically 
-- under each column.

-- Note: Print NULL when there are no more names corresponding to an occupation.



WITH PON AS (
SELECT
    name,
    occupation,
    ROW_NUMBER() OVER(PARTITION BY occupation ORDER BY name) AS RN
    -- RANK() OVER(PARTITION BY occupation ORDER BY name) AS R,
    -- DENSE_RANK() OVER(PARTITION BY occupation ORDER BY name) AS DR
FROM
    OCCUPATIONS
)

SELECT
    MAX(CASE WHEN occupation = 'Doctor' THEN name END) AS 'Doctor',
    MAX(CASE WHEN occupation = 'Professor' THEN name END) AS 'Professor',
    MAX(CASE WHEN occupation = 'Singer' THEN name END) AS 'Singer',
    MAX(CASE WHEN occupation = 'Actor' THEN name END) AS 'Actor'
FROM
    PON
GROUP BY RN