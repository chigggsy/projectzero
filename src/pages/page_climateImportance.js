import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import SplitType from 'split-type'

const pageClimateImportance = () => {
  const animation = () => {
    // Animations ------------------------------------------------------------------------------------------------------------
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

  // Accordion ------------------------------------------------------
  $(document).ready(function () {
    $('.accordion_toggle').click(function () {
      // Store the content and icon of the clicked accordion item
      var currentAccordionContent = $(this).next('.accordion_content')
      var currentIcon = $(this).find('.accordion_icon')

      // Close all the other accordions and reset their icons
      $('.accordion_content')
        .not(currentAccordionContent)
        .removeClass('accordion_open')
        .addClass('accordion_closed')
      $('.accordion_icon')
        .not(currentIcon)
        .removeClass('accordion_icon-open')
        .addClass('accordion_icon-closed')

      // If the icon doesn't have either class, add the closed class by default
      if (
        !currentIcon.hasClass('accordion_icon-open') &&
        !currentIcon.hasClass('accordion_icon-closed')
      ) {
        currentIcon.addClass('accordion_icon-closed')
      }

      // Toggle the clicked accordion item and its icon
      if (currentAccordionContent.hasClass('accordion_open')) {
        currentAccordionContent
          .removeClass('accordion_open')
          .addClass('accordion_closed')
        currentIcon
          .removeClass('accordion_icon-open')
          .addClass('accordion_icon-closed')
      } else {
        currentAccordionContent
          .removeClass('accordion_closed')
          .addClass('accordion_open')
        currentIcon
          .removeClass('accordion_icon-closed')
          .addClass('accordion_icon-open')
      }
    })
  })

  animation()
}

export default pageClimateImportance
