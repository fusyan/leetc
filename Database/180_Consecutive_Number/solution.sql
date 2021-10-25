# Write your MySQL query statement below
select distinct l.num as ConsecutiveNums
from Logs l
where l.num = (select pre.num from Logs as pre where pre.id = l.id-1)
  and l.num = (select post.num from Logs as post where post.id = l.id+1)