import MovieDetails from './movieDetails.js';
import {hide,show, showAll ,hideAll, apiKey} from './utilities.js';

const searchElement = document.getElementById('movieSearch');
const libraryElement = document.getElementById('movieLibrary');
const brandElement = document.getElementById('movieBrand');
const movieHomeSearchBtn = document.getElementById('movieHomeSearchBtn');
const homeSearchElement = document.getElementById('homeSearch');
const resultMovieElement = document.getElementById('resultMovie');
const resultContainerElement = document.getElementById('resultContainer');
const movieCardElement = document.getElementById('movieCard');
const detailShowAll = document.querySelectorAll('.detailShow');
const movieBrandElement = document.getElementById('movieBrand');
const movieInputElement = document.getElementById('movieInput');

export default class SearchResults{
    constructor(){
        this.movieHomeSearchBtn = movieHomeSearchBtn;
        this.movieInput = '';
        this.resultMovieElement = resultMovieElement; 
        this.homeSearchElement = homeSearchElement;
        this.resultContainerElement = resultContainerElement;
        //this.movieCardElement = movieCardElement;
        this.detailShowAll = detailShowAll;
        this.movieBrandElement = movieBrandElement;
        this.movieInputElement = movieInputElement;
        this.movieDetails = new MovieDetails();
    }

    searchMovieEvent(){
        this.movieHomeSearchBtn.onclick = e => {
            this.movieInput = document.getElementById('movieInput').value;
            console.log(this.movieInput);
            if(this.movieInput !== ""){
                hide(this.homeSearchElement);
                showAll(this.detailShowAll);
                this.moviesSetup(this.movieInput);
                this.resultMovieElement.innerText = 'Results for "'+this.movieInput+'"';

            }else{
                this.movieInputElement.focus();
                this.movieInputElement.style.border = "2px solid red";
            }
        } 
    }

    brandHomePageEvent(){
        this.movieBrandElement.onclick = e =>{
            location.reload();
        }
    }

    

    async moviesSetup(movieName){
        let moviesList = await this.fetchAllMovie(movieName);
        console.log(moviesList);
        this.displayAllMovies(moviesList);
        
    }

    async fetchAllMovie(movieName){
        return fetch('https://www.omdbapi.com/?s='+movieName+'&apikey='+apiKey)
            .then(res => res.json())
            .then(data => data)
            .catch(error => console.log(error));
    }

    async displayAllMovies(moviesList){
        if(moviesList.Response == 'True'){
            let searchResults = moviesList.Search;
            searchResults.forEach(async element => {
                console.log(element.imdbID);
                this.movieDetails.createMovieBox(element.imdbID);
            });

        }else{
            console.log(moviesList.Error);
        }
    }
}