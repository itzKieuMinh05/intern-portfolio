import tailwindScroollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // hoặc jsx nếu bạn dùng React
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

