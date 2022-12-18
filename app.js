// menu items 
let homeTab = document.querySelector(".home-option");
let moviesTag = document.getElementById("movies-tag")
let seriesTag = document.getElementById("series-tag")
let showsTag = document.getElementById("tv-shows")
let comingSoon = document.querySelector(".coming-soon-option")
let popular = document.querySelector(".recent-option")
let topRated = document.querySelector(".top-rated-option")
let help = document.querySelector(".help-option")
let grid = document.getElementById("grid")
let paging = document.querySelector(".paging")





contentGrid.appendChild(homePage());
topRatedContinut(1);    
trendingMovies(); 
getUpcomingMovies(1);

let trendingMoviesLabel = document.querySelector(".show-trending-movies")
trendingMoviesLabel.addEventListener("click",(e)=>{

let obj = e.target
console.log(obj);

contentGrid.innerHTML="";    
contentGrid.classList.add("content-grid-customisation");
getTrendingMovies();           
})  

let trendingMoviesLabel2 = document.getElementById("show-trending-movies")
trendingMoviesLabel2.addEventListener("click",(e)=>{

let obj = e.target
// console.log(obj);
contentGrid.innerHTML="";    
contentGrid.classList.add("content-grid-customisation");
getTrendingMovies();           
})

let showUpcomingMovies = document.querySelector(".show-upcoming-movies")
showUpcomingMovies.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getUpcomingMoviesDiv(1);
})
let showUpcomingMovies2 = document.getElementById("show-upcoming-movies")
showUpcomingMovies2.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getUpcomingMoviesDiv(1);
})

let showTopRatedMovies = document.querySelector(".show-top-rated-movies")
showTopRatedMovies.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getTopRatedMovies(1);
})
let showTopRatedMovies2 = document.getElementById("show-top-rated-movies")
showTopRatedMovies2.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getTopRatedMovies(1);
})





homeTab.addEventListener("click",(e)=>{
    // console.log(homeTab)

    let obj = e.target;
    
    
    if (obj.classList.contains("home-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    

    contentGrid.innerHTML="";
    contentGrid.appendChild(homePage());

    contentGrid.classList.remove("content-grid-customisation")
    
    

    topRatedContinut(1);
    trendingMovies();
    getUpcomingMovies(1);


    let trendingMoviesLabel = document.querySelector(".show-trending-movies")
    trendingMoviesLabel.addEventListener("click",(e)=>{
    
    let obj = e.target
    console.log(obj);
    
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getTrendingMovies();           
})  

    let trendingMoviesLabel2 = document.getElementById("show-trending-movies")
    trendingMoviesLabel2.addEventListener("click",(e)=>{
    
    let obj = e.target
    // console.log(obj);
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getTrendingMovies();           
})


let showUpcomingMovies = document.querySelector(".show-upcoming-movies")
showUpcomingMovies.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getUpcomingMoviesDiv(1);
})
let showUpcomingMovies2 = document.getElementById("show-upcoming-movies")
showUpcomingMovies2.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getUpcomingMoviesDiv(1);
})


let showTopRatedMovies = document.querySelector(".show-top-rated-movies")
showTopRatedMovies.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getTopRatedMovies(1);
})
let showTopRatedMovies2 = document.getElementById("show-top-rated-movies")
showTopRatedMovies2.addEventListener("click",(e)=>{
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getTopRatedMovies(1);
})


})




moviesTag.addEventListener("click",(e)=>{

    let obj = e.target;
    

    

    if(obj.id="movies-tag"){
        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")

        obj.classList.add("mark2");
    }

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation")
    getMoviesTag(1);

    paging.appendChild(pageLabel())
    paging.appendChild(createPagingDiv())
    
    paging.addEventListener("click",(x)=>{
        let obj2 = x.target;
        contentGrid.innerHTML="";
        getMoviesTag(obj2.id);
    })

    

    


})


seriesTag.addEventListener("click",(e)=>{

    let obj = e.target

    if (obj.id="series-tag"){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark2")
    }

    contentGrid.innerHTML=""
    contentGrid.classList.add("content-grid-customisation");

    getSeriesTag(2);
})


showsTag.addEventListener("click",(e)=>{
    let obj = e.target
    if (obj.id="shows-tag"){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark2")
    }

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getShowTag(2);

})



comingSoon.addEventListener("click",(e)=>{

    let obj = e.target;
    if (obj.classList.contains("coming-soon-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }
    // console.log(obj)
    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getComingSoonMovies(1);

})


popular.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj)

    if (obj.classList.contains("recent-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getPopularMovies();

})


topRated.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj)

    if (obj.classList.contains("top-rated-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getTopRatedMovies(1);

})

help.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj)

    if (obj.classList.contains("help-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    contentGrid.innerHTML="";

})

grid.addEventListener("click",(e)=>{

    let mainContentGrid = document.querySelector(".main-version")

    let obj = e.target;
    console.log(obj);
    // mainContentGrid.classList.add("grid-1-model")

})


