import { useState } from 'react';

function APIs() {
  const [jokeData, setJokeData] = useState('');
  const [adviceData, setAdviceData] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
      const data = await response.json();
      if (data.error) {
        setJokeData('Error fetching joke');
        return;
      }
      if (data.type === 'single') {
        setJokeData(data.joke);
      } else {
        setJokeData(`${data.setup} ... ${data.delivery}`);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJokeData('Failed to fetch joke');
    }
  };

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdviceData(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
      setAdviceData('Failed to fetch advice');
    }
  };

  return (
    <div>
      <h1>Advice and Jokes</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Joke</h2>
        <button onClick={fetchJoke}>Get Joke</button>
        {jokeData && <p>{jokeData}</p>}
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2>Advice</h2>
        <button onClick={fetchAdvice}>Get Advice</button>
        {adviceData && <p>{adviceData}</p>}
      </div>
    </div>
  );
}

export default APIs;
