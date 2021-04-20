import React from "react";
import axios from "axios";
import Movie from "../components/Movie"
import"./Home.css";

//best way to use setState that not depends on that external state.
class Home extends React.Component {
  state = {
    isLoding: true,
    movies:[]
  };
  getMovies = async () => {
    const {
      data: {
        data :{movies}
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    ); //sort by rating
    
    this.setState({ movies, isLoding: false }); // short version ({movies:movies})
    

  }
  componentDidMount(){
    this.getMovies();
      }

  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {isLoding 
        ? <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> 
        : movies.map(movie => (
          <div className="movies">
            <Movie 
                key ={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
               />
          </div>
              
            )
          )
        }      
      </section>
    );
  }
}

export default Home;
