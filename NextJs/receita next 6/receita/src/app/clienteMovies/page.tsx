"use client";

import { useState } from "react";
import React from "react";

export default function Home() {
  const [titleSearchKey, setTitleSearchKey] = useState("");
  const [resultMovies, setResultMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAction(formData: FormData) {
    const title = formData.get("titleSearchKey") as string;
    setIsLoading(true);
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${title}`);
    const jsonRes = await httpRes.json();
    setResultMovies(jsonRes.Search || []);
    setIsLoading(false);
    setTitleSearchKey(""); // Reset the search key
  }

  return (
    <div className="container mx-auto p-4">
      <MovieForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        isLoading={isLoading}
      />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
}

interface MovieFormProps {
  handleAction: (formData: FormData) => void;
  titleSearchKey: string;
  setTitleSearchKey: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const MovieForm = React.memo(({ handleAction, titleSearchKey, setTitleSearchKey, isLoading }: MovieFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAction(new FormData(e.currentTarget));
      }}
      className="flex flex-col gap-4"
    >
      <label htmlFor="idTitleSearchKey">Título</label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        onChange={(e) => setTitleSearchKey(e.target.value)}
        className="border rounded p-2"
      />
      <button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-2 rounded">
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  );
});

interface MovieTableProps {
  movies: Movie[];
}

function MovieTable({ movies }: MovieTableProps) {
  return (
    <div className="mt-4">
      {movies.map((m) => (
        <div key={m.imdbID} className="border-b py-2">
          {m.Title} --- {m.Year}
        </div>
      ))}
    </div>
  );
}
