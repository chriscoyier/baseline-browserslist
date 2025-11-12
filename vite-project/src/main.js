// 1. Nullish coalescing assignment (??=) - ES2021
let config = { theme: null };
config.theme ??= "dark";
console.log("Theme with ??=:", config.theme);

// 2. Logical OR assignment (||=) - ES2021
let settings = { volume: 0 };
settings.volume ||= 50;
console.log("Volume with ||=:", settings.volume);

// 3. Logical AND assignment (&&=) - ES2021
let user = { name: "Alice", role: "admin" };
user.role &&= user.role.toUpperCase();
console.log("Role with &&=:", user.role);

// 4. Numeric separators - ES2021
const largeNumber = 1_000_000;
const binary = 0b1010_0001_1000_0101;
console.log("Large number:", largeNumber, "Binary:", binary);

// 5. Optional chaining (?.) - ES2020
const response = { data: { user: { name: "Bob" } } };
const userName = response?.data?.user?.name;
const missing = response?.missing?.deeply?.nested;
console.log("User name:", userName, "Missing:", missing);

// 6. Nullish coalescing (??) - ES2020
const value = null ?? "default";
const zero = 0 ?? "default";
console.log("Null ?? default:", value, "Zero ?? default:", zero);

// 7. Promise.allSettled - ES2020
const promises = [
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("another success"),
];

Promise.allSettled(promises).then((results) => {
  console.log("All settled:", results);
});

// 8. Private class fields - ES2022
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log("Counter:", counter.getCount());

// 9. Static class fields - ES2022
class MathHelper {
  static PI = 3.14159;
  static #secret = "private";

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
}

console.log("Circumference:", MathHelper.getCircumference(10));

// 10. Top-level await - ES2022
// const data = await Promise.resolve({ loaded: true });
// console.log("Top-level await:", data);

// 11. Array.at() - ES2022
const arr = [1, 2, 3, 4, 5];
console.log("Last item with at():", arr.at(-1));
console.log("Second to last:", arr.at(-2));

// 12. Object.hasOwn() - ES2022
const obj = { prop: "value" };
console.log("Has own property:", Object.hasOwn(obj, "prop"));

// 13. String.replaceAll() - ES2021
const text = "hello world, hello universe";
const replaced = text.replaceAll("hello", "hi");
console.log("Replace all:", replaced);

// 14. Array.findLast() and Array.findLastIndex() - ES2023
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lastEven = numbers.findLast((n) => n % 2 === 0);
const lastEvenIndex = numbers.findLastIndex((n) => n % 2 === 0);
console.log("Last even number:", lastEven, "at index:", lastEvenIndex);

// 15. Array.toSorted(), toReversed(), toSpliced() - ES2023 (immutable operations)
const original = [3, 1, 4, 1, 5];
const sorted = original.toSorted();
const reversed = original.toReversed();
const spliced = original.toSpliced(1, 2, 999);
console.log(
  "Original:",
  original,
  "Sorted:",
  sorted,
  "Reversed:",
  reversed,
  "Spliced:",
  spliced,
);

// 16. Array.with() - ES2023 (immutable update)
const colors = ["red", "green", "blue"];
const updated = colors.with(1, "yellow");
console.log("Original colors:", colors, "Updated:", updated);

// 17. WeakMap Symbol as keys - ES2023
const sym = Symbol("key");
const weakMap = new WeakMap();
const obj1 = {};
weakMap.set(obj1, "value");
console.log("WeakMap has obj:", weakMap.has(obj1));

// 18. Object.groupBy() - ES2024
const inventory = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "broccoli", type: "vegetable" },
];
const grouped = Object.groupBy(inventory, (item) => item.type);
console.log("Grouped by type:", grouped);

// 19. Map.groupBy() - ES2024
const groupedMap = Map.groupBy(inventory, (item) => item.type);
console.log("Grouped Map:", groupedMap);

// 20. Promise.withResolvers() - ES2024
const { promise, resolve, reject } = Promise.withResolvers();
setTimeout(() => resolve("Resolved after 100ms"), 100);
promise.then((result) => console.log("Promise.withResolvers:", result));

// 21. ArrayBuffer methods - ES2024
const buffer1 = new ArrayBuffer(8);
const buffer2 = new ArrayBuffer(8);
const view1 = new Uint8Array(buffer1);
view1[0] = 42;
const transferred = buffer1.transfer();
console.log("ArrayBuffer transferred:", transferred.byteLength);

// 22. String.isWellFormed() and toWellFormed() - ES2024
const illFormed = "Hello\uD800World"; // Lone surrogate
console.log("Is well formed:", illFormed.isWellFormed());
console.log("To well formed:", illFormed.toWellFormed());

// 23. Regex /v flag - ES2024 (Unicode sets)
const emojiRegex = /[\p{Emoji}--\p{ASCII}]/v;
const testEmoji = "🎉";
console.log("Emoji matches /v flag:", emojiRegex.test(testEmoji));

// 24. Set methods - ES2025 (Stage 3, widely supported)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = setA.union(setB);
console.log("Set union:", Array.from(union));

// Intersection
const intersection = setA.intersection(setB);
console.log("Set intersection:", Array.from(intersection));

// Difference
const difference = setA.difference(setB);
console.log("Set difference:", Array.from(difference));

// Symmetric difference
const symmetricDifference = setA.symmetricDifference(setB);
console.log("Set symmetric difference:", Array.from(symmetricDifference));

// isSubsetOf
console.log("Is {1,2} subset of setA:", new Set([1, 2]).isSubsetOf(setA));

// isDisjointFrom
console.log("setA disjoint from {7,8}:", setA.isDisjointFrom(new Set([7, 8])));

// 25. Temporal API - ES2025 (Stage 3)
// Note: Requires polyfill, but shows cutting-edge feature
try {
  if (typeof Temporal !== "undefined") {
    const now = Temporal.Now.plainDateTimeISO();
    console.log("Temporal API:", now.toString());
  } else {
    console.log("Temporal API: Not available (requires polyfill)");
  }
} catch (e) {
  console.log("Temporal API: Not available");
}
