k=0
for x1 in "1234567":
    for x2 in "01234567":
        for x3 in "01234567":
            for x4 in "01234567":
                s=x1+x2+x3+x4
                if (x1==x2 and x2!=x4 and x3!=x4 and x3!=x1) or (x2==x3 and x3!=x4 and x1!=x2 and x1!=x4) or (x3==x4 and x4!=x1 and x2!=x1 and x3!=x2):
                    k=+1
print(k)