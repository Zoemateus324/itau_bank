/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('../assets/bg-hero.jpg')"
    },
    extend: {
      colors: {
        'primary-blue': '#106EB0',
        'primary-orange': '#EC7000',
        'primary-gray': '#33303E',
        'secondary-gray': '#4E4B59',
        'gray-phone': '#F0F4F5',
        'txt-gray': '#7A7786',
        'opacity-gray': 'rgba(100,80,57,0.1)',
        
      },

    },
  },
  plugins: [],
}

