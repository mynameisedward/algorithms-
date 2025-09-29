function algo(arr_len, arr, x) {
    let last = arr[0]

    for(let i = 1; i <= arr.length; i++) {
        if(Math.abs(x - arr[i]) <= Math.abs(x - last)) {
            last = arr[i]
        }
    }

    console.log(last)
}

algo(5, [1, 2], 5)
