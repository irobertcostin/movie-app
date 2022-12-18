
topRatedContinut();
trendingMovies();
getUpcomingMovies();


// menu items 
let homeTab = document.querySelector(".home-option");
let moviesTag = document.getElementById("movies-tag")
let seriesTag = document.getElementById("series-tag")
let showsTag = document.getElementById("tv-shows")



homeTab.addEventListener("click",()=>{
    // console.log(homeTab)
    contentGrid.innerHTML="";
    console.log(contentGrid)
    contentGrid.appendChild(homePage());
    console.log(topRatedContinut())

    try {
        topRatedContinut();
        // trendingMovies();
        // getUpcomingMovies();
    } catch (error) {
        console.log(error);
    }

    

})





moviesTag.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj)
    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation")
    getMoviesTag(1);


})


seriesTag.addEventListener("click",()=>{
    contentGrid.innerHTML=""
    contentGrid.classList.add("content-grid-customisation");

    getSeriesTag(2);
})


showsTag.addEventListener("click",()=>{

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getShowTag(2);

})

