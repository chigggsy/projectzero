// Importing plugins
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// Declaration
const pageHome = () => {
  const animations = () => {
    gsap.registerPlugin(CustomEase)
    gsap.registerPlugin(ScrollTrigger)

    CustomEase.create('ease_pz', 'M0,0 C0,0.24 0.08,1 1,1 ')

    const anim_intro = () => {
      const el_marquee = document.querySelector('.section_marquee')
      const clientY = el_marquee.getBoundingClientRect().y
      // Split Texts
      const st_loadingLine = new SplitType('.preloader_line', {
        types: 'words',
      })
      const st_heroHeading = new SplitType(
        '.section_hero-heading-container h1',
        {
          types: 'words',
        }
      )

      // Animation
      const tl_preloader = gsap.timeline()
      tl_preloader
        .set('.preloader_statement', { opacity: 1 })
        .from(
          st_loadingLine.words,
          2,
          { y: 30, opacity: 0, stagger: 0.03, ease: 'power3.inOut' },
          0
        )
        .to(
          st_loadingLine.words,
          2,
          { y: -30, opacity: 0, stagger: 0.03, ease: 'power3.inOut' },
          5
        )
        .to('.section_preloader', 0.5, { opacity: 0 }, 7)
        .to('.page-wrapper', 0, { overflow: 'visible', height: 'auto' }, 7)
        .to('.section_preloader', 0, { display: 'none' }, 7)
        .to('.cursor_wrapper', 0.5, { opacity: 1 }, 7) // Preloader animation finished
        .from(
          '.nav_link-item-wrapper',
          1,
          { opacity: 0, stagger: 0.1, ease: 'power3.inOut' },
          7
        )
        .to('.hero_image-fill', 0.5, { top: '0%', ease: 'power3.inOut' }, 7.1)
        .set('.section_hero-image', { opacity: 1 }, 7.6)
        .to(
          '.hero_image-fill',
          0.5,
          { bottom: '100%', ease: 'power3.inOut' },
          7.6
        )
        .to('.section_hero-image', {
          y: '40%',
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section_marquee',
            start: `top ${clientY}px`,
            end: 'bottom top',
            toggleActions: 'play none none reset',
            scrub: true,
          },
        })
        .from(
          '.section_hero-image',
          1.6,
          { scale: 1.5, ease: 'power3.out' },
          7.4
        )
        .from(
          st_heroHeading.words,
          1,
          { y: 30, opacity: 0, stagger: 0.01, ease: 'power3.inOut' },
          7
        )
        .from(
          '.section_hero .button',
          1,
          { y: 20, opacity: 0, ease: 'power3.inOut' },
          7.3
        )
        .from(
          '.lottie_journey-home',
          0.5,
          { opacity: 0, ease: 'power3.inOut' },
          7
        )
        .to('.marquee_line', 1, { right: '0%', ease: 'power4.inOut' }, 7)
        .from(
          '.marquee_svg path',
          0.7,
          { y: '100%', stagger: 0.02, ease: 'ease_pz' },
          7.5
        )
        .from(
          '.is-hero-tag',
          1,
          { opacity: 0, stagger: 0.07, ease: 'power3.inOut' },
          7.5
        )
    }
    const anim_marquee = () => {
      const el_marquee = document.querySelector('.section_marquee')
      const clientY = el_marquee.getBoundingClientRect().y

      const tl_marquee = gsap.timeline({
        defaults: {
          ease: 'none',
        },
        scrollTrigger: {
          trigger: '.section_marquee',
          start: `top ${clientY}px`,
          end: 'bottom top',
          scrub: true,
        },
      })
      tl_marquee
        .to('#marquee-1', { x: '-22%' }, 0)
        .to('#marquee-2', { x: '-22%' }, 0)
    }

    const anim_summarySections = () => {
      const firstSummaryText = document.querySelector(
        '.is-item-01 .accordion_large-text'
      )

      const st_firstSummaryText = new SplitType(firstSummaryText, {
        types: 'words',
      })

      const tl_summarySections = gsap.timeline({
        scrollTrigger: {
          trigger: '.is-item-01',
          start: 'top 65%',
          toggleActions: 'play none none reverse', // change end to reverse for testing
        },
      })

      tl_summarySections
        .from(
          '.summary_accordion-item',
          {
            duration: 1,
            opacity: 0,
            scale: 0.75, //causing an issue where the map disappears or changes colour? figure this out. Something to do with `transform: translate(0px, 0px)`
            stagger: 0.1,
            ease: 'power3.out',
          },
          0
        )
        .from(
          '.summary_accordion-item .accordion_item-title p',
          {
            duration: 0.5,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.inOut',
          },
          0
        )
        .from(
          '.summary_accordion-item .accordion_item-title h1',
          {
            duration: 0.5,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.inOut',
          },
          0
        )
        .from(
          st_firstSummaryText.words,
          {
            duration: 1,
            y: 30,
            opacity: 0,
            stagger: 0.01,
            ease: 'power3.inOut',
          },
          0
        )
        .from(
          '.summary_accordion-item.is-item-01 .button',
          {
            duration: 1,
            opacity: 0,
            ease: 'power3.inOut',
          },
          0.5
        )
    }

    anim_intro()
    anim_marquee()
    anim_summarySections()
  }

  const summarySections = () => {
    // Summary Section
    const accordionItems = document.querySelectorAll('.summary_accordion-item')
    const summaryAccordionTag = document.querySelector('.summary_accordion')
    const anim_ease = 'ease_pz'
    const anim_duration = 0.55

    gsap.set('.summary_accordion', { gridTemplateColumns: '2fr 1fr 1fr' })
    gsap.set(
      '.is-item-02 .accordion_content-wrapper, .is-item-03 .accordion_content-wrapper',
      { height: '0%' }
    )
    gsap.set('.is-item-02, .is-item-03', { gap: 0 })

    accordionItems.forEach((item, index) => {
      // Clicking interactions
      item.addEventListener('click', function () {
        const tl = gsap.timeline({
          defaults: {
            ease: anim_ease,
            duration: anim_duration,
          },
        })

        let gridColumnValue =
          '1fr '.repeat(index) + '2fr ' + '1fr '.repeat(2 - index)
        tl.to(
          '.summary_accordion',
          { gridTemplateColumns: gridColumnValue.trim() },
          0
        ) // Adjusting grid
          .to(
            `.${item.classList[1]} .accordion_content-wrapper`,
            { height: 'auto' },
            0
          ) // Increase height of .is-item-XX
          .to(
            `.${item.classList[1]}`,
            { gap: 'clamp(2rem, 0.5692rem + 2.3077vw, 5rem)' },
            0
          ) // Increase gap of .is-item-XX
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            tl.to(
              `.${otherItem.classList[1]} .accordion_content-wrapper`,
              { height: '0%' },
              0
            ).to(`.${otherItem.classList[1]}`, { gap: 0 }, 0)
            otherItem.classList.remove('is-item-selected')
          }
        })

        item.classList.add('is-item-selected')
      })
    })

    function updateSummarySectionHeight() {
      // Keep the height of the container the same
      summaryAccordionTag.style.height = `${summaryAccordionTag.clientHeight}px`
    }
    updateSummarySectionHeight()
    window.addEventListener('resize', function () {
      summaryAccordionTag.style.height = 'auto'
      setTimeout(updateSummarySectionHeight, 1)
    })
  }

  animations()
  summarySections()
}

// Activation
export default pageHome
