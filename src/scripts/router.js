import operator from 'operator'
import analytics from '@/lib/analytics.js'

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
    document.body.classList.add('is-transitioning');
    setTimeout(res, 200);
    setTimeout(() => document.body.classList.remove('is-transitioning'), 300);
  })
])

router.on('after', ({ previousDocument, location, pathname }) => {
  document.title = previousDocument.title
  window.history.pushState({}, '', location)

  analytics({
    ga: ['set', 'page', pathname],
    ga: ['send', 'pageview']
  })
})


export default router
