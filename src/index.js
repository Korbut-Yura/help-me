module.exports = function count(s, pairs) {
  let N = 1,
    K = 0;
  for (let i=0; i < pairs.length; i++) {
    N *= pairs[i][0];
  }
  for (let i=0; i < pairs.length; i++) {
    K += N/pairs[i][0];
    for (let j = 0; j < i; j++) {
      K -= N/(pairs[i][0]*pairs[j][0]) 
    }
  }
 
  for (let j =0; j < s.length; j++) {
    if (s[j] == 1) {
      K = N-K
    }
  }

  const result = K % 1000000007;
  return result;
}