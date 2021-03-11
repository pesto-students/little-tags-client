import { debounce } from "./debounce";
// import {  debounce} from "debounce";

const delay = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

describe("debounce", () => {
  test("debounces a function", async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 10);
    for (let i = 0; i < 50; i++) {
      debounced();
    }
    await delay(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("calls the function after the correct time", async () => {
    let completedTime;
    const fn = jest.fn(() => {
      completedTime = Date.now();
    });
    const currentTime = Date.now();
    const debounced = debounce(fn, 100);
    debounced();
    await delay(110);
    const difference = completedTime - currentTime;
    expect(completedTime).toBeDefined();
    expect(difference).toBeGreaterThan(100);
    expect(difference).toBeLessThan(120);
  });

  test("debounces a function and returns the result", async () => {
    let count = 0;

    const debounced = debounce((value) => {
      count++;
      return value;
    }, 20);

    expect(debounced(1)).toBeUndefined();
    expect(debounced(2)).toBeUndefined();
    expect(debounced(3)).toBeUndefined();

    await delay(100);
    expect(debounced(4)).toBe(3);
    expect(debounced(5)).toBe(3);
    expect(debounced(6)).toBe(3);
    expect(count).toBe(1);

    await delay(200);
    expect(count).toBe(2);
    expect(debounced(9)).toBe(6);
  });

  test("forwards the context", async () => {
    const fn = jest.fn(function () {
      return this;
    });

    const context = { name: "Pesto" };

    const debounced = debounce(fn, 10);
    debounced.call(context);
    await delay(50);
    expect(debounced()).toBe(context);
  });

  test(".cancel works", async () => {
    const fn = jest.fn();

    const debounced = debounce(fn, 40);
    await delay(20);
    debounced.cancel();
    await delay(50);
    expect(fn).not.toHaveBeenCalled();
  });
});
