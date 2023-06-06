import "./movielist.css";

const MovieList = () => {
  const headerMsg = "Movie Library";
  const movies = [
    {
      id: 1,
      name: "The Fast and the Furious",
      img: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      realaseYear: "2001",
    },
    {
      id: 2,
      name: "2 Fast 2 Furious",
      img: "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      realaseYear: "2003",
    },
    {
      id: 3,
      name: "F & F : Tokyo Drift",
      img: "https://images.moviesanywhere.com/0d8385198e30c6ac086b643c6a13ab50/0baff3aa-3327-4e33-9546-600bea206acf.jpg",
      realaseYear: "2006",
    },
    {
      id: 4,
      name: "Home Alone 3",
      img: "https://images.moviesanywhere.com/70ab6a6271c2deb42f1023e1a207895f/d41aa451-fe32-4dbf-a494-484f65858089.jpg",
      realaseYear: "1997",
    },
    {
      id: 5,
      name: "Recep Ivedik 3",
      img: "https://m.media-amazon.com/images/M/MV5BZjEwOTNlZjYtNTVlMS00M2Q5LTk0YmQtMWIzZDI4ODIyODlkXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_FMjpg_UX1000_.jpg",
      realaseYear: "2010",
    },
    {
      id: 6,
      name: "Batman : The Dark Knight",
      img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      realaseYear: "2008",
    },
    {
      id: 7,
      name: "Јужни ветар",
      img: "https://e.snmc.io/i/300/s/2835f97667a395a584d41f7342166cd6/8433482",
      realaseYear: "2018",
    },
    {
      id: 8,
      name: "Titanic",
      img: "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so",
      realaseYear: "1997",
    },
    {
      id: 9,
      name: "The Godfather",
      img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      realaseYear: "1972",
    },
    {
      id: 10,
      name: "Project X",
      img: "https://m.media-amazon.com/images/M/MV5BMTc1MTk0Njg4OF5BMl5BanBnXkFtZTcwODc0ODkyNw@@._V1_.jpg",
      realaseYear: "2012",
    },
  ];

  return (
    <div>
      <div>
        <h1>{headerMsg}</h1>
      </div>
      <hr />
      <div className="movieContainer">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movieCard">
              <h3>{movie.name}</h3>
              <img src={movie.img} alt="" />
              <h4>{movie.realaseYear}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
