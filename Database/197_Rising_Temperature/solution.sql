# Write your MySQL query statement below
select w.id
from weather w
where w.temperature > 
(select t.temperature 
 from weather t 
 where t.recorddate = date_sub(w.recorddate, interval 1 day)
)