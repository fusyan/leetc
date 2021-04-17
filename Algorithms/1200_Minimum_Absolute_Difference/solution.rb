# @param {Integer[]} arr
# @return {Integer[][]}
def minimum_abs_difference(arr)
    # combinations = arr.combination(2).to_a 重くて使えない
    sorted_array = arr.sort
    min = 0
    result = []
    sorted_array.each_with_index do |num, i|
        sorted_array[i+1] == nil ? break : next_num = sorted_array[i+1]
        abs = (num-next_num).abs
        if min == 0 then
            # 最初の１回目
            min = abs
            result.push([num, next_num])
        elsif min > abs then
            # 最小値が切り替わるときは結果の配列を初期化
            min = abs
            result = []
            result.push([num, next_num])
        elsif min == abs then
            # 最小値が同じとき
            result.push([num, next_num])
        end
    end
    return result
end