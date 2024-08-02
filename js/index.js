document.addEventListener("DOMContentLoaded",(function(){let e=$('[data-quote="words"]');new SplitType(e);const t=document.getElementById("video-file");gsap.timeline({scrollTrigger:{trigger:"#open-site",start:"0% 0%",end:"100% 85%",scrub:.5}}).to("#open .intro-area",{width:"100vw",height:"100vh",borderRadius:"0",duration:.5}).to("#open .intro-area .char",{filter:"blur(10px)",opacity:0,stagger:.01,duration:.3},"<").from("#quotes",{opacity:0,display:"none",duration:.5},"<").to("#open",{display:"none"},"<").from("#quotes .quotes.is-first .char",{filter:"blur(10px)",opacity:0,stagger:.03,duration:.6}).from("#quotes .quotes.is-first .data-quote",{y:5,opacity:0}).to("#quotes .quotes.is-first .char",{delay:.5,filter:"blur(10px)",opacity:0,stagger:.01,duration:.3}).to("#quotes .quotes.is-first .data-quote",{delay:.4,opacity:0},"<").from("#quotes .quotes.is-second .char",{filter:"blur(10px)",opacity:0,stagger:.03,duration:.6},"=-.1").from("#quotes .quotes.is-second .data-quote",{y:5,opacity:0}).to("#quotes .quotes.is-second .char",{filter:"blur(10px)",opacity:0,stagger:.01,duration:.3}).to("#quotes .quotes.is-second .data-quote",{delay:1,opacity:0},"<").from("#quotes .quotes.is-third .char",{filter:"blur(10px)",opacity:0,stagger:.03,duration:.6},"=-.1").from("#quotes .quotes.is-third .data-quote",{y:5,opacity:0}).to("#quotes .quotes.is-third .char",{filter:"blur(10px)",opacity:0,stagger:.01,duration:.3}).to("#quotes .quotes.is-third .data-quote",{delay:1,opacity:0},"<").from("#quotes .quotes.is-fourth .char",{filter:"blur(10px)",opacity:0,stagger:.03,duration:.6},"=-.1").from("#quotes .quotes.is-fourth .data-quote",{y:5,opacity:0},"=-.5").to("#quotes .quotes-area",{width:"90%",borderRadius:"0 0 30px 30px",duration:.5}),gsap.timeline({scrollTrigger:{trigger:"#close-site",start:"0% 0%",end:"100% 85%",scrub:.5}}).from("#pre-video .intro-area .char",{filter:"blur(10px)",opacity:0,stagger:.03,duration:.6}).to("#pre-video .intro-area .char",{filter:"blur(10px)",opacity:0,stagger:.01,duration:.3}).from("#video",{opacity:0,display:"none",duration:.5},"=-.2").to("#pre-video",{display:"none"},"<").to(t,{duration:.8,onUpdate:function(){const e=this.progress(),o=t.duration;isNaN(o)||(t.currentTime=e*o)}}).to("#video .video-area video",{opacity:0,duration:.5},"=-.3").from("#close-video",{opacity:0,display:"none",duration:.5}).to("#video",{display:"none"},"<").from("#close-video .intro-area h3",{opacity:0},"<"),particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!1,value_area:0}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.8,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!0,anim:{enable:!1,speed:1,size_min:0,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:1,direction:"center",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:0,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),console.log("Window is ready")}));