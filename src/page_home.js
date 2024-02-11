// Declaration
const pageHome = () => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("ease_pz", "M0,0 C0,0.24 0.08,1 1,1 ");

    function init() {
        // Split Texts
        const st_loadingLine = new SplitType(".preloader_line", {
            types: "words",
        });
        const st_heroHeading = new SplitType(
            ".section_hero-heading-container h1",
            { types: "words" }
        );

        // Animation
        const tl_preloader = gsap.timeline();
        tl_preloader
            .set(".preloader_statement", { opacity: 1 })
            .from(
                st_loadingLine.words,
                2,
                { y: 30, opacity: 0, stagger: 0.03, ease: "power3.inOut" },
                0
            )
            .to(
                st_loadingLine.words,
                2,
                { y: -30, opacity: 0, stagger: 0.03, ease: "power3.inOut" },
                5
            )
            .to(".section_preloader", 0.5, { opacity: 0 }, 7)
            .to(".page-wrapper", 0, { overflow: "visible", height: "auto" }, 7)
            .to(".section_preloader", 0, { display: "none" }, 7)
            .to(".cursor_wrapper", 0.5, { opacity: 1 }, 7) // Preloader animation finished
            .from(
                ".nav_link-item-wrapper",
                1,
                { opacity: 0, stagger: 0.07, ease: "ease_pz" },
                7
            )
            .from(
                ".countdown_item",
                1,
                { opacity: 0, stagger: 0.07, ease: "power3.inOut" },
                7
            )
            .from(
                ".section_hero-image",
                0.75,
                { opacity: 0, scale: 1.75, ease: "ease_pz" },
                7
            )
            .from(
                st_heroHeading.words,
                1,
                { y: 30, opacity: 0, stagger: 0.01, ease: "power3.inOut" },
                7
            )
            .from(
                ".lottie_journey-home",
                0.5,
                { opacity: 0, ease: "power3.inOut" },
                7
            )
            .from(
                ".form_launch-input-wrapper",
                1,
                { y: 25, opacity: 0, ease: "ease_pz" },
                7.5
            )
            .from(
                ".form_launch .button",
                1,
                { y: 25, opacity: 0, ease: "ease_pz" },
                7.6
            )
            .from(
                ".marquee_svg path",
                0.7,
                { y: "100%", stagger: 0.02, ease: "ease_pz" },
                7.5
            )
            .from(
                ".is-hero-tag",
                1,
                { opacity: 0, stagger: 0.07, ease: "power3.inOut" },
                7.5
            );
    }

    window.addEventListener("load", function (event) {
        init();
    });

    // Summary Section
    const accordionItems = document.querySelectorAll(".summary_accordion-item");
    const summaryAccordionTag = document.querySelector(".summary_accordion");
    const anim_ease = "ease_pz";
    const anim_duration = 0.55;

    gsap.set(".summary_accordion", { gridTemplateColumns: "2fr 1fr 1fr" });
    gsap.set(
        ".is-item-02 .accordion_content-wrapper, .is-item-03 .accordion_content-wrapper",
        { height: "0%" }
    );
    gsap.set(".is-item-02, .is-item-03", { gap: 0 });

    accordionItems.forEach((item, index) => {
        // Clicking interactions
        item.addEventListener("click", function () {
            const tl = gsap.timeline({
                defaults: {
                    ease: anim_ease,
                    duration: anim_duration,
                },
            });

            let gridColumnValue =
                "1fr ".repeat(index) + "2fr " + "1fr ".repeat(2 - index);
            tl.to(
                ".summary_accordion",
                { gridTemplateColumns: gridColumnValue.trim() },
                0
            ) // Adjusting grid
                .to(
                    `.${item.classList[1]} .accordion_content-wrapper`,
                    { height: "auto" },
                    0
                ) // Increase height of .is-item-XX
                .to(
                    `.${item.classList[1]}`,
                    { gap: "clamp(2rem, 0.5692rem + 2.3077vw, 5rem)" },
                    0
                ); // Increase gap of .is-item-XX
            accordionItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    tl.to(
                        `.${otherItem.classList[1]} .accordion_content-wrapper`,
                        { height: "0%" },
                        0
                    ).to(`.${otherItem.classList[1]}`, { gap: 0 }, 0);
                    otherItem.classList.remove("is-item-selected");
                }
            });

            item.classList.add("is-item-selected");
        });
    });

    function updateSummarySectionHeight() {
        // Keep the height of the container the same
        summaryAccordionTag.style.height = `${summaryAccordionTag.clientHeight}px`;
    }
    updateSummarySectionHeight();
    window.addEventListener("resize", function () {
        summaryAccordionTag.style.height = "auto";
        setTimeout(updateSummarySectionHeight, 1);
    });
};

// Activation
pageHome();
