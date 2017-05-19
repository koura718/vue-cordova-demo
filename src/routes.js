export default [
//  {
//    path: '/',
//    name: 'landing-page',
//    component: require('components/LandingPageView')
//  },
  {
    path: '/',
    name: 'app2',
    component: require('./App2')
  },
  {
    path: '*',
    redirect: '/'
  }
]
