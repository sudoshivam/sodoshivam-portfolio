// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'shivam yadav',
  domain: 'sudoshivam.me', // add without https:// , used in meta tags and share urls
  image: '/images/profile.png',
  email: 'sy76076@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'sudoshivam.me',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'sudoshivam',
    linkedin: 'sudoshivam',
    facebook: 'sudoshivam',
    twitter: 'sudoshivam',
    instagram: 'sudoshivam',
    codestats: 'sudoshivam' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: false,
    pdfUrl: '/RESUME_GYAN_KARN_DARK.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'Windows 10 Pro 64-bit'},
      {title: 'Memory', value: '8.00 GB'},
      {title: 'Processor', value: 'AMD Ryzen 5 3550H'},
      {title: 'Graphics', value: '4095MB NVIDIA GeForce GTX 1650'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'CS50', src: '/images/csfifty.png', url: 'https://cs50.harvard.edu' },
      { name: 'Opensource Dev', src: '/images/github.png', url: 'https://github.com' },
      { name: 'Fiverr', src: '/images/fiverr.png', url: 'https://fiverr.com' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  loadingIndicator: {
    name: 'folding-cube'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'skills',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'my skills',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a web developer and a part time freelancer. i create websites, apps and scripts. i spend my free time working on side projects and discussing about technology in internet forums',
        words: ['developer', 'designer', 'engineer', 'programmer', 'encoder'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'skills',
        subtext: 'i\'ve worked with multiple technologies as a developer. i have experience in graphic design, mod testing, and rom development. these are some of the technolgies that i know.'
      },
      recentBlog: {
        header: 'skills',
        subtext: 'i specialize in JavaScript and React but i\'m pretty comfortable with other echnologies as well!',
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects.'
      }
    }
  }
}
