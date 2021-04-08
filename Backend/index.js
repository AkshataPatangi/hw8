const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const apikey='6427aa670fdc84679e77793fb1f3870';

app.use(express.static(path.join(__dirname,'dist/frontend')));

app.get('/currently', (req, res)=>{
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          data ={}
          data['name'] = response.data['results'][i]['title'];
          data['id'] = response.data['results'][i]['id'];
          data['backdrop_path'] = response.data['results'][i]['backdrop_path'];
          newresults.push(data)
          if(newresults.length==5) break;
        }
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
          if(response.data['results'][i]['backdrop_path']){
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
          if(response.data['results'][i]['poster_path']){
            data ={}
            data['id'] = response.data['results'][i]['id'];
            data['name'] = response.data['results'][i]['title'];
            data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
            newresults.push(data);
            if(newresults.length==6){
              mainresults.push(newresults);
              newresults = [];
            }
          }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/topratedmovies', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
            data ={}
            data['id'] = response.data['results'][i]['id'];
            data['name'] = response.data['results'][i]['title'];
            data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
            newresults.push(data);
            if(newresults.length==6){
              mainresults.push(newresults);
              newresults = [];
            }
          }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/trendingmovies', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=16427aa670fdc84679e77793fb1f3870'; 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
            data ={}
            data['id'] = response.data['results'][i]['id'];
            data['name'] = response.data['results'][i]['title'];
            data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
            newresults.push(data);
            if(newresults.length==6){
              mainresults.push(newresults);
              newresults = [];
            }
          }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/moviedetails', (req, res)=>{
    id = req.query.movieid 
    var url1 = 'https://api.themoviedb.org/3/movie/' +id+'?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    var url2 = 'https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.all([axios.get(url1),axios.get(url2)])
    .then(axios.spread((response,responsevideo) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        data ={}
        data['name'] = response.data['title'];
        if(response.data['release_date']){
          date = response.data['release_date'].split('-');
          data['release_date'] = date[0];
        }else{
          data['release_date'] = '';
        }
        if(response.data['runtime']){
          var hours = parseInt(response.data['runtime']/60);
          var minutes = response.data['runtime'] - hours*60;
          data['runtime'] = hours + 'hrs ' + minutes + 'mins';
        }else{
          data['runtime'] = response.data['runtime'];
        }
        data['id'] = response.data['id'];
        data['overview'] = response.data['overview'];
        data['vote_average'] = response.data['vote_average'];
        data['tagline'] = response.data['tagline'];
        data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['poster_path'];
        data['media_type'] = 'movie';
        data['genres'] = new Array();
        for(i=0;i<response.data['genres'].length;i++){
          data['genres'].push(response.data['genres'][i]['name'])
        }
        data['genres'] = data['genres'].join(', ')
        data['spoken_languages'] = new Array();
        for(i=0;i<response.data['spoken_languages'].length;i++){
          data['spoken_languages'].push(response.data['spoken_languages'][i]['english_name'])
        }
        data['spoken_languages'] = data['spoken_languages'].join(', ')
        video = responsevideo.data['results'][0]
        if (responsevideo.data['results'].length > 0){
          data['site'] = video['site']
          data['vtype'] = video['type']
          data['vkey'] = video['key']
          data['captionname'] = video['name']
        }else{
          data['vkey'] = 'tzkWB85ULJY'
        }
        res.json(data);
      }))
  })

  app.get('/moviecastcrew',(req,res)=>{
    var newresults = new Array();
    id = req.query.movieid 
    var url = 'https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
    .then(response=>{
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      for(var i=0;i<response.data['cast'].length;i++){
        data ={}
        if(response.data['cast'][i]['profile_path']){
          data['id'] = response.data['cast'][i]['id'];
          data['name'] = response.data['cast'][i]['name'];
          data['character'] = response.data['cast'][i]['character'];
          data['profile_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['cast'][i]['profile_path'];
          newresults.push(data);
        }
      }
      res.json(newresults);
    })
  })

  app.get('/moviereviews',(req,res)=>{
    var newresults = new Array();
    id = req.query.movieid 
    var url = 'https://api.themoviedb.org/3/movie/'+ id +'/reviews?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
    .then(response=>{
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      for(var i=0;i<response.data['results'].length;i++){
        data ={}
        data['author'] = response.data['results'][i]['author'];
        data['id'] = response.data['results'][i]['id'];
        data['content'] = response.data['results'][i]['content'];
        parseddatetime = new Date(Date.parse(response.data['results'][i]['created_at'])).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true})
        data['created_at'] = parseddatetime
        data['url'] = response.data['results'][i]['url'];
        if(response.data['results'][i]['author_details']['rating']){
          data['rating'] = response.data['results'][i]['author_details']['rating'];
        }else{
          data['rating'] = 0
        }
        if(response.data['results'][i]['author_details']['avatar_path']){
          if(response.data['results'][i]['author_details']['avatar_path'].startsWith("/http")){
            data['avatar_path'] = response.data['results'][i]['author_details']['avatar_path'].substring(1);;
          }else{
            data['avatar_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['author_details']['avatar_path'];
          }
        }else{
          data['avatar_path'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
        }
        newresults.push(data);
        if(newresults.length==10) break;
      }
      res.json(newresults);
    })
  })

  app.get('/moviesrecommend', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    id = req.query.movieid
    var url = 'https://api.themoviedb.org/3/movie/'+ id +'/recommendations?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['title'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/moviessimilar', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    id = req.query.movieid
    var url = 'https://api.themoviedb.org/3/movie/'+ id +'/similar?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['title'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        console.log(mainresults)
        res.json(mainresults);
      })
  })

  app.get('/populartv', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/tv/popular?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['name'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/topratedtv', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['name'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })
  
  app.get('/trendingtv', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    var url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=16427aa670fdc84679e77793fb1f3870'; 
    
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['name'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/tvdetails', (req, res)=>{
    id = req.query.tvid 
    var url1 = 'https://api.themoviedb.org/3/tv/' +id+'?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    var url2 = 'https://api.themoviedb.org/3/tv/'+id+'/videos?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.all([axios.get(url1),axios.get(url2)])
    .then(axios.spread((response,responsevideo) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        data ={}
        data['name'] = response.data['name'];
        if(response.data['first_air_date']){
          date = response.data['first_air_date'].split('-');
          data['release_date'] = date[0];
        }else{
          data['release_date'] = '';
        }
        if(response.data['episode_run_time']){
          var hours = parseInt(response.data['episode_run_time']/60);
          var minutes = response.data['episode_run_time'] - hours*60;
          if(hours==0){
            data['runtime'] = minutes + 'mins';
          }else{
            data['runtime'] = hours + 'hrs ' + minutes + 'mins';
          }
        }else{
          data['runtime'] = response.data['episode_run_time'];
        }
        data['id'] = response.data['id'];
        data['overview'] = response.data['overview'];
        data['vote_average'] = response.data['vote_average'];
        data['tagline'] = response.data['tagline'];
        data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['poster_path'];
        data['media_type'] = 'tv';
        data['genres'] = new Array();
        for(i=0;i<response.data['genres'].length;i++){
          data['genres'].push(response.data['genres'][i]['name'])
        }
        data['genres'] = data['genres'].join(', ')
        data['spoken_languages'] = new Array();
        for(i=0;i<response.data['spoken_languages'].length;i++){
          data['spoken_languages'].push(response.data['spoken_languages'][i]['english_name'])
        }
        data['spoken_languages'] = data['spoken_languages'].join(', ')
        video = responsevideo.data['results'][0]
        if (responsevideo.data['results'].length > 0){
          data['site'] = video['site']
          data['vtype'] = video['type']
          data['vkey'] = video['key']
          data['captionname'] = video['name']
        }else{
          data['vkey'] = 'tzkWB85ULJY'
        }
        res.json(data);
      }))
  })

  app.get('/tvreviews',(req,res)=>{
    var newresults = new Array();
    id = req.query.tvid 
    var url = 'https://api.themoviedb.org/3/tv/'+ id +'/reviews?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
    .then(response=>{
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      for(var i=0;i<response.data['results'].length;i++){
        data ={}
        data['author'] = response.data['results'][i]['author'];
        data['id'] = response.data['results'][i]['id'];
        data['content'] = response.data['results'][i]['content'];
        parseddatetime = new Date(Date.parse(response.data['results'][i]['created_at'])).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true})
        data['created_at'] =  parseddatetime
        data['url'] = response.data['results'][i]['url'];
        if(response.data['results'][i]['author_details']['rating']){
          data['rating'] = response.data['results'][i]['author_details']['rating'];
        }else{
          data['rating'] = 0
        }
        if(response.data['results'][i]['author_details']['avatar_path']){
          // console.log(response.data['results'][i]['author_details']['avatar_path'])
          if(response.data['results'][i]['author_details']['avatar_path'].startsWith("/http")){
            data['avatar_path'] = response.data['results'][i]['author_details']['avatar_path'].substring(1);;
          }else{
            data['avatar_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['author_details']['avatar_path'];
          }
        }else{
          data['avatar_path'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
        }
        newresults.push(data);
        if(newresults.length==10) break;
      }
      res.json(newresults);
    })
  })

  app.get('/tvcastcrew',(req,res)=>{
    var newresults = new Array();
    id = req.query.tvid 
    var url = 'https://api.themoviedb.org/3/tv/'+ id +'/credits?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
    .then(response=>{
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      for(var i=0;i<response.data['cast'].length;i++){
        data ={}
        if(response.data['cast'][i]['profile_path']){
          data['id'] = response.data['cast'][i]['id'];
          data['name'] = response.data['cast'][i]['name'];
          data['character'] = response.data['cast'][i]['character'];
          data['profile_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['cast'][i]['profile_path'];
          newresults.push(data);
        }
      }
      res.json(newresults);
    })
  })

  app.get('/tvrecommend', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    id = req.query.tvid
    var url = 'https://api.themoviedb.org/3/tv/'+ id +'/recommendations?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['name'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/tvsimilar', (req, res)=>{
    var mainresults = new Array();
    var newresults = new Array();
    id = req.query.tvid
    var url = 'https://api.themoviedb.org/3/tv/'+ id +'/similar?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.get(url)
      .then(response=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        for(var i=0;i<response.data['results'].length;i++){
          if(response.data['results'][i]['poster_path']){
          data ={}
          data['id'] = response.data['results'][i]['id'];
          data['name'] = response.data['results'][i]['name'];
          data['poster_path'] = 'https://image.tmdb.org/t/p/w500' + response.data['results'][i]['poster_path'];
          newresults.push(data);
          if(newresults.length==6){
            mainresults.push(newresults);
            newresults = [];
          }
        }
        }
        if(newresults.length>0){
          mainresults.push(newresults);
        }
        res.json(mainresults);
      })
  })

  app.get('/castdetails', (req, res)=>{
    id = req.query.personid 
    var url1 = 'https://api.themoviedb.org/3/person/' +id+'?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1'; 
    var url2 = 'https://api.themoviedb.org/3/person/'+id+'/external_ids?api_key=16427aa670fdc84679e77793fb1f3870&language=en-US&page=1';
    axios.all([axios.get(url1),axios.get(url2)])
    .then(axios.spread((response,response1) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        data ={}
        
        data['birthday'] = response.data['birthday'];
        data['name'] = response.data['name'];
        data['website'] = response.data['homepage'];
        data['known_for_department'] = response.data['known_for_department'];
        data['biography'] = response.data['biography'];
        if(response.data['gender'] == 1){
          data['gender'] = 'Female';
        }else if(response.data['gender'] == 2){
          data['gender'] = 'Male';
        }
        data['also_known_as'] = response.data['also_known_as'];
        data['place_of_birth'] = response.data['place_of_birth'];
        
        data['imdb_id'] = response1.data['imdb_id'];
        data['facebook_id'] = response1.data['facebook_id'];
        data['instagram_id'] = response1.data['instagram_id'];
        data['twitter_id'] = response1.data['twitter_id'];
        res.json(data);
      }))
  })
app.listen(8080);

app.use('/*', function(req,res){
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})