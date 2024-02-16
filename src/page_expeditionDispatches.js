const pageExpeditionDispatches = () => {
    // Register plugins
    gsap.registerPlugin(CustomEase);
    CustomEase.create("ease_pz", "M0,0 C0,0.24 0.08,1 1,1 ");

    const animations = () => {
        const st_heroHeading = new SplitType(".section_heading h2", {
            types: "words",
        });

        gsap.set(".section_heading-title-wrapper", { opacity: 1 });

        const tl_page = gsap.timeline();
        tl_page
            .to(
                ".section_heading .image-hero",
                1.3,
                { scale: 1, ease: "power3.inOut" },
                0
            )
            .from(
                ".section_heading h1",
                1,
                { y: 30, opacity: 0, ease: "power3.inOut" },
                0.6
            )
            .from(
                st_heroHeading.words,
                1.25,
                { y: 30, opacity: 0, stagger: 0.01, ease: "power2.inOut" },
                0.4
            )
            .to(".cursor_wrapper", 0.5, { opacity: 1 }, 0);
    };

    const updateNanookStats = async () => {
        // Collect html elements
        const speedTag = document.querySelector('[z6z="speed"]');
        const bearingTag = document.querySelector('[z6z="bearing"]');
        const distanceTag = document.querySelector('[z6z="distance"]');
        const durationTag = document.querySelector('[z6z="duration"]');

        // Update stats
        const response = await fetch("https://api.z6z.co/api/project-zero");
        const data = await response.json();

        const apiSpeed = data.speed_kts;
        const apiBearing = data.bearing;
        const apiDistance = data.distance_km;
        const apiDuration = data.duration;

        speedTag.innerText = apiSpeed;
        bearingTag.innerText = apiBearing;
        distanceTag.innerText = apiDistance;
        durationTag.innerText = apiDuration;
    };

    // Call functions
    window.onload = async () => {
        updateNanookStats();
        animations();
    };
};

pageExpeditionDispatches();
