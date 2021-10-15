func finalValueAfterOperations(operations []string) int {
    var result int
    result = 0
    
    for _, operand := range operations {
        if operand == "++X" || operand == "X++" {
            result++
        } else {
            result--
        }
    }
    
    return result
}