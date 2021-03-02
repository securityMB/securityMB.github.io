// @ts-check
"use strict";

const url = "https://lektury.mibe.workers.dev/media/book/txt/pan-tadeusz.txt";

async function doit() {
  let text = await fetch(url).then((r) => r.text());
  text = text.toLowerCase().replace(/[^\p{Ll}\s]+/gu, "");

  /**
   * @type {Set<string>}
   */
  const substrings = new Set();
  const substringLength = 3;

  const split = text.split(/\s+/);
  for (let i = 0; i < split.length; ++i) {
    const substr = split.slice(i, i + substringLength).join(" ");
    substrings.add(substr);
  }
  console.log(substrings.size);

  const substringsArray = Array.from(substrings);
  const res = Array.from({ length: 8 })
    .map(() => randomElement(substringsArray))
    .join(" ");
  console.log(res);
}

doit();

/**
 * @template T
 * @param {T[]} arr
 * @returns T
 */
function randomElement(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}
