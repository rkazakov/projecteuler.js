const DIVISORS = 500;

const generateTriangleNumber = (n) => {
  return [...Array(n).keys()].reduce((number, sum) => {
    return sum + number + 1;
  }, 0);
};

const getDivisorsNumber = (n) => {
  let count = 0;
	[...Array(n).keys()].map((number) => {
	  if (n % ( number + 1 ) === 0) {
	    count++;
    }
  });
  return count;
};

for(let count=0; true; count++) {
	const triangleNumber = generateTriangleNumber(count);
  const divisorsNumber = getDivisorsNumber(triangleNumber);
  if (divisorsNumber >= 300) {
	  console.log(`${triangleNumber} has ${divisorsNumber} divisors.`);
  }
	if (divisorsNumber >= DIVISORS) {
	  console.log('Result:', triangleNumber);
	  break;
  }
}
