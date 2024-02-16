import './styles/style.css'
import pageGlobal from './pages/global'
import pageClimateImportance from './pages/page_climateImportance'
import pageHome from './pages/page_home'

// Global
pageGlobal()

// Page specific
if (window.location.pathname === '/') {
  pageHome()
} else if (window.location.pathname === '/climate-importance') {
  pageClimateImportance()
} else if (window.location.pathname === '/expedition-dispatches') {
  console.log('Expedition Dispatches Page')
} else if (window.location.pathname === '/journey') {
  console.log('Journey Page')
} else if (window.location.pathname === '/series') {
  console.log('Series Page')
}
