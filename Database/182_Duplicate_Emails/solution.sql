# Write your MySQL query statement below
select t.Email 
from 
(select Email, count(1)
 from Person
 group by Email
 having count(1) > 1) t