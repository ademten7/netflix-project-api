const cors = require("cors");
require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT;
const {
  movies,
  actionMovies,
  newMovies,
  getMovie,
} = require("./controllers/movies");

const {
  tvShows,
  actionTvShows,
  newTvShows,
  getTvShow,
  getTvShowEpisode,
  getTvShowSeason,
} = require("./controllers/tvShows");
app.use(cors());
//1) all movies route

app.get("/movies", movies);

//2) new movies route
app.get("/new-movies", newMovies);

//3) action movies route
app.get("/action-movies", actionMovies);

//4) find movie by id
//params ==> /:id
//queries ==>?id=1234

app.get("/movie/:id", getMovie);

/*********************************Tv Shows ******************************/
//1) all tv shows
app.get("/tv-shows", tvShows);

//2) action tv shows
app.get("/action-tv-shows", actionTvShows);

//3 find tv shows
app.get("/new-tv-shows", newTvShows);

//4) find tv show by ID
/*
req.params={
  id: value==> url param
}
*/
app.get("/tv-show/:id", getTvShow);

//5) find episode by ID ==> /:tvShowId//:seasonId/:episodeId
/*
req.params={
  tvShowId:xxx,
  seasonId:xxx,
  episodeId:xxx,


}
*/

app.get("/tv-show-episode/:tvShowId/:seasonId/:episodeId", getTvShowEpisode);
app.get("/tv-show-season/:tvShowId/:seasonId/", getTvShowSeason);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
