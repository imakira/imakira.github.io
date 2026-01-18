/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./public/index.html",
      "./src/**/*.{js,cljc,cljs,clj,html,org}",
      "./resources/**/*.{js,cljc,cljs,clj,html,org}",
      "./blogs/**/*.{js,cljc,cljs,clj,html,org}"
  ],
  theme: {
    extend: {},
  },
    plugins: [
     plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        },
        '.sideways-rl': {
          writingMode: 'sideways-rl'
        },
        '.sideways-lr':{
          writingMode: 'sideways-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}
