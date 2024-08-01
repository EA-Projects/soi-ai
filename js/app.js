 $(window).ready(function(){

    // SPLIT HOVER
    let quoteText = $('[data-quote="words"]');
    let quoteWords = new SplitType(quoteText);

    const video = document.getElementById('video');

    // Asegurarse de que el video esté cargado
      video.addEventListener('loadedmetadata', function() {
         let heroAnimation = gsap.timeline({
            scrollTrigger: {
               trigger: 'main',
               start: '0% 0%',
               end: '100% 75%',
               scrub: 0.5,
               markers: true,
            }
         });

         heroAnimation
         //Intro page
         .to("#zero .intro-area", {
            width: '100vw',
            height: '100vh',
            borderRadius: '0',
            duration: .5,
         })
         .to("#zero .intro-area h1", {
            opacity: 0,
         }, '=-.2')
         // Show quotes section
         .from("#first", {
            opacity: 0,
            display: 'none',
            duration: .5,
         })
         // Hidde Intro section
         .to("#zero", {
            display: 'none',
         }, '<')
         // First quote
         .fromTo("#first .quotes.is-first .char", {
            opacity: 0,
         }, {
            opacity: 1,
            stagger: 0.030,
            duration: 0.60,
         })
         .to("#first .quotes.is-first .char", {
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         })
         // Second quote
         .fromTo("#first .quotes.is-second .char", {
            opacity: 0,
         }, {
            opacity: 1,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .to("#first .quotes.is-second .char", {
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         })
         // Third quote
         .fromTo("#first .quotes.is-third .char", {
            opacity: 0,
         }, {
            opacity: 1,
            stagger: 0.030,
            duration: 0.60,
         }, '=-.1')
         .to("#first .quotes.is-third .char", {
            opacity: 0,
            stagger: 0.010,
            duration: 0.30,
         })
         // Show Video section
         .from("#second", {
            opacity: 0,
            display: 'none',
            duration: .5,
         }, '=-.2')
         // Hidde Quotes section
         .to("#first", {
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
         .to("#second .video-area video", {
            opacity: 0,
            duration: .5,
         }, '=-.2')
         .to("#second .video-area", {
            width: '90%',
            borderRadius: '0 0 30px 30px',
            duration: .5,
         }, '<');
      });
    console.log("Window is ready");
 })
