# Write your MySQL query statement below
select e.Name as 'Employee'
from Employee e
where e.ManagerId is not NULL
  and e.Salary > (select m.Salary from Employee m where e.ManagerId = m.Id)