import timeit

def exponential(n):
    start = timeit.default_timer()
     
    k = 0
    for _ in range(2**n):
        k += 1

    run_time = (timeit.default_timer() - start) * 1000

    print("exponential: {} Time {:.6f} ms".format(k, run_time))

exponential(30)