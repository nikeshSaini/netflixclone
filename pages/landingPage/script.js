const api = "api_key=1625feaa5f85920be57a34e9a7da65b0";
// base url of the site
const base_url = "https://api.themoviedb.org/3";

// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300";

// requests for movies data
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};
// fuction for desciption

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "....." : str;
}
let horizontalbar = document.querySelector('.hrl');

// fetching the data from the api

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    let banner = document.getElementById("banner");
    let banner_title = document.getElementById("banner_title");
    let banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerHTML = truncate(setMovie.overview, 150);
    banner_title.innerHTML = setMovie.name;
  });
horizontalbar;
//   MOVIE ROW

fetch(requests.fetchNetflixOrignals)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    return res.json();
  })
  .then((data) => {
    const headr = document.getElementById("headrow");
    
    // Check if 'results' property exists in the API response
    if (!data.results) {
      throw new Error("Invalid API response: 'results' property not found");
    }


    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Netflix Originals";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";
      let s = movie.name.replace(/\s+/g, "");
      poster.id = s;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  })
  .catch((error) => {
    console.error("Error fetching Netflix Originals:", error);
  });



//   top rated 

fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) => {
    const headr = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Top Rated";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {

        // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      let s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  });



  //action


  fetch(requests.fetchActionMovies)
  .then((res) => res.json())

  .then((data) => {
    const headr = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Action Movies";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {

        // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      let s3 = movie.id;
      poster.id = s3;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  });

// documentrie 

  fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headr = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Documentaries Movies";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {

        // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      let s3 = movie.id;
      poster.id = s3;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  });



  // comedy movie 

  fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headr = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Comedy Movies";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {

        // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      let s3 = movie.id;
      poster.id = s3;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  });

  
  fetch(requests. fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headr = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Horror Movies";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {

        // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      let s3 = movie.id;
      poster.id = s3;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  });
  
  fetch(requests. fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headr = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headr.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerHTML = "Romance Movies";
    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_poster);

    data.results.forEach((movie) => {

        // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      let s3 = movie.id;
      poster.id = s3;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);
    });
  });

  



