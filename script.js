async function fetchData() {
    const result = await fetch( `https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json?fbclid=IwAR0wUe19iU9DTITjqRFV0U4XTyEa_cvulNbMrbb37DlaPFgjF0j6je7GBRA`);
    const data = await result.json();
    return data;
}
async function showleft (){
    const data = await fetchData();
    let keys = data.movies;
    var html = ``;
    for(let key of keys){ 
        html = `${html}<img alt="banner" style="width:210px; height:308px" 
        onclick="showright('${key.posterUrl}','${key.title}','${key.plot}','${key.director}','${key.year}','${key.genres}')" src="${key.posterUrl}" >`  
    }
    document.getElementById('col1').innerHTML = html;
    //cudi suratebis shemcvleli
    const images = document.querySelectorAll('img');
    images.forEach(img => {
    img.addEventListener('error', function handleError() {
    var choose = ['./notclone1.webp','./notclone2.webp','./notclone3.webp','./notclone4.webp','./notclone5.webp','./notclone6.webp'];
    const random = Math.floor(Math.random() * choose.length);
    const defaultImage =  choose[random];
    img.src = defaultImage;
   
  });
  //cudi suratebis shemcvleli-end
});
}
async function showright(imgurl,title,plot,director,year,genres){
        html2 = `<div class="card" style="width: 13rem;">
        <img class="card-img-top" src="${imgurl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-title">Genres: ${genres}</6>
          <h6 class="card-title">Director: ${director}</6>
          <h6 class="card-title">Year: ${year}</6>
          <br>
          <p class="card-text">Plot: ${plot}</p>
        </div>
        </div> `
        document.getElementById('col3').innerHTML = html2;
   
}


