# Write your MySQL query statement below
delete from person p
where p.id not in 
  (
    select t.id from (
        select email, min(id) as id from person
        group by email
    ) t
  )
