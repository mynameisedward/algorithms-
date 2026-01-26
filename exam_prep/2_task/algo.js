function minChangesToGoodString(s) {
    const len = s.length;
    
    // Функция подсчета необходимых изменений для размещения подстроки 'target' начиная с индекса startIndex
    function countReplacements(startIndex, target) {
        let changes = 0;
        
        for (let i = 0; i < target.length && startIndex + i < len; ++i) {
            if (s[startIndex + i] !== target[i]) {
                changes++;
            }
        }
        
        return changes;
    }

    // Будем проверять размещение подстрок 'study' и 'tbank'
    const substrings = ['study', 'tbank'];
    
    let minChanges = Infinity;
    
    // Перебираем возможные позиции первой подстроки
    for (let posStudy = 0; posStudy <= len - 5; posStudy++) { // длина 'study' равна 5 символам
        const replacementsForStudy = countReplacements(posStudy, 'study');
        
        // Затем проверяем возможные позиции второй подстроки ('tbank')
        for (let posTbank = 0; posTbank <= len - 5; posTbank++) { // длина 'tbank' тоже равна 5 символам
            
            // Подстроки не должны пересекаться
            if ((posStudy >= posTbank && posStudy < posTbank + 5) || (posTbank >= posStudy && posTbank < posStudy + 5)) continue;
            
            const replacementsForTbank = countReplacements(posTbank, 'tbank');
            
            // Общее количество изменений для текущего размещения подстрок
            const totalReplaces = replacementsForStudy + replacementsForTbank;
            
            // Обновляем минимальное значение
            minChanges = Math.min(minChanges, totalReplaces);
        }
    }
    
    return minChanges === Infinity ? -1 : minChanges;
}


