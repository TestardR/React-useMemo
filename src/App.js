import React, { useState, useMemo } from 'react';
import { useFetch } from './useFetch';

const computeLongestWord = obj => {
  if (!obj) {
    return [];
  }
  console.log('computing longest word');
  let longestWord = '';
  const words = obj.quote.split(' ');

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};

function App() {
  const [count, setCount] = useState(0);
  const { data } = useFetch('https://api.kanye.rest');

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord
  ]);

  return (
    <div className="App">
      <div>count : {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increment
      </button>
      <div>{longestWord}</div>
    </div>
  );
}

export default App;
