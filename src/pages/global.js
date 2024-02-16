import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'

const pageGlobal = () => {
  // Declaring the global functions
  const globalCustomCursor = () => {
    // Cursor rotating and following the mouse
    let $compass = $('.compass_container')
    let x = 0
    let y = 0
    let mouseX = 0
    let mouseY = 0
    let speed = 0
    let rotate = 0

    $(window).on('mousemove', function (e) {
      // get the difference between current mouse position and the last one
      let dx = e.clientX - mouseX
      let dy = e.clientY - mouseY

      // save the current mouse position
      mouseX = e.clientX
      mouseY = e.clientY

      // calculate the speed
      speed = Math.sqrt(dx * dx + dy * dy)

      // calculate rotation (clamp it between -90 and 90 degrees)
      rotate = gsap.utils.clamp(-90, 90, speed / 0.8)

      // apply opposite rotation when moving left
      rotate = dx > 0 ? -rotate : rotate

      // animate the compass position and rotation
      gsap.to($compass, {
        x: mouseX,
        y: mouseY,
        rotation: rotate,
        onUpdate: function () {
          // ease rotation back to zero when mouse stops
          this.targets()[0].style.transform += `translate(-50%, -50%) rotate(${gsap.utils.interpolate(
            this.vars.rotation,
            0,
            this.progress()
          )}deg)`
        },
        onComplete: function () {
          // reset rotation to zero when animation completes
          this.targets()[0].style.transform += ' rotate(0deg)'
        },
        ease: 'power3.out', // ease out for smoother animation
      })
    })

    // When hovering over the button, toggle the classes
    $('.button').on('mouseenter mouseleave', function () {
      // $(".compass_container").toggleClass("mouse_int-link");
    })

    $(document).on(
      'mouseenter mouseleave',
      '.summary_accordion-item.is-item-selected',
      function () {
        $('.mouse_container').toggleClass('mouse_int-spotlight')
        $('.compass_container').toggleClass('mouse_int-spotlight-wrapper')
      }
    )

    $('.summary_accordion-item').on('click', function () {
      if (!$(this).hasClass('is-item-selected')) {
        $('.mouse_container').toggleClass('mouse_int-spotlight')
        $('.compass_container').toggleClass('mouse_int-spotlight-wrapper')
      }
    })

    $(document).on('mouseenter mouseleave', '.nav_', function () {
      $('.mouse_container').toggleClass('mouse_int-spotlight')
      $('.compass_container').toggleClass('mouse_int-spotlight-wrapper')
    })
  }

  const globalButtons = () => {
    gsap.registerPlugin(CustomEase)

    const buttonTags = document.querySelectorAll('.button')

    // Variables for button
    const duration = 0.45
    CustomEase.create('ease_pz', 'M0,0 C0,0.24 0.08,1 1,1 ')

    buttonTags.forEach((buttonTag) => {
      // Timeline
      const onHover_tl = gsap.timeline({
        defaults: { ease: 'none' },
        paused: true,
      })

      onHover_tl
        .to(
          buttonTag.querySelector('.button_text-fill'),
          duration,
          { top: '0%' },
          0
        )
        .to(
          buttonTag.querySelector('.button_icon-container'),
          duration,
          { x: 12 },
          0
        )
        .to(
          buttonTag.querySelector('.button_icon-fill'),
          duration,
          { left: '0%', rotate: 90 },
          0
        )
        .to(
          buttonTag.querySelector('.button_arrow-primary'),
          duration,
          { x: 50, rotate: 90 },
          0
        )

      // Interactions
      buttonTag.addEventListener('mouseenter', () => {
        gsap.to(onHover_tl, {
          time: onHover_tl.duration(),
          ease: 'ease_pz',
        })
      })

      buttonTag.addEventListener('mouseleave', () => {
        gsap.to(onHover_tl, { time: 0, ease: 'ease_pz' })
      })
    })
  }

  const globalLenis = () => {
    const lenis = new Lenis()

    /* lenis.on("scroll", (e) => {
      console.log(e);
  }); */

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  const globalNav = () => {
    const sectionList = document.querySelectorAll('section')
    const navTag = document.querySelector('nav')

    document.addEventListener('scroll', function () {
      const scrollAmount = window.pageYOffset
      sectionList.forEach((section) => {
        if (section.offsetTop <= scrollAmount) {
          navTag.classList.remove(
            'nav-style-dark',
            'nav-style-light',
            'nav-style-black',
            'nav-style-transparent'
          )
          navTag.classList.add(section.getAttribute('data-nav'))
        }
      })
    })

    // Toggle transparent class when opening and closing mobile nav
    $('.navbar_hamburger-wrapper').on('click', function () {
      $('.navbar').toggleClass('nav_mobile-open')
    })

    // Toggle scroll when opening and closing mobile nav
    $('.navbar_hamburger-wrapper').on('click', function () {
      $('body').toggleClass('nav_overflow-hidden')
    })
  }

  // Activating the global functions
  globalCustomCursor()
  globalButtons()
  globalLenis()
  globalNav()
}

export default pageGlobal
