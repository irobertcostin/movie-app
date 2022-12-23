// menu items 
let homeTab = document.querySelector(".home-option");
let moviesTag = document.getElementById("movies-tag")
let seriesTag = document.getElementById("series-tag")
let showsTag = document.getElementById("tv-shows")
let comingSoon = document.querySelector(".coming-soon-option")
let popular = document.querySelector(".recent-option")
let topRated = document.querySelector(".top-rated-option")
// let help = document.querySelector(".help-option")
let grid = document.getElementById("grid")
let paging = document.querySelector(".paging")
let mainVersion = document.querySelector(".main-version");
let searchInput = document.querySelector(".search-input")
let filterExpand = document.querySelector(".filter-options").firstElementChild;
let apply = document.querySelector(".apply");


contentGrid.appendChild(homePage());
// topRatedContinut(1);    
trendingMovies(); 
getUpcomingMovies(1);
getGenresList();
filters.id="hide";

let trendingMoviesLabel = document.querySelector(".show-trending-movies")
trendingMoviesLabel.addEventListener("click",(e)=>{
    filters.id="hide";
let obj = e.target
console.log(obj);

contentGrid.innerHTML="";    
contentGrid.classList.add("content-grid-customisation");
getTrendingMovies();           
})  

let trendingMoviesLabel2 = document.getElementById("show-trending-movies")
trendingMoviesLabel2.addEventListener("click",(e)=>{
    filters.id="hide";
let obj = e.target
// console.log(obj);
contentGrid.innerHTML="";    
contentGrid.classList.add("content-grid-customisation");
getTrendingMovies();           
})

let showUpcomingMovies = document.querySelector(".show-upcoming-movies")
showUpcomingMovies.addEventListener("click",(e)=>{
    filters.id="hide";
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");

    getUpcomingMoviesDiv(1);
    
    

    
})
let showUpcomingMovies2 = document.getElementById("show-upcoming-movies")
showUpcomingMovies2.addEventListener("click",(e)=>{
    filters.id="hide";
    let obj = e.target;
    contentGrid.innerHTML="";    
    contentGrid.classList.add("content-grid-customisation");
    getUpcomingMoviesDiv(1);
})

// let showTopRatedMovies = document.querySelector(".show-top-rated-movies")
// showTopRatedMovies.addEventListener("click",(e)=>{
//     let obj = e.target;
//     contentGrid.innerHTML="";    
//     contentGrid.classList.add("content-grid-customisation");
//     getTopRatedMovies(1);
// })
// let showTopRatedMovies2 = document.getElementById("show-top-rated-movies")
// showTopRatedMovies2.addEventListener("click",(e)=>{
//     let obj = e.target;
//     contentGrid.innerHTML="";    
//     contentGrid.classList.add("content-grid-customisation");
//     getTopRatedMovies(1);
// })





homeTab.addEventListener("click",(e)=>{
    // console.log(homeTab)
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }

    let obj = e.target;
    
    
    if (obj.classList.contains("home-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    if (obj.parentNode.classList.contains("home-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.parentNode.classList.add("mark")
    }
    

    contentGrid.innerHTML="";
    contentGrid.appendChild(homePage());

    contentGrid.classList.remove("content-grid-customisation")
    
    

    // topRatedContinut(1);
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


})



moviesTag.addEventListener("click",(e)=>{
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }

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
        
        if(document.getElementById("movies-tag").classList.contains("mark2")&&filters.id==="hide"){
            // getMoviesTag(obj2.id);
        }
        
    })

    

    


})


seriesTag.addEventListener("click",(e)=>{
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }
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

    getSeriesTag(1);

    paging.appendChild(pageLabel())
    paging.appendChild(createPagingDiv())
    
    paging.addEventListener("click",(x)=>{
        let obj2 = x.target;
        contentGrid.innerHTML="";
        // getSeriesTag(obj2.id);
    })
})


showsTag.addEventListener("click",(e)=>{
    filters.id="hide";
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
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }

    let obj = e.target;
    if (obj.classList.contains("coming-soon-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    if (obj.parentNode.classList.contains("coming-soon-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.parentNode.classList.add("mark")
    }
    // console.log(obj)

    
    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getComingSoonMovies(1);

    paging.appendChild(pageLabel())
    paging.appendChild(createPagingDiv())
    
    paging.addEventListener("click",(x)=>{
        let obj2 = x.target;
        
    
            
        if(obj2.parentNode.parentNode.previousElementSibling.previousElementSibling.firstElementChild.children[1].classList.contains("coming-soon-option mark")){
            
            contentGrid.innerHTML="";
        // console.log("coming soon")
            // getComingSoonMovies(obj2.id);
        } 
        
    })

})


popular.addEventListener("click",(e)=>{
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }

    let obj = e.target;
    
    // console.log(obj)

    if (obj.classList.contains("recent-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    if (obj.parentNode.classList.contains("recent-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.parentNode.classList.add("mark")
    }

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getPopularMovies();


})


topRated.addEventListener("click",(e)=>{
    filters.id="hide";

    if(paging.children.length>0){
        paging.innerHTML="";
    }

    let obj = e.target;
    // console.log(obj)

    if (obj.classList.contains("top-rated-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }


    if (obj.parentNode.classList.contains("top-rated-option")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.parentNode.classList.add("mark")
    }

    contentGrid.innerHTML="";
    contentGrid.classList.add("content-grid-customisation");
    getTopRatedMovies(1);

    paging.appendChild(pageLabel())
    paging.appendChild(createPagingDiv())
    
    paging.addEventListener("click",(x)=>{
        let obj2 = x.target;
        contentGrid.innerHTML="";
        // getTopRatedMovies(obj2.id);
    })

})







contentGrid.addEventListener("click",async (a)=>{
    filters.id="hide";

    let ex ;    
    let exPage = paging.innerHTML;
    let obj =a.target;
    
    
    if(obj.parentNode.classList.contains("series-tag-div") || obj.parentNode.classList.contains("show-tag-div")){
            
        
        try {
                let response = await fetch(`https://api.themoviedb.org/3/tv/${obj.parentNode.id}?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
                response = await response.json();
                let x = response;
                if(paging.children.length>0){
                    paging.innerHTML="";
                }
            // console.log(x)
                ex = contentGrid.innerHTML;
                
                contentGrid.innerHTML="";
                contentGrid.appendChild(createModal(x));

                let btn = document.querySelector(".modal-btn");
                
                btn.addEventListener("click",()=>{
                    contentGrid.innerHTML=ex;
                    paging.innerHTML=exPage;
                })

                

                
            } catch (error) {
                console.log(error)
            }
    }
    else

    if(obj.src && obj.parentNode.classList.contains("modal")==false){
        

        try {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${obj.parentNode.id}?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
            response = await response.json();
            // console.log(obj)
            let x = response;
            if(paging.children.length>0){
                paging.innerHTML="";
            }
            // console.log(x)
            ex = contentGrid.innerHTML;
            contentGrid.innerHTML=""
            contentGrid.appendChild(createModal(x));

            let btn = document.querySelector(".modal-btn");

            btn.addEventListener("click",()=>{
                contentGrid.innerHTML=ex;
                paging.innerHTML=exPage;
            })
        } catch (error) {
            console.log(error)
        }
    }

})


searchInput.addEventListener("keypress",(e)=>{
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }

    if(document.querySelector(".mark"))
    document.querySelector(".mark").classList.remove("mark")

    if(document.querySelector(".mark2"))
    document.querySelector(".mark2").classList.remove("mark2")
    

    if(e.key==="Enter"){
        let j = searchInput.value;
        searchInput.value="";
        search(j)

    paging.appendChild(pageLabel())
    paging.appendChild(createPagingDiv())
    
    paging.addEventListener("click",(x)=>{
        let obj2 = x.target;
        contentGrid.innerHTML="";
        searchForPage(j,obj2.id);

    })

    }

    

})


filterExpand.addEventListener("click",(a)=>{
    
    let obj =a.target
    // console.log(obj)
    // obj.classList.add("mark")
    
    
    if (obj.parentNode.classList.contains("filter-options")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    }

    if (obj.classList.contains("filter-options")){

        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.classList.add("mark")
    } 

    if(obj.textContent=="Filter by genres"){
        obj.parentNode.classList.add("mark")
    }

    if(filters.id==="hide"){
        filters.id=""
        
    } 
    else {
        filters.id="hide";
        filters.previousElementSibling.classList.remove("mark")
        document.querySelector(".filter-options").firstElementChild.classList.remove("mark")

        for(i=0;i<filters.children.length;i++){
            if(filters.children[i].classList.contains("filter-mark")){
                filters.children[i].classList.remove("filter-mark")
                filters.children[i].classList.add("filter-pattern")
            }
            
        }
    }


})

let arr = [];
let text="";

filters.addEventListener("click", async (b)=>{
    let obj = b.target;
    
    

    if(obj.classList.contains("filter-mark")==false&&obj.classList.contains("filters")==false){
        obj.classList.add("filter-mark")
        obj.classList.remove("filter-pattern")
    } else {
        obj.classList.remove("filter-mark")
        obj.classList.add("filter-pattern")
    }

    if(document.querySelector(".filters").classList.contains("filter-pattern")){
        document.querySelector(".filters").classList.remove("filter-pattern")
    }

    if(obj.classList.contains("filter-mark")&&obj.textContent!=="Apply filters") {
        arr.push(obj.id);
        
    }

    if(obj.classList.contains("apply")){
        contentGrid.innerHTML="";
        if(paging.children.length>0){
            paging.innerHTML="";
        }
        obj.classList.remove("filter-mark")
        obj.classList.remove("filter-pattern")
        for(i=0;i<filters.children.length;i++){
            if(filters.children[i].classList.contains("filter-mark")){
                filters.children[i].classList.remove("filter-mark")
                filters.children[i].classList.add("filter-pattern")
            }
            
        }

        for(i=0;i<arr.length;i++){
            // console.log(arr[i])
            if(arr.length<2){
                text += arr[i]
            }else if (arr.length>1){
                text = text +","+ arr[i];
            }
            // text = text +" "+ arr[i];
        }
        
        console.log(text)
        filterForGenre(text);
        
        // paging.appendChild(pageLabel())
        // paging.appendChild(createPagingDiv())
    
        // paging.addEventListener("click",(x)=>{
        // let obj2 = x.target;
        // contentGrid.innerHTML="";
        // if(filters.id!=="hide"&&filters.previousElementSibling.classList.contains("mark")){
        //     filterForPage(text,obj2.id);
        // }

        
        
        // })

        arr = [];
        text="";
        
        
    }

    
    
    
})

// home tab see all has no paging 
// to add swipe arrows 
// to add liked movies by ID
// to add recommended/suggestions in modal function
// to add Watch Providers 
// next / previous modal functions 
// content sliding under menu library
// multiple fetches because of paging event listeners 
// when click apply, filsters should remain active
// after search/hit enter , mark should be cleared