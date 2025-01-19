interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Director?: string;
    Plot?: string;
  }
  
  export default async function Home({ searchParams }: { searchParams: { titleSearchKey?: string; typekey?: string } }) {
    const { titleSearchKey = "botafogo", typekey = "movie" } = searchParams;
    
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=56bb0083&s=${titleSearchKey}&type=${typekey}`
    );
    
    const data = await res.json();
  
    return (
      <div>
        {data.Search.map((m: Movie) => (
          <div key={m.imdbID} style={{ marginBottom: "20px" }}>
            <h2>{m.Title} ({m.Year})</h2>
            <img src={m.Poster} alt={`${m.Title} Poster`} style={{ width: "200px", height: "auto" }} />
            {m.Director && <p><strong>Director:</strong> {m.Director}</p>}
            {m.Plot && <p><strong>Plot:</strong> {m.Plot}</p>}
          </div>
        ))}
      </div>
    );
  }
  