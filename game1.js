let g=document.getElementsByClassName("box");
let m=document.getElementsByClassName("g");
let x=[];
let pre=0;

let s=180;
let move=document.getElementsByTagName("span");
let container=document.getElementsByClassName("container");
let heart=document.getElementsByClassName("heart");
let lose=document.getElementById("lose");
let gameOver=document.getElementById("game-over");
let win=document.getElementById("win");
let win1=document.getElementById("win1");
let background=document.getElementsByTagName("button");
let next2=document.getElementById("next2");
let text=[9,9,'A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M','M','N','N','O','O','P','P','Q','Q','R','R','S','S','T','T','U','U','V','V','W','W','X','X','Y','Y','Z','Z','@','@','#','#','$','$','%','%','&','&','*','*'];
let faseBack=document.getElementsByClassName("back");
let incr=0;
let incr2=0;
let level=document.getElementById("level");

let front=document.getElementsByClassName("front");
let level2=2;
let pixel=400;
let game=2;
let score=0;

let d=[];

let ab=0;
let high1=0;

/*** high score**/
function jk(){high1=Number(move[1].textContent);
    {
if(window.localStorage.high2===undefined){window.localStorage.setItem('high2',0)}};
    let high2=Number(window.localStorage.getItem('high2'));
    if (high2<=high1){high2=high1;window.localStorage.setItem('high2',`${high2}`)};
    high2=Number(window.localStorage.getItem('high2'));
    move[2].textContent=high2;};
    jk();
/******end of high score****/

let global =function(){
/***********random ordering ***********/


for(let i=0;;i++){
   let k=Math.floor(Math.random()*g.length);
 
                     if(d.length<=g.length){d.includes(k)? d=d:d.push(k);}

                     if(d.length===g.length){break};
 

                 };
console.log(d);


for(let i=0; i<m.length ;i++){
                              m[i].style.cssText=`order:${d[i]}`
                             }
/***************on load ***************/


/**************************************/
/***************on click logic*********/
/**************************************/

for(let i=0; i<g.length ;i++){
          

  g[i].onclick=function(){g[i].style.cssText=`transform:rotatey(-${s}deg);`
                        /**s===180? s=0:s=180;**/
                        x.push(g[i].textContent);
                        if(x.length >=2){
                                         if(x[0]===x[1] && g[i].className!==pre.className){g[i].onclick=function(){};
                                                                                           pre.onclick=function(){};
                                                                                           ab+=1;
                                                                                           move[1].textContent =Number(move[1].textContent)+10;
                                                                                           }
                                         else { move[0].textContent-=1;
                                                pre.style.cssText=`transform:rotatey(0deg);`;
                                                setTimeout(xx,1000);function xx(){g[i].style.cssText=`transform:rotatey(0deg);`}};
                                              
                                         x=[];
                                        };
                        console.log(s);
                        console.log(`${pre.textContent}:${g[i].textContent}`);
                        pre=g[i];

  /*********high score*****under on click********/

   jk();

 /**********try again*******under on click******/                      

    if(move[0].textContent==='0'){ heart[`${game}`].style.cssText="display:none";
                                   for(let j=0;j<g.length;j++){g[j].onclick=function(){}};
                                   container[0].style.cssText=("opacity:.5");

                               if(game>0){
                                   setTimeout(function(){lose.style.cssText=(`display:block;`)},1500);}
              
                    /**********Game Over*******under on click******/
                               else if(game===0){
                                   setTimeout(function(){gameOver.style.cssText=(`display:block;`)},1500);}
                                   
                                 } 
/**********win case*******under on click*/   
    if(ab===g.length/2){next2.style.cssText=(`display:block;`);
                        container[0].style.cssText=("opacity:.5");
                        setTimeout(function(){win1.style.cssText=(`display:block;`)},1500);
                        ab=0;
                        };

                    };};

}

global();

/*********background **************/
{
if(window.localStorage.back===undefined){window.localStorage.setItem('back',27)}}
let back2=Number(window.localStorage.getItem('back'));
document.body.style.cssText=`background-image:url('images/photo${back2}.jpg');background-repeat:repeat;background-size: 100% 1400px;`;
     
let back=Math.ceil(Math.random()*26);

background[0].onclick=function(){back=Math.ceil(Math.random()*26);
                               window.localStorage.setItem('back',`${back}`);
                               back2=Number(window.localStorage.getItem('back'));
                               document.body.style.cssText=`background-image:url('images/photo${back2}.jpg');background-repeat:repeat;background-size: 100% 1400px;`;
}

/****************************/
/**********next level********/
/****************************/
win1.onclick=function(){next2.click()}
next2.onclick=function(){

       /*************RANDOM COLOR*********/
       
       let col1=Math.floor(Math.random()*255);

       let col2=Math.floor(Math.random()*255);
       let col3=Math.floor(Math.random()*255);
       /**let col4=rgb(col1,col2,col3);**/
       
       
      /************************************/ 
      /*********next logic*****************/
                score=Number(move[1].textContent);
                for(let i=0;i<4;i++){
                container[0].innerHTML=container[0].innerHTML+`<div class="g"><div class="box h${incr2}"><div class="face front"></div><div class="face back">8</div></div></div>`
                faseBack[15+incr2].textContent=text[incr];
                console.log(i);
                incr=incr+1;incr2=incr2+1
                if(incr>=text.length){incr=0};};
              
              /**container[0].style.cssText=`width:${498}px;`;**/
              d=[];
              global();
              win1.style.cssText=(`display:none;`);
              container[0].style.cssText=("opacity:1");
              for(let i=0; i<g.length ;i++){g[i].style.cssText=`transform:rotatey(-${0}deg);`
                                            front[i].style.cssText=`background-color: rgb(${col1},${col2},${col3});`;};
              level.textContent=`level ${level2}`;          
              move[0].textContent=((level2-1)*2)+16;
              
              level2=level2+1;           
      /*******gradual area*****/
      /************************/
              pixel=(Math.ceil(Math.sqrt(g.length)))*98;
              let pixel2=1200/(Math.ceil(Math.sqrt(g.length)));
              container[0].style.cssText=`width:${pixel}px;height:${pixel}px;border:10px solid rgb(${col1},${col2},${col3});/*left:${pixel2}px;*/`;
              next2.style.cssText=(`display:none;`);
}

lose.onclick=function(){game=game-1;
                        
                        d=[];
                        global();
                        lose.style.cssText=(`display:none;`);
                        container[0].style.cssText=("opacity:1");
                        for(let i=0; i<g.length ;i++){g[i].style.cssText=`transform:rotatey(-${0}deg);`
                                            };
                        move[0].textContent=((level2-1)*2)+16;
                        pixel=(Math.ceil(Math.sqrt(g.length)))*98;
                        container[0].style.cssText=`width:${pixel}px;height:${pixel}px;`;
                        move[1].textContent=score;
                        ab=0;
                       }