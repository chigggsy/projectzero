import Splide from '@splidejs/splide'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'
import SplitType from 'split-type'
import '@splidejs/splide/css/core'

const pageSeries = () => {
  const animation = () => {
    gsap.registerPlugin(CustomEase, ScrollTrigger)
    CustomEase.create('ease_pz', 'M0,0 C0,0.24 0.08,1 1,1 ')

    // Split Texts
    const st_heroHeading = new SplitType('.paragraph-style-series.is-split', {
      types: 'words chars',
    })

    // Animation
    const tl_intro = gsap.timeline()
    tl_intro
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
      .to('.section_coming-soon', 1.25, { opacity: 1, ease: 'power2.inOut' }, 0)
      .to('.cursor_wrapper', 0.5, { opacity: 1 }, 0)

    // Separate timeline for words controlled by ScrollTrigger
    const tl_words = gsap.timeline({
      scrollTrigger: {
        trigger: '.paragraph-style-series',
        start: 'top 90%', // starts the animation when the top of the trigger hits the center of the viewport
        end: 'bottom 50%',
        scrub: true,
      },
    })

    tl_words.from(st_heroHeading.chars, 0.05, {
      opacity: 0.2,
      stagger: 0.01,
      ease: 'none',
    })

    const test_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_coming-soon p',
        start: 'top 75%',
        end: 'bottom 75%',
        scrub: true,
      },
    })

    test_tl.to('.image-hero.is-series', {
      opacity: 0,
    })
  }

  const splideGallery = () => {
    // Splide ------------------------------------------------------------------------------------------------------
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
  }

  const formSubmit = () => {
    const formButtonBrand = document.querySelector(
      '.register_form-wrapper .button'
    )
    const formButtonWebflow = document.querySelector('.form_submit-button')
    console.log(formButtonWebflow.innerHTML)

    const formSuccess = document.querySelector('.form_success')

    formButtonBrand.addEventListener('click', () => {
      formButtonWebflow.click()
    })

    // Hide the brand button when the success message is shown
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'style' &&
          formSuccess.style.display === 'block'
        ) {
          formButtonBrand.style.display = 'none'
        }
      })
    })
    observer.observe(formSuccess, {
      attributes: true,
      attributeFilter: ['style'],
    })
  }

  animation()
  splideGallery()
  formSubmit()
}

export default pageSeries
