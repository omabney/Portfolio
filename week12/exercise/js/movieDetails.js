import { apiKey, noImage, setAttributes } from "./utilities.js";


const resultContainerElement = document.getElementById('resultContainer');

export default class MovieDetails{
    constructor(imdbId){
        this.imdbId = imdbId;
        this.movieBox = '';
        this.resultContainerElement = resultContainerElement;
    }

    async createMovieBox(){
        let movieData = await this.fetchMovieDetails();
        console.log("Movie :"+movieData.Poster);
        //let box1 = '<div class="card" id = "movieCard"><div class="movie-poster-box"><img src="'+movieData.Poster+'" alt="Movie poster" class = "movie-poster" onerror = "this.src='+noImage+' "></div><div class="movie-description"><a><p class = "movie-title">'+movieData.Title+'</p></a><p class="movie-rating"><span class="topic">IMDB rating:</span><i class="fas fa-star"></i><span class="rating">'+movieData.imdbRating+'</span></p><p class="movie-plot">'+movieData.Plot+' ...</p><p><span class="topic">Type:</span>&nbsp;'+movieData.Type+'</p><p><span class="topic">Genre: </span>&nbsp;'+movieData.Genre+'</p><p class = "view"><button class = "view-btn"> View more</button></p></div></div>';
        
        let box = this.createElem('div', {"class":"card", "id":"movieCard"}, this.resultContainerElement);

        let posterBox = this.createElem('div', {"class":"movie-poster-box"}, box);

        this.createElem('img',{"src":movieData.Poster, "alt":"Movie poster", "class":"movie-poster" , "onerror":"this.src="+noImage}, posterBox);
        
        let movieDesc = this.createElem('div',{"class":"movie-description"}, box);

        let a = document.createElement('a');
        movieDesc.appendChild(a);
        let movieTitle = this.createElem('p', {"class":"movie-title"}, a);
        this.assignTextValue(movieData.Title, movieTitle);

        let movieRating = this.createElem('p', {"class":"movie-rating"}, movieDesc);
        this.assignTextValue("IMDB rating:", this.createElem('span', {"class":"topic"}, movieRating));
        this.createElem('i', {"class":"fas fa-star"}, movieRating);
        this.assignTextValue(movieData.imdbRating, this.createElem('span', {"class":"rating"}, movieRating));

        let plot = movieData.Plot.substring(0,70)+"...";
        this.assignTextValue(plot, this.createElem('p', {"class":"movie-plot"}, movieDesc));

        let p = document.createElement('p');
        movieDesc.appendChild(p);
        this.assignTextValue("Type: ", this.createElem('span', {"class":"topic"}, p));
        this.assignTextValue(movieData.Type,p);

        let p1 = document.createElement('p');
        movieDesc.appendChild(p1);
        this.assignTextValue("Genre: ", this.createElem('span', {"class":"topic"}, p1));
        this.assignTextValue(movieData.Genre,p1);

        let btn = this.createElem('p', {"class":"view"}, movieDesc);
        this.assignTextValue("View more", this.createElem('button', {"class":"view-btn"}, btn));
        console.log(box);
    }

    createElem(elem, attr,parent){
        let element = document.createElement(elem);
        setAttributes(element, attr);
        parent.appendChild(element);
        return element;

    }

    assignTextValue(text,parrent){
        let txt = document.createTextNode(text);
        parrent.appendChild(txt);
    }

    
    async fetchMovieDetails(){
        let url = 'https://www.omdbapi.com/?i='+this.imdbId+'&apikey='+apiKey;
        console.log(url)
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(error => console.log(error));
    }
    
}