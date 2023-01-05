// function to create home page 
let filters = document.querySelector(".filters");
let contentGrid = document.querySelector(".content-grid")
let loader = `<div class="loader"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`
function homePage(){
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("main-version");


    let trending = document.createElement("div");
    mainDiv.appendChild(trending)
    trending.classList.add("trending-movies")
    
    let trendingLabel = document.createElement("div");
    trending.appendChild(trendingLabel)
    trendingLabel.classList.add("trending-label");

    let trendingContent = document.createElement("div");
    trending.appendChild(trendingContent)
    trendingContent.classList.add("trending-content")

    let pTrending = document.createElement("p");
    trendingLabel.appendChild(pTrending);
    pTrending.classList.add("show-trending-movies")
    pTrending.textContent="Trending movies";
    let pTrendingSeeAll = document.createElement("p");
    trendingLabel.appendChild(pTrendingSeeAll);
    pTrendingSeeAll.id="show-trending-movies"
    pTrendingSeeAll.textContent= "See top 20";


    let upcoming = document.createElement("div");
    mainDiv.appendChild(upcoming)
    upcoming.classList.add("upcoming-movies")

    let upcomingLabel = document.createElement("div");
    upcoming.appendChild(upcomingLabel)
    upcomingLabel.classList.add("upcoming-movies-label");

    let upcomingContent = document.createElement("div");
    upcoming.appendChild(upcomingContent)
    upcomingContent.classList.add("upcoming-movies-content")

    let pUpcoming = document.createElement("p");
    upcomingLabel.appendChild(pUpcoming);
    pUpcoming.textContent="Upcoming movies";
    pUpcoming.classList.add("show-upcoming-movies")
    let pUpcomingSeeAll = document.createElement("p");
    upcomingLabel.appendChild(pUpcomingSeeAll);
    // pUpcomingSeeAll.classList.add("show-trending-movies")
    pUpcomingSeeAll.textContent= "See top 20";
    pUpcomingSeeAll.id="show-upcoming-movies"
    

    // let top = document.createElement("div");
    // mainDiv.appendChild(top)
    // top.classList.add("top-rated");

    // let topLabel = document.createElement("div");
    // top.appendChild(topLabel)
    // topLabel.classList.add("top-rated-label");

    // let topContent = document.createElement("div");
    // top.appendChild(topContent)
    // topContent.classList.add("top-rated-content")

    // let pTop = document.createElement("p");
    // topLabel.appendChild(pTop);
    // pTop.textContent="Top rated movies";
    // pTop.classList.add("show-top-rated-movies")
    // let pTopSeeAll = document.createElement("p");
    // topLabel.appendChild(pTopSeeAll);
    // pTopSeeAll.textContent= "See all";
    // pTopSeeAll.id="show-top-rated-movies";



    return mainDiv;
}
// contentGrid.appendChild(homePage());




// let imgSrc = "https://www.themoviedb.org/t/p/w440_and_h660_face/"



function createTopRatedDiv (obj) {
    let filterDiv = document.createElement("div");
    filterDiv.id=obj.id;
    
    let img = document.createElement("img");
    img.src="https://www.themoviedb.org/t/p/w440_and_h660_face" + obj.poster_path;
    filterDiv.appendChild(img);

    let div = document.createElement("div")
    filterDiv.appendChild(div)

    let title = document.createElement("p");
    title.textContent = obj.title;
    div.appendChild(title);

    let rate = document.createElement("p")
    rate.textContent = "Rating : "+ obj.vote_average;
    div.appendChild(rate)

    
    return filterDiv;
}

// async function topRatedContinut () {    
//     topRatedContent.innerHTML=loader;
//     try{
//         let response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=1")
//         response = await response.json()

//         // console.log(response.results)
//         // topRatedContent.appendChild(createTopRatedDiv(response.results[0]))
//         // console.log(response.results[0])
//         topRatedContent.innerHTML="";
//         for(i in response.results) {
            
//             topRatedContent.appendChild(createTopRatedDiv(response.results[i]));
//         }
        
//     }   catch(err) {
//         console.log(err)
//     }
// }





function createTrendingContentDiv (obj) {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("trending-movies-div")
    mainDiv.id=obj.id
    let img = document.createElement("img")
    mainDiv.appendChild(img);
    img.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    
    // let secondDiv = document.createElement("div");
    
    
    let p = document.createElement("p");
    p.textContent = obj.title;
    p.id = "title"
    mainDiv.appendChild(p);
    


    return mainDiv;
}
async function trendingMovies () {
    let trendingContent = document.querySelector(".trending-content")
    trendingContent.innerHTML=loader;
    try {
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response = await response.json();

        // console.log(response.results)
trendingContent.innerHTML="";
        for(i in response.results) {
            
            trendingContent.appendChild(createTrendingContentDiv(response.results[i]))
        }
        
    }
    catch(err) {
        console.log(err)
    }

}






function createUpcomingContentDiv (obj) {

    let mainDiv = document.createElement("div");
    // mainDiv.classList.add("trending-movies-div")
    let img = document.createElement("img")
    mainDiv.id=obj.id
    mainDiv.appendChild(img);
    img.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    
    let secondDiv = document.createElement("div");
    mainDiv.appendChild(secondDiv);
    
    let p = document.createElement("p");
    p.textContent = obj.title;
    p.id = "title"

    let p1 = document.createElement("p");
    p1.textContent = obj.release_date;

    secondDiv.appendChild(p)
    // secondDiv.appendChild(p1)


    return mainDiv;
}
async function getUpcomingMovies (param) {
    let upcomingMovies = document.querySelector(".upcoming-movies-content");
    upcomingMovies.innerHTML=loader;
    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        upcomingMovies.innerHTML=""
        for(i in response.results) {
            
            upcomingMovies.appendChild(createUpcomingContentDiv(response.results[i]))
        }

    }
    catch(err) {
        console.log(err)
    }

}




// click on MOVIES

function createMoviesTagDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("movies-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}
async function getMoviesTag(param) {
    contentGrid.innerHTML=loader;

    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            contentGrid.appendChild(createMoviesTagDiv(response.results[i]))
        }
    }
    catch(err){
        console.log(err);
    }

}


// click on  Series

function createSeriesTagDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("series-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getSeriesTag(param){
    contentGrid.innerHTML=loader;
    try {
        let response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            contentGrid.appendChild(createSeriesTagDiv(response.results[i]));
        }
    } catch (error) {
        console.log(error);
    }
}


// click on TV shows 

function createShowTagDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("show-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

// https://api.themoviedb.org/3/tv/popular?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}

async function getShowTag(param){
    contentGrid.innerHTML=loader;
    try {
        let response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            contentGrid.appendChild(createShowTagDiv(response.results[i]));
            // console.log(response.results[i]);
        }
    } catch (error) {
        console.log(error);
    }
}



// click on coming soon

function createComingTagDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("upcoming-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getComingSoonMovies (param) {
    contentGrid.innerHTML=loader;

    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        contentGrid.innerHTML="";
        for(i=0;i<10;i++) {
            contentGrid.appendChild(createComingTagDiv(response.results[i]));
        }

    }
    catch(err) {
        console.log(err)
    }

}



// click on popular 

function createPopularTagDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("popular-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getPopularMovies() {
    contentGrid.innerHTML=loader;

    try {
        
        let response = await fetch ("https://api.themoviedb.org/3/trending/all/day?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response= await response.json();
        contentGrid.innerHTML="";
        for (i=0;i<10;i++) {
            contentGrid.appendChild(createPopularTagDiv(response.results[i]));
        }

    } catch (error) {
        console.log(error);
    }


}


// click on top rated

function createTopRatedTagDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("top-rated-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getTopRatedMovies(param) {
    contentGrid.innerHTML=loader;

    try {
        
        let response = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response= await response.json();
        contentGrid.innerHTML="";
        for (i=0;i<10;i++){
            contentGrid.appendChild(createTopRatedTagDiv(response.results[i]));
        }

    } catch (error) {
        console.log(error);
    }


}



// click on trending movies 

// function trendingMoviesContent
function createTrendingMoviesDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("trending-movies-tag-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getTrendingMovies(){
    contentGrid.innerHTML=loader;
    try {
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response = await response.json();

        // console.log(response.results)
        contentGrid.innerHTML="";
        for(i=0;i<10;i++) {
            contentGrid.appendChild(createTrendingMoviesDiv(response.results[i]));
        }
        
    }
    catch(err) {
        console.log(err)
    }
}




// click on upcoming movies 

function createUpcomingMoviesDiv(obj) {
    let mainDiv=document.createElement("div");
    mainDiv.classList.add("upcoming-movies-tag-div");
    mainDiv.id=obj.id;
    console.log(obj.id);

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getUpcomingMoviesDiv (param) {
    contentGrid.innerHTML=loader;

    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        contentGrid.innerHTML="";
        for(i=0;i<10;i++) {
            // console.log(response.results[i])
            contentGrid.appendChild(createUpcomingMoviesDiv(response.results[i]))
        }

    }
    catch(err) {
        console.log(err)
    }

}




// function to return a paging div 

function createPagingDiv() {
    let pagingDiv = document.createElement("div");
    

    for(i=1;i<100;i++){

    let p = document.createElement("p");
    p.textContent= `${i}`;
    p.id=`${i}`;
        pagingDiv.appendChild(p);
    }
    return pagingDiv;
}

function pageLabel(){
    let label = document.createElement("label");
    label.textContent="<< Swipe >>";
    label.id="page-label"
    return label;
}


// function create a modal 

function createModal(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("modal");
    mainDiv.id=obj.id

    

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)

    let secondDiv = document.createElement("div");
    mainDiv.appendChild(secondDiv);
    secondDiv.classList.add("modal-2div")

    let buttonsDiv = document.createElement("div")
    buttonsDiv.classList.add("buttons-div");
    secondDiv.appendChild(buttonsDiv)

    // let previousBtn = document.createElement("button");
    // previousBtn.textContent="Previous";
    // previousBtn.classList.add("previous-btn")
    // buttonsDiv.appendChild(previousBtn);

    let closeBtn = document.createElement("button");
    closeBtn.textContent="Close";
    closeBtn.classList.add("modal-btn")
    buttonsDiv.appendChild(closeBtn);

    // let nextBtn = document.createElement("button");
    // nextBtn.textContent="Next";
    // nextBtn.classList.add("next-btn")
    // buttonsDiv.appendChild(nextBtn);


    let title = document.createElement("p");
    title.classList.add("modal-title")
    title.textContent= obj.title;
    secondDiv.appendChild(title)

    let tagline = document.createElement("p");
    tagline.classList.add("modal-tagline")
    tagline.textContent= obj.tagline;
    secondDiv.appendChild(tagline)

    let genresDiv = document.createElement("div");
    genresDiv.classList.add("modal-genres")
    secondDiv.appendChild(genresDiv);
    genresDiv.textContent="Genre : "

    for(i in obj.genres){
        // console.log(obj.genres[i])
        let gen = document.createElement("p");
        gen.textContent = obj.genres[i].name;
        gen.style.color="rgb(152, 129, 0)"
        genresDiv.appendChild(gen);
    }

    let overview = document.createElement("p");
    overview.classList.add("modal-overview");
    overview.textContent=obj.overview;
    secondDiv.appendChild(overview)

    let thirdDiv = document.createElement("div")
    secondDiv.appendChild(thirdDiv)
    thirdDiv.classList.add("modal-3div")


    let popVote = document.createElement("div");
    popVote.classList.add("pop-vote");
    thirdDiv.appendChild(popVote);

    let popularity = document.createElement("div");
    popVote.appendChild(popularity)
    popularity.id="pop"

    let popImg = document.createElement("img");
    popularity.appendChild(popImg);
    popImg.src="./img/icons8-heart-suit-48.png"

    let popP= document.createElement("p");
    popularity.appendChild(popP)
    popP.textContent= Math.floor(obj.popularity)


    let vote = document.createElement("div");
    popVote.appendChild(vote)
    vote.id="vot"

    let votP= document.createElement("p");
    vote.appendChild(votP)
    votP.textContent="Vote : "+obj.vote_average
    
    let budRed = document.createElement("div");
    budRed.classList.add("bud-red")
    thirdDiv.appendChild(budRed);

    let budget = document.createElement("p");
    budRed.appendChild(budget);
    budget.id="budget"
    budget.textContent= "Budget : "+obj.budget + "$"

    let revenue = document.createElement("p");
    thirdDiv.appendChild(revenue);
    revenue.id="revenue"
    revenue.textContent= "Revenue : "+obj.revenue + "$"
    // homepage
    // release date 

    let prodDiv = document.createElement("div");
    prodDiv.textContent="Production companies :"
    secondDiv.appendChild(prodDiv)
    prodDiv.classList.add("prod-div")


    let prodComp = document.createElement("p");
    prodComp.classList.add("prod-comp")
    secondDiv.appendChild(prodComp)

    for(i in obj.production_companies){
        let p = document.createElement("p");
        p.textContent = obj.production_companies[i].name;
        prodComp.appendChild(p);
    }

    let countriesDiv = document.createElement("div");
    countriesDiv.classList.add("countries-div");
    countriesDiv.textContent = "Production Countries :"
    secondDiv.appendChild(countriesDiv)


    let prodCountries = document.createElement("div")
    prodCountries.classList.add("prod-countries")
    countriesDiv.appendChild(prodCountries)
    
    for(i in obj.production_countries){
        let p = document.createElement("p");
        p.textContent = obj.production_countries[i].name;
        prodCountries.appendChild(p);
    }
    
    return mainDiv;
}



// search functions 

function createSearchResultDiv(obj){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("search-result-div");
    mainDiv.id=obj.id;

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function search(param) {


    try {
        let response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&query=${param}&include_adult=false`)
        response = await response.json();
        console.log(response);
        // console.log(response.page)
        // console.log(response.results)
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            contentGrid.appendChild(createSearchResultDiv(response.results[i]));
            contentGrid.classList.add("content-grid-customisation")
        }
        
    } catch (error) {
        console.log(error)
    }

}

async function searchForPage(param,page) {
    contentGrid.innerHTML=loader;

    try {
        let response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&query=${param}&page=${page}&include_adult=false`)
        response = await response.json();
        console.log(response);
        // console.log(response.page)
        // console.log(response.results)
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            contentGrid.appendChild(createSearchResultDiv(response.results[i]));
            contentGrid.classList.add("content-grid-customisation")
        }



    } catch (error) {
        console.log(error)
    }

}




// Filters / Genres

// create genre div 
function createGenreDiv (obj){
    let mainDiv = document.createElement("li");
    mainDiv.classList.add("filter-pattern");
    mainDiv.textContent= obj.name;
    mainDiv.id=obj.id
    return mainDiv;
}

// filter button
function createFilterBtn () {
    let btn = document.createElement("button")
    btn.classList.add("apply");

    btn.textContent = "Apply filters"

    return btn;
}

// async search for genres
function createFilteredDiv(obj) {
    let mainDiv=document.createElement("div");
    mainDiv.classList.add("filter-resulted");
    mainDiv.id=obj.id;
    // console.log(obj.id);

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}


async function filterForGenre(param){
    contentGrid.innerHTML=loader;
    try {
        let response = await fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${param}`)
        response = await response.json();
        // console.log(response.results);
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            // console.log(response.results[i]);
            contentGrid.appendChild(createFilteredDiv(response.results[i]));
            contentGrid.classList.add("content-grid-customisation")
        }
    } catch (error) {
        console.log(error)
    }


}


async function filterForPage(param,page) {


    try {
        let response = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${param}`)
        response = await response.json();
        
        contentGrid.innerHTML="";
        for(i=0;i<10;i++){
            contentGrid.appendChild(createFilteredDiv(response.results[i]));
            contentGrid.classList.add("content-grid-customisation")
        }



    } catch (error) {
        console.log(error)
    }

}


// get genres 


async function getGenresList(){
    filters.innerHTML="";
    try {
        let response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
        response = await response.json();
        // console.log(response.genres)

        for (i=0;i<10;i++){
            
            
            filters.appendChild(createGenreDiv(response.genres[i]))
        }
    } catch (error) {
        console.log(error)
    }
    filters.appendChild(createFilterBtn());
}




// swipe arrows 

function createArrows () {
    let mainDiv=document.createElement("div")
    mainDiv.classList.add("arrows-div")

    let left = document.createElement("p");
    left.textContent="<<"
    mainDiv.appendChild(left)


    let swipe = document.createElement("p");
    swipe.textContent="Swipe"
    mainDiv.appendChild(swipe)


    let right = document.createElement("p");
    right.textContent=">>"
    mainDiv.appendChild(right)


    return mainDiv
}