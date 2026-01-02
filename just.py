arr = [3, 1, 7, 2, 9, 5]

odd_numbers = [num for num in arr if num % 2 != 0]

if odd_numbers:
    sorted_descending = sorted(odd_numbers, reverse=True)
    print("Нечётные числа в порядке убывания:", sorted_descending)
else:
    print("Нет нечётных чисел.")