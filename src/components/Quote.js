import { useEffect, useState } from 'react';

export default function Quote() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchQoute = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          withCredentials: true,
          headers: {
            'X-Api-Key': 'JPH0dr8vp5cPyFyCj/jr7g==7Z5eQyE7zjkxZ4gW',
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json[0]);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchQoute();
  }, [setData, setLoading, setError]);

  if (error) return <div className="error">Something went wrong!! Try Again.</div>;

  if (loading) return <div className="loading-message">Loading...</div>;

  return (
    <div className="quote-container">
      <p className="quote">{data.quote}</p>
      <p className="author">{data.author}</p>
    </div>
  );
}
