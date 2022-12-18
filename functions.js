// function to create home page 

let contentGrid = document.querySelector(".content-grid")
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
    pTrendingSeeAll.textContent= "See all";


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
    pUpcomingSeeAll.textContent= "See all";
    pUpcomingSeeAll.id="show-upcoming-movies"
    

    let top = document.createElement("div");
    mainDiv.appendChild(top)
    top.classList.add("top-rated");

    let topLabel = document.createElement("div");
    top.appendChild(topLabel)
    topLabel.classList.add("top-rated-label");

    let topContent = document.createElement("div");
    top.appendChild(topContent)
    topContent.classList.add("top-rated-content")

    let pTop = document.createElement("p");
    topLabel.appendChild(pTop);
    pTop.textContent="Top rated movies";
    pTop.classList.add("show-top-rated-movies")
    let pTopSeeAll = document.createElement("p");
    topLabel.appendChild(pTopSeeAll);
    pTopSeeAll.textContent= "See all";
    pTopSeeAll.id="show-top-rated-movies";



    return mainDiv;
}
// contentGrid.appendChild(homePage());




// let imgSrc = "https://www.themoviedb.org/t/p/w440_and_h660_face/"



function createTopRatedDiv (obj) {
    let filterDiv = document.createElement("div");
    
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

async function topRatedContinut () {
    try{
        let response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=1")
        response = await response.json()

        // console.log(response.results)
        // topRatedContent.appendChild(createTopRatedDiv(response.results[0]))
        // console.log(response.results[0])
        
        for(i in response.results) {
            let topRatedContent = document.querySelector(".top-rated-content")
            topRatedContent.appendChild(createTopRatedDiv(response.results[i]));
        }
        
    }   catch(err) {
        console.log(err)
    }
}





function createTrendingContentDiv (obj) {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("trending-movies-div")
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

    try {
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response = await response.json();

        // console.log(response.results)

        for(i in response.results) {
            let trendingContent = document.querySelector(".trending-content")
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

    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        
        for(i in response.results) {
            let upcomingMovies = document.querySelector(".upcoming-movies-content")
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}
async function getMoviesTag(param) {

    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        for(i in response.results) {
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getSeriesTag(param){
    try {
        let response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        for(i in response.results){
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getShowTag(param){
    try {
        let response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        for(i in response.results){
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getComingSoonMovies (param) {

    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        
        for(i in response.results) {
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getPopularMovies() {

    try {
        
        let response = await fetch ("https://api.themoviedb.org/3/trending/all/day?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response= await response.json();
        
        for (i in response.results) {
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getTopRatedMovies(param) {

    try {
        
        let response = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response= await response.json();
        
        for (i in response.results) {
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getTrendingMovies(){
    try {
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response = await response.json();

        // console.log(response.results)

        for(i in response.results) {
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

    let poster = document.createElement("img");
    poster.src = "https://image.tmdb.org/t/p/w500" + obj.poster_path;
    mainDiv.appendChild(poster)
    return mainDiv;
}

async function getUpcomingMoviesDiv (param) {

    try{
        let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=${param}`)
        response = await response.json();
        // console.log(response.results)
        
        for(i in response.results) {
            
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

    

    // let p1 = document.createElement("p");
    // p1.textContent= "2";
    // p1.id="2";


    // let p2 = document.createElement("p");
    // p2.textContent= "3";
    // p2.id="3";
    
    // let p3 = document.createElement("p");
    // p3.textContent= "4";
    // p3.id="4";

    // let p4 = document.createElement("p");
    // p4.textContent= "5";
    // p4.id="5";

    // pagingDiv.appendChild(p);
    // pagingDiv.appendChild(p1);
    // pagingDiv.appendChild(p2);
    // pagingDiv.appendChild(p3);
    // pagingDiv.appendChild(p4);



    return pagingDiv;
}

function pageLabel(){
    let label = document.createElement("label");
    label.textContent="Swipe left or right";
    label.id="page-label"
    return label;
}


