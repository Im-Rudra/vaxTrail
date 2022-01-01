const vaxTrail = (arr) => {
  if (Array.isArray()) return 'Input an array of Objects';
  const A = [];
  const B = [];
  const C = [];
  const D = [];
  arr.forEach((el) => {
    const { age, temperature } = el;
    if (age >= 20 && age <= 30 && temperature < 100) {
      A.push(el);
    } else if (age >= 31 && age <= 40 && temperature < 100) {
      B.push(el);
    } else if (age >= 41 && age <= 50 && temperature < 100) {
      C.push(el);
    } else if (temperature >= 100) {
      D.push(el);
    }
  });
  return { A, B, C, D };
};

// const sample = [
//   { name: 'Biplap', age: 22, temperature: 98 },
//   { name: 'sunil', age: 21, temperature: 98 },
//   { name: 'Kabir', age: 36, temperature: 99 },
//   { name: 'Rahul', age: 37, temperature: 99 },
//   { name: 'Paul', age: 42, temperature: 98 },
//   { name: 'Kat', age: 41, temperature: 98 },
//   { name: 'Nayem', age: 50, temperature: 100 },
//   { name: 'Sabnaj', age: 51, temperature: 101 }
// ];

// console.log(vaxTrail(sample));
