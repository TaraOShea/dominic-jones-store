import operator from 'operator'

/**
 * operator is a tiny "PJAX" library, please have a look at the docs for
 * more info
 *
 * @see https://github.com/estrattonbailey/operator
 */
const router = operator('#root', [
  /**
   * creates a page transition
   * @see https://github.com/estrattonbailey/operator#transition-animation
   */
  (state) => new Promise(res => {
    document.body.classList.add('is-transitioning')
    setTimeout(res, 200)
    setTimeout(() => document.body.classList.remove('is-transitioning'), 300)
  })
])

router.on('after', ({ previousDocument, location }) => {
  document.title = previousDocument.title
  window.history.pushState({}, '', location)
})


export default router
