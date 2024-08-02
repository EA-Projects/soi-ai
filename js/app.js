document.addEventListener('DOMContentLoaded', function() {

    // SPLIT HOVER
    let quoteText = $('[data-quote="words"]');
    let quoteWords = new SplitType(quoteText);

    const video = document.getElementById('video-file');

      // Asegurarse de que el video esté cargado
      // video.addEventListener('loadedmetadata', function() {
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
         .from("#quotes .quotes.is-first .data-quote *", {
            y: 5,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         }, '=-.5')
         .to("#quotes .quotes.is-first .data-quote *", {
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         })
         .to("#quotes .quotes.is-first .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         }, '<')
         // Second quote
         .from("#quotes .quotes.is-second .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .from("#quotes .quotes.is-second .data-quote *", {
            y: 5,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         }, '=-.5')
         .to("#quotes .quotes.is-second .data-quote *", {
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         })
         .to("#quotes .quotes.is-second .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         }, '<')
         // Third quote
         .from("#quotes .quotes.is-third .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .from("#quotes .quotes.is-third .data-quote *", {
            y: 5,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         }, '=-.5')
         .to("#quotes .quotes.is-third .data-quote *", {
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         })
         .to("#quotes .quotes.is-third .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         }, '<')
         // Fourth quote
         .from("#quotes .quotes.is-fourth .char", {
            filter: 'blur(10px)',
            opacity: 0,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .from("#quotes .quotes.is-fourth .data-quote *", {
            y: 5,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
         }, '=-.5')
         // .to("#quotes .quotes.is-fourth .data-quote *", {
         //    opacity: 0,
         //    stagger: 0.3,
         //    duration: 0.6,
         // })
         // .to("#quotes .quotes.is-fourth .char", {
         //    filter: 'blur(10px)',
         //    opacity: 0,
         //    stagger: 0.010,
         //    duration: 0.30,
         // }, '<')
         .to("#quotes .quotes-area", {
            width: '90%',
            borderRadius: '0 0 30px 30px',
            duration: .5,
         })
      // });



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
         duration: 5,
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
      .from("#close-video .intro-area .h3", {
         opacity: 0,
      })
      // .to("#close-video .intro-area .char", {
      //    filter: 'blur(10px)',
      //    opacity: 0,
      //    stagger: 0.010,
      //    duration: 0.30,
      // })

    console.log("Window is ready");
 })