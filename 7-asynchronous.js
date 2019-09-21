// const greeting = () => {
//   console.log("Hi");
// };
// setTimeout(greeting, 2000);

setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("Kittiporn");
    setTimeout(() => {
      console.log("Korprasertthaworn");
    }, 1000);
  }, 1000);
}, 1000);

const timeout = async (str, time) => {};
