Дерево - это ноды, связанные между собой сверху вниз

    - Имеется корневая нода - root (самая верхняя)
    - Имеются нижние ноды, у которых нет дочерних нод - Leaf(листочки)
    
    - Имеется поддерево

    - Имеется ветка(от корня до листочка)

    - Есть понятие уровень, уровень дерева. От 1 до n(сверху вниз)


Как обойти дерево? по каждому элементу
    Используем DFS, Depth First Search, Поиск в глубину


Что такое DFS?
    Мы ныряем в глубину, ищем значение, и выплываем на уровень вверх, если не находим

    function dfs(node) {
        if not node{
            return
        }
        console.log(node.val)    // PRINT pre-order
        dfs(node.left)
        console.log(node.val)    // PRINT in-order
        dfs(node.right)
        console.log(node.val)    // PRINT post-order
        return
    }


Как выглядит классический рекурсивный dfs
    function dfs(node) {
        if(!node) {
            return
        }

        dfs(node.left)
        dfs(node.right)
        
        return
    }



