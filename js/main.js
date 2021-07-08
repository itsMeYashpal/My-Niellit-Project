  function load() {
                var mydata = data;
                console.log(mydata);

                var div = document.getElementById('disJson');

                for(var i = 0;i < mydata.length; i++)
                {

                    div.innerHTML = div.innerHTML + '<div class="col-lg-5 col-md-8 col-sm-8 d-block m-auto"><div class="text-primary" style="font-size: 75px"><i class="fa fa-check-circle"></i></div><div class="pt-2 pb-1" style="letter-spacing: 2px"><h4>'+mydata[i].name+'</h4></div><div><h1 class="pb-3 text-primary font-weight-bold">Its<small class="text-muted">'+ mydata[i].title+'</small></h1><p class="pb-2">'+mydata[i].description+'</p></div></div><div class="col-lg-1 d-none d-lg-block"><div class="vl"></div></div>';  
                }
            }