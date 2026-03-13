const [A, B, C, D] = [1, 1, 1, 1];

const min_a = B + 1;
const min_b = A + 1;
const min_c = D + 1;
const min_d = C + 1;

const blue_clothes = min_a + min_c;
const red_clothes = min_b + min_d;

if (blue_clothes > red_clothes) {
  console.log(min_b, min_d);
} else {
  console.log(min_a, min_c);
}
