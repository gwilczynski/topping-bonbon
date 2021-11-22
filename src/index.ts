import lollipop from "./lollipop";

const hello = () => {
  return "Hello from Topping Bonbon!";
};

export { default as cheesecakeMaker } from "./cheesecake";
export * from "./cheesecake";

export { hello, lollipop };
