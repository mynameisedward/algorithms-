const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, q;
let s;
let queries = [];

rl.on('line', function(data) {
    if (!n) {
        [n, q] = data.split(' ').map(Number);
    } else if (!s) {
        s = data;
    } else {
        queries.push(data.split(' ').map(Number));
    }
});

process.stdin.on('end', () => {
    processQueries();
});

function processQueries() {
    for (let i = 0; i < q; i++) {
        const query = queries[i];
        if (query[0] === 1) {
            const [, l, r] = query;
            duplicateSubstring(l - 1, r - 1);
        } else if (query[0] === 2) {
            const [, i] = query;
            console.log(s[i - 1]);
        }
    }
}

function duplicateSubstring(l, r) {
    const substring = s.slice(l, r + 1);
    let duplicated = '';
    for (let i = 0; i < substring.length; i++) {
        duplicated += substring[i] + substring[i];
    }
    s = s.slice(0, l) + duplicated + s.slice(r + 1);
}