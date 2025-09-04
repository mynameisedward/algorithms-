// Дана строка в UTF-8
// Найти самый часто встречающийся символ в строке 



test_string = 'ababa'
 
most_common_symbol = ''
count_of_common_sybmols = 0



let searchMostCommonSymbol = (string) => {

    for(i in string) {
        count_symbol_i = 0
        for(j in string) {
            if(string[i] == string[j]) {
                count_symbol_i += 1
            }
        }
        if(count_symbol_i > count_of_common_sybmols) {
            most_common_symbol = string[i]
            count_of_common_sybmols = count_symbol_i
        }

    }

    console.log(most_common_symbol, count_of_common_sybmols)

}

searchMostCommonSymbol(test_string)
