# @param {Integer} n
# @return {Integer}
def fib(n)
    
    fn_1 = 1 # F(N-1)
    fn_2 = 0 # F(N-2)
    
    if n == 0 then return fn_2 end
    if n == 1 then return fn_1 end 
    
    fn = 0
        
    for i in 2..n do
        fn = fn_1 + fn_2
        fn_2 = fn_1
        fn_1 = fn
    end

    return fn
end