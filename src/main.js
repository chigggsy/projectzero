import './styles/style.css'
import pageGlobal from './pages/global'
import pageClimateImportance from './pages/page_climateImportance'
import pageExpeditionDispatches from './pages/page_expeditionDispatches'
import pageHome from './pages/page_home'
import pageJourney from './pages/page_journey'
import pageSeries from './pages/page_series'

import pageBlogTemplate from '.pages/page_blogTemplate'

// Global
pageGlobal()

// Page specific
if (window.location.pathname === '/') {
  pageHome()
} else if (window.location.pathname === '/climate-importance') {
  pageClimateImportance()
} else if (window.location.pathname === '/expedition-dispatches') {
  pageExpeditionDispatches()
} else if (window.location.pathname === '/journey') {
  pageJourney()
} else if (window.location.pathname === '/series') {
  pageSeries()
} else if (window.location.pathname.startsWith('/blog-posts/')) {
  pageBlogTemplate()
}
