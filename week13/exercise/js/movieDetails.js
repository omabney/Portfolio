import { apiKey, noImage, setAttributes, showDetail, hideDetail } from "./utilities.js";


const resultContainerElement = document.getElementById('resultContainer');



export default class MovieDetails{
    constructor(){
        this.movieBox = '';
        this.resultContainerElement = resultContainerElement;
    }

    async createMovieBox(imdbId){
        let movieData = await this.fetchMovieDetails(imdbId);
        console.log("Movie :"+movieData.Poster);
        //let box1 = '<div class="card" id = "movieCard"><div class="movie-poster-box"><img src="'+movieData.Poster+'" alt="Movie poster" class = "movie-poster" onerror = "this.src='+noImage+' "></div><div class="movie-description"><a><p class = "movie-title">'+movieData.Title+'</p></a><p class="movie-rating"><span class="topic">IMDB rating:</span><i class="fas fa-star"></i><span class="rating">'+movieData.imdbRating+'</span></p><p class="movie-plot">'+movieData.Plot+' ...</p><p><span class="topic">Type:</span>&nbsp;'+movieData.Type+'</p><p><span class="topic">Genre: </span>&nbsp;'+movieData.Genre+'</p><p class = "view"><button class = "view-btn"> View more</button></p></div></div>';
        
        let box = this.createElem('div', {"class":"card", "id":"movieCard"}, this.resultContainerElement);

        let detailData = this.createElem('div', {"class":"hide detailData" , "id":"detailData"}, box);
        this.assignTextValue(JSON.stringify(movieData), detailData);
        let posterBox = this.createElem('div', {"class":"movie-poster-box"}, box);

        let fav = this.createElem('p', {"class":"fav-icon"}, box);
        this.createElem('i', {"class":"fas fa-bookmark"}, fav);
        this.createElem('img', {"src":movieData.Poster, "alt":"Movie poster", "class":"movie-poster" , "onerror":"this.src="+noImage}, posterBox);
        
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
        this.assignTextValue("View more", this.createElem('button', {"class":"view-btn" , "id":"view-more"}, btn));
        console.log(box);
        
        this.viewMoreEvent();
       
    }

    viewMoreEvent(){
        const allMovieData = document.querySelectorAll('.detailData');
        const movieBtnAll = document.querySelectorAll('.view-btn');
        const detailCardElement = document.getElementById('detail-card');

        for(let i=0; i<movieBtnAll.length;i++){
            movieBtnAll[i].onclick = e => {
                console.log("Clicked view More"+allMovieData[i].textContent);
                this.createDetailCard(JSON.parse(allMovieData[i].textContent), detailCardElement);
            }
        }

        detailCardElement.addEventListener('click', (e)=>{
            console.log("Inside click Event"+e.target.classList);
            if(e.target.classList.contains('fa-times-circle') || e.target.classList.contains('close-icon')){
                hideDetail(detailCardElement);
            }
        });
    }

    createDetailCard(movieData, detailCardElement){
        showDetail(detailCardElement);
        console.log(movieData.Poster);
        document.getElementById('cover-poster').src = movieData.Poster;
        document.getElementById('main-poster').src = movieData.Poster;
        document.getElementById('details-title').textContent = movieData.Title;
        document.getElementById('rating-value').textContent = movieData.imdbRating;
        document.getElementById('rated-value').textContent = movieData.Rated;
        document.getElementById('type-value').textContent = movieData.Type;
        document.getElementById('genre-value').textContent = movieData.Genre;
        document.getElementById('lang-value').textContent = movieData.Language;
        document.getElementById('plot-value').textContent = movieData.Plot;
        document.getElementById('release-value').textContent = movieData.Released;
        document.getElementById('director-value').textContent = movieData.Director;
        document.getElementById('cast-value').textContent = movieData.Actors;

        //let card = this.createElem('div', {"class":"movie-card"}, this.detailCardElement);

        // let detailData = this.createElem('div', {"class":"hide detailData" , "id":"detailData"}, box);
        // this.assignTextValue(JSON.stringify(movieData), detailData);
        // let posterBox = this.createElem('div', {"class":"movie-poster-box"}, box);

        // this.createElem('img',{"src":movieData.Poster, "alt":"Movie poster", "class":"movie-poster" , "onerror":"this.src="+noImage}, posterBox);
        
        // let movieDesc = this.createElem('div',{"class":"movie-description"}, box);

        // let a = document.createElement('a');
        // movieDesc.appendChild(a);
        // let movieTitle = this.createElem('p', {"class":"movie-title"}, a);
        // this.assignTextValue(movieData.Title, movieTitle);

        // let movieRating = this.createElem('p', {"class":"movie-rating"}, movieDesc);
        // this.assignTextValue("IMDB rating:", this.createElem('span', {"class":"topic"}, movieRating));
        // this.createElem('i', {"class":"fas fa-star"}, movieRating);
        // this.assignTextValue(movieData.imdbRating, this.createElem('span', {"class":"rating"}, movieRating));

        // let plot = movieData.Plot.substring(0,70)+"...";
        // this.assignTextValue(plot, this.createElem('p', {"class":"movie-plot"}, movieDesc));

        // let p = document.createElement('p');
        // movieDesc.appendChild(p);
        // this.assignTextValue("Type: ", this.createElem('span', {"class":"topic"}, p));
        // this.assignTextValue(movieData.Type,p);

        // let p1 = document.createElement('p');
        // movieDesc.appendChild(p1);
        // this.assignTextValue("Genre: ", this.createElem('span', {"class":"topic"}, p1));
        // this.assignTextValue(movieData.Genre,p1);

        // let btn = this.createElem('p', {"class":"view"}, movieDesc);
        // this.assignTextValue("View more", this.createElem('button', {"class":"view-btn" , "id":"view-more"}, btn));
        // console.log(box);
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
    
    async fetchMovieDetails(imdbId){
        let url = 'https://www.omdbapi.com/?i='+imdbId+'&apikey='+apiKey;
        console.log(url)
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(error => console.log(error));
    }
    
}