
Можно смотреть на задачу и не зная Sliding Window задаваться вопросом, что от меня хотят, как это решить


Нам могут дать размер окна, а могут и не дать
Что делать если не дали?
    Сначала делаем окно размеров 0, а потом пробуем её расширить


Каркас паттерна Sliding Window:
    let begin = 0
    let window_state

    for(let end = 0; end < nums.length; end++) {
        end - begin + 1 // window size
        if // window condition
            begin += 1
    }
