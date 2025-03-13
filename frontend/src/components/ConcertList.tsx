import { useEffect, useState } from 'react';
import { getConcerts, markConcertAsCancelled } from '../api';

interface Concert {
  id: number;
  performer: string;
  started_at: string;
  lenght: number;
  fail: boolean;
}

export default function ConcertList() {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const data = await getConcerts();
        setConcerts(data);
      } catch (error) {
        console.error('Failed to fetch concerts:', error);
      }
    };

    fetchConcerts();
  }, []);

  const handleCancelConcert = async (concertId: number) => {
    try {
      const updatedConcert = await markConcertAsCancelled(concertId);
      setConcerts((prevConcerts) =>
        prevConcerts.map((concert) =>
          concert.id === concertId ? updatedConcert : concert
        )
      );
    } catch (error) {
      console.error('Failed to cancel concert:', error);
    }
  };

  return (
    <div className="concert-list-container">
      <h2 className='hozzaad'><p className='szoveg'>Fellépők listája</p></h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Fellépő</th>
              <th>Kezdési idő</th>
              <th>Időtartam</th>
              <th>Elmarad</th>
            </tr>
          </thead>
          <tbody>
            {concerts.map((concert) => (
              <tr
                key={concert.id}
                className={concert.fail ? 'table-danger' : ''}
              >
                <td>{concert.performer}</td>
                <td>{new Date(concert.started_at).toLocaleString()}</td>
                <td>{concert.lenght} perc</td>
                <td>
                  <button
                    className={`btn ${concert.fail ? 'disabled' : ''}`}
                    onClick={() => handleCancelConcert(concert.id)}
                    disabled={concert.fail}
                  >
                    Elmarad
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
