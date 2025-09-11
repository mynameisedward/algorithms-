firstNumb = int(input())
secondNumb = int(input())
thirdNumb = int(input())


firstCond = (firstNumb + secondNumb) > thirdNumb
secondCond = (firstNumb + thirdNumb) > secondNumb
thirdCond = (secondNumb + thirdNumb) > firstNumb

if(firstCond and secondCond and thirdCond):
	print('YES')
else:
	print('NO')
	
