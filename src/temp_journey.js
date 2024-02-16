const pageJourney = () => {
    // Registering plugins
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    CustomEase.create("ease_pz", "M0,0 C0,0.24 0.08,1 1,1 ");

    const animations = () => {
        const introAnimation = () => {
            // Splitting Type
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
                );
        };

        const scrollAnimation = () => {
            console.log("scrollAnimation is loading");
            const imageWrapperList = gsap.utils.toArray(
                ".character_image-wrapper"
            );
            imageWrapperList.forEach((imageWrapper) => {
                const image = imageWrapper.querySelector("img");

                const tl_imageParallax = gsap.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: {
                        trigger: imageWrapper,
                        start: "top 100%",
                        end: "bottom 0%",
                        scrub: true,
                        markers: true,
                    },
                });
                tl_imageParallax.fromTo(
                    image,
                    {
                        y: 100,
                    },
                    {
                        y: -100,
                    },
                    0
                );
            });
        };

        introAnimation();
        scrollAnimation();
    };

    const characterSticky = () => {
        function adjustDetailsPosition() {
            // Get all wrapper elements
            const wrapperElements =
                document.querySelectorAll(".character_wrapper");

            // Get viewport height and calculate center point
            const viewportHeight = window.innerHeight;
            const centerPoint = viewportHeight / 2;

            // Iterate over each wrapper element
            wrapperElements.forEach((wrapper) => {
                // Get the character_details within this wrapper
                const detailsElement =
                    wrapper.querySelector(".character_details");

                // Get the details height
                const detailsHeight = detailsElement.offsetHeight;

                // Calculate the sticky top offset
                const topOffset = centerPoint - detailsHeight / 2;

                // Set the top style property to topOffset pixels
                detailsElement.style.top = `${topOffset}px`;
            });
        }

        function adjustSketchPosition() {
            // Get all wrapper elements
            const wrapperElements = document.querySelectorAll(
                ".character_sketch-wrapper"
            );

            // Get viewport height and calculate center point
            const viewportHeight = window.innerHeight;
            const centerPoint = viewportHeight / 2;

            // Iterate over each wrapper element
            wrapperElements.forEach((wrapper) => {
                // Get the character_details within this wrapper
                const sketchElement =
                    wrapper.querySelector(".character_sketch");

                // Get the details height
                const sketchHeight = sketchElement.offsetHeight;

                // Calculate the sticky top offset
                const topOffset = centerPoint - sketchHeight / 2;

                // Set the top style property to topOffset pixels
                sketchElement.style.top = `${topOffset}px`;
            });
        }

        // Call adjustDetailsPosition initially
        adjustDetailsPosition();
        adjustSketchPosition();

        // Add event listeners for window resize
        window.addEventListener("resize", adjustDetailsPosition);
        window.addEventListener("resize", adjustSketchPosition);
    };

    characterSticky();
    animations();
};

pageJourney();
