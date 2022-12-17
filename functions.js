async function test(){

try {
    let response = await fetch ("https://api.themoviedb.org/3/movie/76341?api_key=23ba16be4dc35356bedc2b9b63c19363")
    response = await response.json();
    console.log(response);
}   catch (e) {
    console.log(e);
}

}




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



let topRatedContent = document.querySelector(".top-rated-content")


async function topRatedContinut () {
    try{
        let response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=23ba16be4dc35356bedc2b9b63c19363&language=en-US&page=1")
        response = await response.json()

        // console.log(response.results)
        // topRatedContent.appendChild(createTopRatedDiv(response.results[0]))
        // console.log(response.results[0])
        
        for(i in response.results) {
            
            topRatedContent.appendChild(createTopRatedDiv(response.results[i]));
        }
        
    }   catch(err) {
        console.log(err)
    }
}







function createTrendingContentDiv (obj) {

    // poster_path
    // release date 
    // original title
    // overview 

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("trending-movies-div")
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
    secondDiv.appendChild(p1)


    return mainDiv;
}



let trendingContent = document.querySelector(".trending-content")

async function trendingMovies () {

    try {
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=23ba16be4dc35356bedc2b9b63c19363")
        response = await response.json();

        console.log(response.results)

        for(i in response.results) {
            trendingContent.appendChild(createTrendingContentDiv(response.results[i]))
        }
        
    }
    catch(err) {
        alert(err)
    }

}





