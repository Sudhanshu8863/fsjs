import axios from "axios";
import { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState({});
  const [showError, setshowError] = useState("Error");

  const checkInputText = (text) => {
    const temp = text;
    if (temp != "") {
      return true;
    }
  };

  const checkAndFetch = () => {
    setMovieName(movieName.trim());
    if (checkInputText(movieName)) fetchDetails();
  };

  const fetchDetails = async () => {
    const data = await axios(
      `http://www.omdbapi.com/?t=${movieName}&apikey=11f9366c&plot=full`
    ).then((result) => result.data);
    setMovieData(data);

    if (data.Error) setshowError(data.Error);
    else setshowError("");

    setMovieName("");
  };

  return (
    <>
      <div className="flex m-3 rounded-md overflow-hidden max-w-4xl mx-auto">
        <input
          className="w-full py-2 text-center text-black outline-none"
          type="text"
          placeholder="Enter movie Name here"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button
          className="bg-gray-600 px-[2%] md:px-10"
          onClick={checkAndFetch}
        >
          click
        </button>
      </div>

      {showError.length < 1 && (
        <>
          <div className="max-w-4xl mx-auto flex items-center justify-between flex-col md:flex-row">
            <div className="rounded-md overflow-hidden flex flex-col mx-5">
              <img src={movieData.Poster} alt="Movie-Logo" />
              <p className="text-center font-bold text-xl">{movieData.Title}</p>
            </div>
            <table className="border-separate border-spacing-x-5">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="font-medium">Actors:</td>
                  <td>{movieData.Actors}</td>
                </tr>
                <tr>
                  <td className="font-medium">Awards:</td>
                  <td>{movieData.Awards}</td>
                </tr>
                <tr>
                  <td className="font-medium">BoxOffice:</td>
                  <td>{movieData.BoxOffice}</td>
                </tr>
                <tr>
                  <td className="font-medium">Genre:</td>
                  <td>{movieData.Genre}</td>
                </tr>
                <tr>
                  <td className="font-medium">Language:</td>
                  <td>{movieData.Language}</td>
                </tr>
                <tr>
                  <td className="font-medium">Released:</td>
                  <td>{movieData.Released}</td>
                </tr>
                <tr>
                  <td className="font-medium">Runtime:</td>
                  <td>{movieData.Runtime}</td>
                </tr>
                <tr>
                  <td className="font-medium">Type:</td>
                  <td>{movieData.Type}</td>
                </tr>
                <tr>
                  <td className="font-medium">Writer:</td>
                  <td>{movieData.Writer}</td>
                </tr>
                <tr>
                  <td className="font-medium">Year:</td>
                  <td>{movieData.Year}</td>
                </tr>
                <tr>
                  <td className="font-medium">imdbRating:</td>
                  <td>{movieData.imdbRating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="max-w-4xl my-5 text-justify px-5 md:mx-auto">
            {movieData.Plot}
          </p>
        </>
      )}
    </>
  );
}

export default App;
