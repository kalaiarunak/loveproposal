var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
   var r_size = Math.floor(Math.random() * 65) + 10;
   var r_left = Math.floor(Math.random() * 100) + 1;
   var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
  
  var txt1 = " Dear Arun, <<< The reason I am writing this today is < because I can’t stop thinking about you, and < I can’t stop myself from imagining how happy we will be. > I will do my best to keep you happy, so count on my surprises. << I feel “Blessed” to have a person like you in my life. << I will make each morning blissful and every night wonderful. > I will hold your hand when we’re 80 years old < with the same warmth that I did when I crossed that line < to hold your hands for the first time during our engagement. > I will do my best always to show you importance in my life. << I will keep reinventing myself, cultivating new hobbies, < and discovering new ways and new interests to keep you – and myself – entertained. >Our relationship and love will continue < to grow for each other over the years. > I promise to kiss you throughout our life together. << I promise to play the games you like to play. << I promise to help you remain healthy, both physically and mentally. << I will cook and clean for us. > I promise to do my best to love your family < as much as you love them and to be by their side as much as I am by yours. > I LOVE YOU > With loads of love,<< Your Sweetheart Kalai >>"
  
  var speed = 70;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }