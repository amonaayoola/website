// PAGE ROUTER
function setNavActive(key){
  document.querySelectorAll('.navlinks a').forEach(function(a){
    a.classList.toggle('nav-active', a.dataset.nav === key);
  });
}
function showPage(name){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
  setNavActive(name === 'blog' ? 'blog' : 'home');
  initObservers();
}
function scrollTop(){window.scrollTo(0,0);setNavActive('home')}
function go(id){
  var el=document.getElementById(id);
  if(el){el.scrollIntoView({behavior:'smooth'});setNavActive(id);}
}
function tc(el){el.classList.toggle('open')}

// NAV SCROLL EFFECT + SCROLL SPY
var _sections=['connect','experience','about','work','story'];
window.addEventListener('scroll',function(){
  document.getElementById('nav').classList.toggle('sc',window.scrollY>80);
  var sh=document.getElementById('sh');
  if(sh)sh.style.opacity=window.scrollY>60?0:.4;
  // Only spy when on home page
  if(!document.getElementById('page-home').classList.contains('active'))return;
  if(window.scrollY<120){setNavActive('home');return;}
  for(var i=0;i<_sections.length;i++){
    var s=document.getElementById(_sections[i]);
    if(s&&s.getBoundingClientRect().top<=140){setNavActive(_sections[i]);return;}
  }
  setNavActive('home');
},{passive:true});

// STARS + PARTICLES
(function(){
  var c=document.getElementById('particles');
  if(!c)return;
  var ctx=c.getContext('2d');
  var mouse={x:-9999,y:-9999,px:-9999,py:-9999};

  c.addEventListener('mousemove',function(e){
    var rect=c.getBoundingClientRect();
    mouse.px=mouse.x; mouse.py=mouse.y;
    mouse.x=e.clientX-rect.left;
    mouse.y=e.clientY-rect.top;
  });
  c.addEventListener('mouseleave',function(){mouse.x=-9999;mouse.y=-9999;});

  function sz(){c.width=c.offsetWidth;c.height=c.offsetHeight;initStars()}

  var stars=[];
  function initStars(){
    stars=[];
    var count=Math.floor((c.width*c.height)/2400);
    for(var i=0;i<count;i++){
      stars.push({
        x:Math.random()*c.width,
        y:Math.random()*c.height,
        r:Math.random()<0.08?2.0:Math.random()<0.2?1.4:Math.random()<0.5?0.85:0.45,
        base:0.18+Math.random()*0.45,
        speed:0.004+Math.random()*0.012,
        offset:Math.random()*Math.PI*2,
        gold:Math.random()<0.32,
        vx:(Math.random()-.5)*0.22,
        vy:(Math.random()-.5)*0.14,
        ox:0,oy:0
      });
    }
  }

  function mk(init){var ml=280+Math.random()*400;return{x:Math.random()*c.width,y:init?Math.random()*c.height:c.height+5,r:.4+Math.random()*1.8,vx:(Math.random()-.5)*.18,vy:-(.05+Math.random()*.22),a:0,ma:.12+Math.random()*.55,life:init?(Math.random()*ml|0):0,ml:ml}}
  var pts=[];for(var i=0;i<65;i++)pts.push(mk(true));

  sz();window.addEventListener('resize',sz);
  var t=0;
  (function loop(){
    t+=0.016;
    ctx.clearRect(0,0,c.width,c.height);

    // Cursor aura glow
    if(mouse.x>0&&mouse.x<c.width){
      var gr=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,240);
      gr.addColorStop(0,'rgba(200,168,130,0.14)');
      gr.addColorStop(0.45,'rgba(200,168,130,0.05)');
      gr.addColorStop(1,'rgba(200,168,130,0)');
      ctx.fillStyle=gr;
      ctx.beginPath();ctx.arc(mouse.x,mouse.y,240,0,Math.PI*2);ctx.fill();
    }

    for(var i=0;i<stars.length;i++){
      var s=stars[i];
      var dx=s.x-mouse.x, dy=s.y-mouse.y;
      var dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<170&&dist>0){
        var force=(170-dist)/170;
        s.ox+=(dx/dist)*force*1.6;
        s.oy+=(dy/dist)*force*1.6;
      }
      s.ox*=0.91; s.oy*=0.91;
      s.x+=s.vx; s.y+=s.vy;
      if(s.x<0)s.x=c.width; if(s.x>c.width)s.x=0;
      if(s.y<0)s.y=c.height; if(s.y>c.height)s.y=0;
      var rx=s.x+s.ox, ry=s.y+s.oy;
      var twinkle=s.base+Math.sin(t*s.speed*60+s.offset)*0.38;
      twinkle=Math.max(0.08,Math.min(1,twinkle));
      if(dist<210) twinkle=Math.min(1,twinkle+(1-dist/210)*0.6);
      ctx.beginPath();
      ctx.arc(rx,ry,s.r,0,Math.PI*2);
      ctx.fillStyle=s.gold?'rgba(200,168,130,'+twinkle+')':'rgba(244,240,234,'+twinkle+')';
      ctx.fill();
      if(s.r>1.4){
        ctx.strokeStyle=s.gold?'rgba(200,168,130,'+(twinkle*0.55)+')':'rgba(244,240,234,'+(twinkle*0.45)+')';
        ctx.lineWidth=0.6;
        ctx.beginPath();ctx.moveTo(rx-s.r*3.5,ry);ctx.lineTo(rx+s.r*3.5,ry);ctx.stroke();
        ctx.beginPath();ctx.moveTo(rx,ry-s.r*3.5);ctx.lineTo(rx,ry+s.r*3.5);ctx.stroke();
      }
    }

    for(var i=0;i<pts.length;i++){
      var p=pts[i];p.x+=p.vx;p.y+=p.vy;p.life++;
      var tt=p.life/p.ml;
      p.a=tt<.2?(tt/.2)*p.ma:tt>.8?((1-tt)/.2)*p.ma:p.ma;
      if(p.life>=p.ml||p.y<-10)pts[i]=mk(false);
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(200,168,130,'+p.a+')';ctx.fill();
    }
    requestAnimationFrame(loop);
  })();
})();

// SCROLL REVEAL + COUNTUP
function initObservers(){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      e.target.classList.add('on');
      e.target.querySelectorAll('.cnt').forEach(function(el){
        if(el._done)return;el._done=true;
        var tgt=+el.dataset.t,s=Date.now(),d=1600;
        (function tick(){
          var p=Math.min((Date.now()-s)/d,1);
          el.textContent=Math.floor((1-Math.pow(1-p,3))*tgt).toLocaleString();
          if(p<1)requestAnimationFrame(tick);
          else el.textContent=tgt.toLocaleString();
        })();
      });
    });
  },{threshold:0.07});
  document.querySelectorAll('.rv,.wh,.nc').forEach(function(el){obs.observe(el)});
}
initObservers();
