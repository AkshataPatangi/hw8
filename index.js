const express = require('express');
const axios = require('axios');
const app = express();
const apikey='6427aa670fdc84679e77793fb1f3870';

app.get('/currently', (req, res)=>{
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          data ={}
          data['name'] = response.data['results'][i]['title'];
          data['backdrop_path'] = response.data['results'][i]['backdrop_path'];
          newresults.push(data)
          if(newresults.length==5) break;
        }
        console.log(newresults)
        res.json(newresults)
      })
  })

  app.get('/searchmulti', (req, res)=>{
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/search/multi?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&query=' + req.query.search 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          data ={}
          if(response.data['results'][i]['media_type'] == 'tv'){
            data['media_type'] = 'tv';
            data['id'] = response.data['results'][i]['id'];
            data['name'] = response.data['results'][i]['name'];
            data['backdrop_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['backdrop_path'];
            newresults.push(data);
          }else if(response.data['results'][i]['media_type'] == 'movie'){
            data['media_type'] = 'movie';
            data['id'] = response.data['results'][i]['id'];
            data['name'] = response.data['results'][i]['title'];
            data['backdrop_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['backdrop_path'];
            newresults.push(data);
          } 
          if(newresults.length==7) break;
        }
        
        res.json(newresults);
      })
  })

  app.get('/popularmovies', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['title'];
          data['backdrop_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['backdrop_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        mainresults.push(newresults);
        res.json(mainresults);
      })
  })

app.listen(3000);