module.exports = {
  plugins: {
    tailwindcss: {
        config: './tailwind.config.js',
        content: [
            "./src/**/*.{js,ts,jsx,tsx}",
            "./_posts/**/*.{md,markdown}",
            "./_layouts/**/*.html",
            "./_includes/**/*.html",
            "./index.html"
        ]
    },
    autoprefixer: {
        overrideBrowserslist: [
            'last 2 versions',
            'not dead',
            '> 0.2%',
            'not op_mini all',
        ],
    },
  },
} 