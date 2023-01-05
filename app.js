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
let expand = document.getElementById("expand")
let titleLabel = document.getElementById("menu-label");

let trendingContent = document.querySelector(".trending-content")
let upcomingMovies = document.querySelector(".upcoming-movies-content")

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
// console.log(obj);

contentGrid.innerHTML="";   
contentGrid.innerHTML=loader; 
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
    // console.log(obj);
    
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



        contentGrid.innerHTML="";
        contentGrid.innerHTML=loader;
        contentGrid.classList.add("content-grid-customisation")
        getMoviesTag(1);

        paging.appendChild(pageLabel())
        paging.appendChild(createPagingDiv())
    
        paging.addEventListener("click",(x)=>{
        let obj2 = x.target;
        contentGrid.innerHTML="";
        
        if(document.getElementById("movies-tag").classList.contains("mark2")&&filters.id==="hide"){
            getMoviesTag(obj2.id);
            // alert("test1")
        }
        // else {console.log("test")}
        
    })


    }

    

    

    


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


        contentGrid.innerHTML=""
        contentGrid.classList.add("content-grid-customisation");
    
        getSeriesTag(1);
    
        paging.appendChild(pageLabel())
        paging.appendChild(createPagingDiv())
        
        paging.addEventListener("click",(x)=>{
            let obj2 = x.target;
            contentGrid.innerHTML="";

            if(document.getElementById("series-tag").classList.contains("mark2")&&filters.id==="hide"){
                getSeriesTag(obj2.id);
                
            }

            
        })

    }

    
})


showsTag.addEventListener("click",(e)=>{
    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }
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

    paging.appendChild(pageLabel())
        paging.appendChild(createPagingDiv())
        
        paging.addEventListener("click",(x)=>{
            let obj2 = x.target;
            contentGrid.innerHTML="";

            if(document.getElementById("shows-tag").classList.contains("mark2")&&filters.id==="hide"){
                getShowTag(obj2.id);
                
            }
        })
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
        
    
            
        if(comingSoon.classList.contains("mark")&&filters.id==="hide"){
            getComingSoonMovies(obj2.id);
            // alert("test4")
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
        if(topRated.classList.contains("mark")&&filters.id==="hide"){
            getTopRatedMovies(obj2.id);
            // alert("test5")
        }
        
        // 
    })

})







contentGrid.addEventListener("click",async (a)=>{
    filters.id="hide";

    let ex ;    
    let exPage = paging.innerHTML;
    let obj =a.target;

    // let nextElementId ;
    // let previousElementId ;
    
    
    
    if(obj.parentNode.classList.contains("series-tag-div") || obj.parentNode.classList.contains("show-tag-div")){
            
        
        try {
                let response = await fetch(`https://api.themoviedb.org/3/tv/${obj.parentNode.id}?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
                response = await response.json();
                let x = response;
                if(paging.children.length>0){
                    paging.innerHTML="";
                }
            console.log(x)
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

        // if(obj.parentNode.nextElementSibling.id!= null) {
        //     
        // }
        // nextElementId = obj.parentNode.nextElementSibling.id;
        // previousElementId = obj.parentNode.previousElementSibling.id;
        // console.log(nextElementId);
        // console.log(previousElementId)


        ex = contentGrid.innerHTML;
        contentGrid.innerHTML=loader;
        console.log(ex)
        try {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${obj.parentNode.id}?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
            response = await response.json();
            // console.log(obj)
            let x = response;
            if(paging.children.length>0){
                paging.innerHTML="";
            }
            // console.log(x)
            
            contentGrid.innerHTML=""
            contentGrid.appendChild(createModal(x));


            
            
        //     let nextBtn = document.querySelector(".next-btn")
        //     nextBtn.addEventListener("click",async (s)=>{

        //         // console.log(nextElementId)
        //         try {
        //                     let response = await fetch (`https://api.themoviedb.org/3/movie/${nextElementId}?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
        //                     response = await response.json();
        //                     console.log(response)
        //                     contentGrid.innerHTML="";
        //                     contentGrid.appendChild(createModal(response))
                            
        //                 } catch (error) {
        //                     console.log(error)
        //                 }

        //         let btn = document.querySelector(".modal-btn");
        //         btn.addEventListener("click",()=>{
        //             contentGrid.innerHTML=ex;
        //             paging.innerHTML=exPage;
        //         })

        //     })

        //     let prevBtn = document.querySelector(".previous-btn")
        //     prevBtn.addEventListener("click",async (s)=>{

        //         // console.log(previousElementId)
        //         try {
        //             let response = await fetch (`https://api.themoviedb.org/3/movie/${previousElementId}?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US`)
        //             response = await response.json();
        //             // console.log(response)
        //             contentGrid.innerHTML="";
        //             contentGrid.appendChild(createModal(response))
                    
        //         } catch (error) {
        //             console.log(error)
        //         }

        // let btn = document.querySelector(".modal-btn");
        // btn.addEventListener("click",()=>{
        //     contentGrid.innerHTML=ex;
        //     paging.innerHTML=exPage;
        // })


        //     })


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





document.querySelector(".w-6").addEventListener("click",(e)=>{

    let obj = e.target


    filters.id="hide";
    if(paging.children.length>0){
        paging.innerHTML="";
    }

    if(document.querySelector(".mark"))
    document.querySelector(".mark").classList.remove("mark")

    if(document.querySelector(".mark2"))
    document.querySelector(".mark2").classList.remove("mark2")
    

    
        console.log("test")
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
        
        
        obj.parentNode.classList.add("mark")
    } 
    else if (obj.textContent=="Filters"){
        console.log(obj)
        if(document.querySelector(".mark"))
        document.querySelector(".mark").classList.remove("mark")

        if(document.querySelector(".mark2"))
        document.querySelector(".mark2").classList.remove("mark2")
        
        
        obj.parentNode.parentNode.classList.add("mark")
    } 


    if(filters.id==="hide"){
        filters.id=""
        
    } 
    else {
        filters.id="hide";
        
        document.querySelector(".filter-options").classList.remove("mark")

        for(i=0;i<filters.children.length;i++){
            if(filters.children[i].classList.contains("filter-mark")){
                filters.children[i].classList.remove("filter-mark")
                filters.children[i].classList.add("filter-pattern")
            }
            
        }
    }


})

// let arr = [];


filters.addEventListener("click", async (b)=>{

        let text="";
        let marked = []
        let marked2=[];
        let f = document.querySelectorAll(".filter-mark");
        let aux;
    

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
    
    
    if(obj.classList.contains("apply")){

        
        // every marked element pushed in array, to get genres IDs
        for (i in f) {
            marked.push(+f[i].id)
        }


        // makred returned also NaN and 0 values, if an element was unselected, so refiltered in this for
        for(i in marked) {
            if (marked[i]>0){
                marked2.push(marked[i])
            }
        }
        

        // keep clean paging
        contentGrid.innerHTML="";
        if(paging.children.length>0){
            paging.innerHTML="";
        }
        

        // keep the apply filters button unchanged 
        obj.classList.remove("filter-mark")
        obj.classList.remove("filter-pattern")


        // clean all marks and reset filters
        // for(i=0;i<filters.children.length;i++){
        //     if(filters.children[i].classList.contains("filter-mark")){
        //         filters.children[i].classList.remove("filter-mark")
        //         filters.children[i].classList.add("filter-pattern")
        //     }
            
        // }

        
        
        // converting IDs to string for search
        for(i=0;i<marked2.length;i++){
            
            if(marked2.length<2){
                text += marked2[i]
            }else if (marked2.length>1){
                text =marked2[i]  +","+ text;
            }
            
        }
        console.log(text)
        filterForGenre(text);
        
        // applying search with filters
        
        paging.appendChild(pageLabel())
        paging.appendChild(createPagingDiv())
    
        paging.addEventListener("click",(x)=>{

            
            
            
            
        let obj2 = x.target;
        contentGrid.innerHTML="";
        contentGrid.innerHTML=loader;

        // if filters not hidden and Filters contains mark , search for genres
        if( filters.id!=="hide"&&filters.parentNode.classList.contains("mark")==true){
            marked=[];
            marked2=[];
            text="";
            

            for (i in f) {
                marked.push(+f[i].id)
            }
    
    
            // marked returned also NaN and 0 values, if an element was unselected, so refiltered in this for
            for(i in marked) {
                if (marked[i]>0){
                    marked2.push(marked[i])
                }
            }

            

            // objects from DOM to string
            for(i=0;i<marked2.length;i++){
            
                if(marked2.length<2){
                    text += marked2[i]
                }else if (marked2.length>1){
                    text =marked2[i]  +","+ text;
                }
                
            }
            marked2=[]
            
            console.log(text)
            contentGrid.innerHTML="";
            filterForPage(text,obj2.id);
            
            
        }
        
        
        })
        
        
        
    }
    
        
    
})

expand.addEventListener("click", (e)=>{

let obj = e.target;
if(obj.textContent == "☞"){
    obj.textContent="☜"
    document.querySelector(".menu-library").classList.add("unhide-library")
    filters.classList.remove("move-filters")
}

else if(obj.textContent == "☜"){
    obj.textContent="☞"
    document.querySelector(".menu-library").classList.remove("unhide-library")
    filters.classList.add("move-filters")
}
// obj.textContent=""

})


titleLabel.addEventListener("click", (e)=> {
    let obj = e.target;

    if(obj.id == "menu-label") {
        contentGrid.innerHTML="";
        contentGrid.classList.remove("content-grid-customisation")
        contentGrid.appendChild(homePage());
        trendingMovies(); 
        getUpcomingMovies(1);
        getGenresList();
        filters.id="hide";
        paging.innerHTML="";
    }
})





// to add swipe arrows 
// to add Watch Providers 

//on mobile, recheck modal dimensions

