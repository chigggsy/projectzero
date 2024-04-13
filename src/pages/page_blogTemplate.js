import gsap from 'gsap' // That's everything you need

const pageBlogTemplate = () => {
  const animations = () => {
    let mm = gsap.matchMedia()
    const tl_page = gsap.timeline()

    mm.add('(min-width: 992px)', () => {
      console.log('desktop size')
      tl_page
        .from(
          '.blog_post-hero-image-wrapper img',
          { duration: 1.3, scale: 1.5, ease: 'power3.inOut' },
          0
        )
        .from(
          '.blog_post-hero-image-wrapper',
          {
            duration: 1.3,
            height: '100vh',
            ease: 'power3.inOut',
          },
          0.15
        )
        .from(
          '.section_heading h1',

          { duration: 1, y: 30, opacity: 0, ease: 'power3.inOut' },
          0.6
        )
        .to('.cursor_wrapper', { duration: 0.5, opacity: 1 }, 0)
    })
    mm.add('(max-width: 991px)', () => {
      console.log('mobile size')
      tl_page
        .from(
          '.blog_post-hero-image-wrapper img',
          { duration: 1.3, scale: 1.5, ease: 'power3.inOut' },
          0
        )
        .from(
          '.blog_post-hero-image-wrapper',
          {
            duration: 1.3,
            height: '60vh',
            ease: 'power3.inOut',
          },
          0.15
        )
        .from(
          '.section_heading h1',

          { duration: 1, y: 30, opacity: 0, ease: 'power3.inOut' },
          0.6
        )
        .to('.cursor_wrapper', { duration: 0.5, opacity: 1 }, 0)
    })
  }

  animations()
}

export default pageBlogTemplate
