/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // 确保路径正确
    './public/index.html', // 如果有 HTML 文件也需要包含
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

