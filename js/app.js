document.addEventListener('DOMContentLoaded', function() {

    // SPLIT HOVER
    let quoteText = $('[data-quote="words"]');
    let quoteWords = new SplitType(quoteText);

    const video = document.getElementById('video-file');

         let openSiteAnimation = gsap.timeline({
            scrollTrigger: {
               trigger: '#open-site',
               start: '0% 0%',
               end: '100% 85%',
               scrub: .5,
               // markers: true,
            }
         });

         openSiteAnimation
         //Intro page
         .to("#open .intro-area", {
            width: '100vw',
            height: '100vh',
            borderRadius: '0',
            duration: .5,
         })
         .to("#open .intro-area .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         }, '<')
         // Show quotes section
         .from("#quotes", {
            opacity: 0,
            display: 'none',
            duration: .5,
         }, '<')
         // Hidde Intro section
         .to("#open", {
            display: 'none',
         }, '<')
         // First quote
         .from("#quotes .quotes.is-first .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         })
         .from("#quotes .quotes.is-first .data-quote", {
            y: 5,
            opacity: 0,
         })
         .to("#quotes .quotes.is-first .char", {
            delay: .5,
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         })
         .to("#quotes .quotes.is-first .data-quote", {
            delay: .4,
            opacity: 0,
         }, '<')
         // Second quote
         .from("#quotes .quotes.is-second .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .from("#quotes .quotes.is-second .data-quote", {
            y: 5,
            opacity: 0,
         })
         .to("#quotes .quotes.is-second .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         })
         .to("#quotes .quotes.is-second .data-quote", {
            delay: 1,
            opacity: 0,
         }, '<')
         // Third quote
         .from("#quotes .quotes.is-third .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .from("#quotes .quotes.is-third .data-quote", {
            y: 5,
            opacity: 0,
         })
         .to("#quotes .quotes.is-third .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         })
         .to("#quotes .quotes.is-third .data-quote", {
            delay: 1,
            opacity: 0,
         }, '<')
         // Fourth quote
         .from("#quotes .quotes.is-fourth .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .from("#quotes .quotes.is-fourth .data-quote", {
            y: 5,
            opacity: 0,
         }, '=-.5')
         .to("#quotes .quotes-area", {
            width: '90%',
            borderRadius: '0 0 30px 30px',
            duration: .5,
         })



      // Asegurarse de que el video esté cargado
      // video.addEventListener('loadedmetadata', function() {
      // CLOSE SITE ANIMATION
      let closeSiteAnimation = gsap.timeline({
         scrollTrigger: {
            trigger: '#close-site',
            start: '0% 0%',
            end: '100% 85%',
            scrub: .5,
            markers: true,
         }
      });

      closeSiteAnimation
      // Pre video
      .from("#pre-video .intro-area .char", {
         filter: 'blur(10px)',
         opacity: 0,
         stagger: 0.030,
         duration: 0.60,
      })
      .to("#pre-video .intro-area .char", {
         filter: 'blur(10px)',
         opacity: 0,
         stagger: 0.010,
         duration: 0.30,
      })
      // Show Video section
      .from("#video", {
         opacity: 0,
         display: 'none',
         duration: .5,
      }, '=-.2')
      // Hidde Quotes section
      .to("#pre-video", {
         display: 'none',
      }, '<')
      // Control video on scroll
      .to(video, {
         duration: 1,
         onUpdate: function() {
            const progress = this.progress();
            const videoDuration = video.duration;

            if (!isNaN(videoDuration)) {
               video.currentTime = progress * videoDuration;
            }
         }
      })
      // Exit Video section
      .to("#video .video-area video", {
         opacity: 0,
         duration: .5,
      }, '=-.2')
      // Close video section
      .from("#close-video", {
         opacity: 0,
         display: 'none',
         duration: .5,
      })
      .to("#video", {
         display: 'none',
      }, '<')
      .from("#close-video .intro-area h3", {
         opacity: 0,
      })
      // .to("#close-video .intro-area .char", {
      //    filter: 'blur(10px)',
      //    opacity: 0,
      //    stagger: 0.010,
      //    duration: 0.30,
      // })
      // });


      particlesJS("particles-js", {
         particles: {
             number: { value: 50, density: { enable: false, value_area: 0 } },
             color: { value: "#fff" },
             shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 3 }, image: { src: "img/github.svg", width: 100, height: 100 } },
             opacity: { value: .8, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
             size: { value: 1, random: true, anim: { enable: false, speed: 1, size_min: 0, sync: false } },
             line_linked: { enable: false, distance: 500, color: "#ffffff", opacity: 0.4, width: 2 },
             move: { enable: true, speed: 1, direction: "bottom", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
         },
         interactivity: {
             detect_on: "canvas",
             events: { onhover: { enable: false, mode: "bubble" }, onclick: { enable: false, mode: "repulse" }, resize: true },
             modes: {
                 grab: { distance: 0, line_linked: { opacity: 0.5 } },
                 bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
                 repulse: { distance: 200, duration: 0.4 },
                 push: { particles_nb: 4 },
                 remove: { particles_nb: 2 },
             },
         },
         retina_detect: true,
     });

    console.log("Window is ready");
 })