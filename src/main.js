import './styles/style.css'
import pageGlobal from './pages/global'
import pageHome from './pages/page_home'

// Global
pageGlobal()
pageHome()

// Page specific
if (window.location.pathname === '/') {
  console.log('Home Page')
} else if (window.location.pathname === '/climate-importance') {
  console.log('Climate Importance Page')
} else if (window.location.pathname === '/expedition-dispatches') {
  console.log('Expedition Dispatches Page')
} else if (window.location.pathname === '/journey') {
  console.log('Journey Page')
} else if (window.location.pathname === '/series') {
  console.log('Series Page')
}
