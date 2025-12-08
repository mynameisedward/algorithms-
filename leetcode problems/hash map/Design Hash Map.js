// Основная идея: создаем пустые бакеты, 
//                создаем хэш функцию
//                и в каждой функции и используем хэш-функцию для нахождения индекса к какому бакету обращаться
//                итерироваться по парам каждого бакета и делать то, что нам нужно

var MyHashMap = function() {
    this.size = 743
    this.buckets = Array(this.size).fill([])
}

MyHashMap.prototype.hash = function(key) {
    return key % this.size
}

MyHashMap.prototype.get = function(key) {
    const index = hash(key)
    const bucket = this.buckets[index]

    for(let pair of bucket) {
        if(pair[0] == key) {
            return pair[1]
        }
    }
    return -1
}

MyHashMap.prototype.put = function(key, value) {
    let index = hash(key)
    let bucket = this.buckets[index]

    for(let pair of bucket) {
        if(pair[0] == key) {
            pair[1] = value
            return
        }
    }
    bucket.push([key, value])
}

MyHashMap.prototype.remove = function(key) {
    let index = hash(key)
    let bucket = this.buckets[index]

    for(let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] == key) {
            bucket.splice(i, 1)
        }
    }
}

// repeat