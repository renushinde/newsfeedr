/*
  Please add all Javascript code to this file.
  Renu Shinde
  GA SF-10

*/
'use strict';
const theGuardianUrl = 'http://content.guardianapis.com/search?use-date=published&order-by=newest&show-elements=all&section=technology&api-key=8ce3435d-9cc6-44db-9454-390465fd7e67';
const newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3338177fffda4bab8fe5f7bbaddbe608';

let theGuardianTitles = [];
let theGuardianUrls = [];

let theNewApiUrls = [];
let theNewApiTitles = [];
let theNewApiImg = [];
let theNewApiSource = [];

//$('#popUp').removeClass('hidden');
//Retriving everything from the "The Guardian"
$.get(theGuardianUrl, function(data){
  // console.log(data);
});
//Retriving everything from the newAPI
$.get(newsApiUrl, function(data){
  // console.log(data);
});

//Retriving the title from the "The Guardian"
$.get(theGuardianUrl, function(data){
  let titles = (data.response.results);
  titles.forEach(function(element){
    theGuardianTitles.push(element.webTitle)
  });
  // console.log(titles1);
  // theGuardian.push({
  //   titles: element.webTitle,
  //   url: element.webUrl,
  // });
});

//Retriving the urls from the "The Guardian"
$.get(theGuardianUrl, function(data){
  let links = (data.response.results);
  links.forEach(function(element){
    theGuardianUrls.push(element.webUrl);
  });
  // console.log(links1);
});

//Retriving the urls from the newAPI
$.get(newsApiUrl, function(data){
  let links = (data.articles)
  links.forEach(function(element){
    theNewApiUrls.push(element.url);

  });
  // console.log(theNewApiUrls);
});

//Retriving the titles from the newAPI
$.get(newsApiUrl, function(data){
  let titles = (data.articles)
  titles.forEach(function(element){
    theNewApiTitles.push(element.title);

  });
  // console.log(theNewApiTitles);
});

//Retriving the img url from the newAPI
$.get(newsApiUrl, function(data){
  let img = (data.articles)
  img.forEach(function (element){
    theNewApiImg.push(element.urlToImage);

  });
  // console.log(theNewApiImg);
});

$.get(newsApiUrl, function(data){
  let source = (data.articles)
  source.forEach(function(element){
    theNewApiSource.push(element.source.name);
  });
});

// DOM manipulation
$('#guardian').on('click', function(){
  $('#name').html('Guardian');
  //console.log('You clicked me!');

  $('.article').remove();
  theGuardianTitles.forEach(function(element){
    let theGuardianTemplate = `
    <article class="article">
      <section class="featuredImage">
        
      </section>
      <section class="articleContent">
          <a href="#"><h3>${element}</h3></a>
          <h6>The Guadian</h6>
      </section>
      <div class="clearfix"></div>
    </article>
    `
    $('#main').append(theGuardianTemplate);
  hideShow();
  });
});

$('#newsApi').on('click', function(){
  $('#name').html('News Api');

  $('.article').remove();
    for (var i = 0; i < theNewApiUrls.length; i++) {
      let newsApiTemplate = `
      <article class="article">
        <section class="featuredImage">
          <img src=${theNewApiImg[i]} alt="" />
        </section>
        <section class="articleContent">
            <a href="#"><h3>${theNewApiTitles[i]}</h3></a>
            <h6>${theNewApiSource[i]}</h6>
        </section>
        <div class="clearfix"></div>
      </article>
      `
      $('#main').append(newsApiTemplate);
      hideShow()
    };
});

function hideShow(){
  $('#main a').on('click', function(element){
    element.preventDefault();
    $('#popUp').removeClass('loader hidden');
  });

  $('.closePopUp').on('click', function(){
    $('#popUp').addClass('loader hidden');
  });
};


/*'use strict';
const theGuardianUrl = 'http://content.guardianapis.com/search?use-date=published&order-by=newest&show-elements=all&section=technology&api-key=8ce3435d-9cc6-44db-9454-390465fd7e67';
const newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3338177fffda4bab8fe5f7bbaddbe608';

// fetching the content

$.get(theGuardianUrl, function(data){

    console.log(data);
});

$.get(newsApiUrl, function(data){

    console.log(data);
});

// creating an array to store contents. 

const theGuardianTitles= [];
const theGuardianImage=[];

const theNewApiTitles=[];
const theNewApiImg=[];


$.get(theGuardianUrl, function(data){

    let titles = (data.response.results);  // went down in the layers. 
     
     titles.forEach(function(element){
    theGuardianTitles.push(element.webTitle)  // from json 
    //theGuardianTitles.push(data.response.results); // pushed to theGuardianTitle Array.
});
 });

$.get(newsApiUrl, function(data){

    console.log(data.articles);
    theNewApiTitles.push(data.articles);
});

$('#guardian').on('click', function(){

    alert('You Clicked!');
    $('#name').html('Guardian');


});


$('#newsApi').on('click', function(){

    alert('You clicked!');
});*/