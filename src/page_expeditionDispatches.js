const pageExpeditionDispatches = () => {
    // Animations ------------------------------------------------------------------------------------------------------------
    gsap.registerPlugin(CustomEase);
    CustomEase.create("ease_pz", "M0,0 C0,0.24 0.08,1 1,1 ");

    function init() {
        // Split Texts
        const st_heroHeading = new SplitType(".section_heading h2", {
            types: "words",
        });

        // Animation
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
    }

    window.addEventListener("load", function (event) {
        init();
    });

    // Nanook Stats -----------------------------------------------------------------------------------------------------------
    window.onload = async () => {
        // Collect html elements
        const speedTag = document.querySelector('[w-el="speed"]');
        const bearingTag = document.querySelector('[w-el="bearing"]');
        const distanceTag = document.querySelector('[w-el="distance"]');
        const durationTag = document.querySelector('[w-el="duration"]');

        // Update stats
        await Wized.request.execute("GetNanookStats");
        const apiSpeed = await Wized.data.get("r.2.d.data.speed_kts");
        const apiBearing = await Wized.data.get("r.2.d.data.bearing");
        const apiDistance = await Wized.data.get("r.2.d.data.distance_km");
        const apiDuration = await Wized.data.get("r.2.d.data.duration");
        speedTag.innerText = apiSpeed;
        bearingTag.innerText = apiBearing;
        distanceTag.innerText = apiDistance;
        durationTag.innerText = apiDuration;
    };
};

pageExpeditionDispatches();