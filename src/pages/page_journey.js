import Splide from '@splidejs/splide'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import $ from 'jquery'
import SplitType from 'split-type'
import '@splidejs/splide/css/core'

const pageJourney = () => {
  const animations = () => {
    gsap.registerPlugin(CustomEase)
    CustomEase.create('ease_pz', 'M0,0 C0,0.24 0.08,1 1,1 ')

    // Split Texts
    const st_heroHeading = new SplitType('.section_heading h2', {
      types: 'words',
    })

    // Animation
    gsap.set('.section_heading-title-wrapper', { opacity: 1 })
    const tl_page = gsap.timeline()
    tl_page
      .to(
        '.section_heading .image-hero',
        1.3,
        { scale: 1, ease: 'power3.inOut' },
        0
      )
      .from(
        '.section_heading h1',
        1,
        { y: 30, opacity: 0, ease: 'power3.inOut' },
        0.6
      )
      .from(
        st_heroHeading.words,
        1.25,
        { y: 30, opacity: 0, stagger: 0.01, ease: 'power2.inOut' },
        0.4
      )
      .to('.cursor_wrapper', 0.5, { opacity: 1 }, 0)
  }

  const characterSectionFunctionality = () => {
    function adjustDetailsPosition() {
      // Get all wrapper elements
      const wrapperElements = document.querySelectorAll('.character_wrapper')

      // Get viewport height and calculate center point
      const viewportHeight = window.innerHeight
      const centerPoint = viewportHeight / 2

      // Iterate over each wrapper element
      wrapperElements.forEach((wrapper) => {
        // Get the character_details within this wrapper
        const detailsElement = wrapper.querySelector('.character_details')

        // Get the details height
        const detailsHeight = detailsElement.offsetHeight

        // Calculate the sticky top offset
        const topOffset = centerPoint - detailsHeight / 2

        // Set the top style property to topOffset pixels
        detailsElement.style.top = `${topOffset}px`
      })
    }

    function adjustSketchPosition() {
      // Get all wrapper elements
      const wrapperElements = document.querySelectorAll(
        '.character_sketch-wrapper'
      )

      // Get viewport height and calculate center point
      const viewportHeight = window.innerHeight
      const centerPoint = viewportHeight / 2

      // Iterate over each wrapper element
      wrapperElements.forEach((wrapper) => {
        // Get the character_details within this wrapper
        const sketchElement = wrapper.querySelector('.character_sketch')

        // Get the details height
        const sketchHeight = sketchElement.offsetHeight

        // Calculate the sticky top offset
        const topOffset = centerPoint - sketchHeight / 2

        // Set the top style property to topOffset pixels
        sketchElement.style.top = `${topOffset}px`
      })
    }

    // Call adjustDetailsPosition initially
    adjustDetailsPosition()
    adjustSketchPosition()

    // Add event listeners for window resize
    window.addEventListener('resize', adjustDetailsPosition)
    window.addEventListener('resize', adjustSketchPosition)
  }

  const splideGalleries = () => {
    // Character Splide -----------------------------------------------------------------------------------------------------------------
    function slider1() {
      let splides = $('.slider1')
      for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
          // Desktop on down
          perPage: 1.1,
          perMove: 1,
          focus: 0, // 0 = left and 'center' = center
          type: 'slide', // 'loop' or 'slide'
          gap: '1rem', // space between slides
          arrows: 'slider', // 'slider' or false
          pagination: false, // 'slider' or false
          speed: 550, // transition speed in miliseconds
          easing: 'cubic-bezier(0, 0.24, 0.08, 1)', // easing
          dragAngleThreshold: 30, // default is 30
          autoWidth: false, // for cards with differing widths
          rewind: false, // go back to beginning when reach end
          rewindSpeed: 400,
          waitForTransition: false,
          updateOnMove: true,
          trimSpace: true, // true removes empty space from end of list
          breakpoints: {
            991: {
              // Tablet
            },
            767: {
              // Mobile Landscape
            },
            479: {
              // Mobile Portrait
            },
          },
        }).mount()
      }
    }
    slider1()

    function slider2() {
      let splides = $('.slider2')
      for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
          // Desktop on down
          perPage: 1,
          perMove: 1,
          focus: 0, // 0 = left and 'center' = center
          type: 'slide', // 'loop' or 'slide'
          gap: '1rem', // space between slides
          arrows: 'slider', // 'slider' or false
          pagination: false, // 'slider' or false
          speed: 550, // transition speed in miliseconds
          easing: 'cubic-bezier(0, 0.24, 0.08, 1)', // easing
          dragAngleThreshold: 30, // default is 30
          autoWidth: false, // for cards with differing widths
          rewind: false, // go back to beginning when reach end
          rewindSpeed: 400,
          waitForTransition: false,
          updateOnMove: true,
          trimSpace: true, // true removes empty space from end of list
          breakpoints: {
            991: {
              // Tablet
            },
            767: {
              // Mobile Landscape
            },
            479: {
              // Mobile Portrait
            },
          },
        }).mount()
      }
    }
    slider2()
  }

  animations()
  characterSectionFunctionality()
  splideGalleries()
}

export default pageJourney
