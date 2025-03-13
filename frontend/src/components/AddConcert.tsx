import React, { useState } from 'react';
import { createConcert } from '../api';

export default function AddConcert() {
  const [performer, setPerformer] = useState('');
  const [started_at, setStartedAt] = useState('');
  const [lenght, setLenght] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!performer || !started_at || lenght <= 0) {
      setError('Minden mezőt ki kell tölteni!');
      return;
    }

    if (new Date(started_at).getTime() < Date.now()) {
      setError('A koncert kezdési ideje nem lehet a múltban!');
      return;
    }

    try {
      await createConcert({ performer, started_at, lenght });
      setError('');
      setPerformer('');
      setStartedAt('');
      setLenght(0);
    } catch (error) {
      console.error('Hiba a koncert hozzáadása során:', error);
      setError('Hiba történt a koncert hozzáadása során!');
    }
  };
const seconds = ":00.000"
  return (
    <div className="form-container">
      <h2 className='hozzaad'>Új koncert hozzáadása</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fellépő neve"
          value={performer}
          onChange={(e) => setPerformer(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={started_at}
          onChange={(e) => setStartedAt(e.target.value+seconds)}
          required
        />
        <input
          type="number"
          placeholder="Időtartam (perc)"
          value={lenght}
          onChange={(e) => setLenght(Number(e.target.value))}
          required
        />
        <button type="submit">Koncert hozzáadása</button>
      </form>
    </div>
  );
}
