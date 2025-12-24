//your JS code here. If required.
const outputDiv = document.getElementById("output");

// Initial function returning a promise
function manipulateArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // initial 3-second delay
  });
}

manipulateArray()
  // First transformation: filter even numbers
  .then((arr) => {
    const evenNumbers = arr.filter(num => num % 2 === 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = evenNumbers.join(",");
        resolve(evenNumbers);
      }, 1000); // 1-second delay
    });
  })

  // Second transformation: multiply by 2
  .then((evenNumbers) => {
    const multiplied = evenNumbers.map(num => num * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = multiplied.join(",");
        resolve();
      }, 2000); // 2-second delay
    });
  });
