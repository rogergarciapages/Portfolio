/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        swiss: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          border: '#E5E7EB',
          'border-hover': '#CBD5E1',
          primary: '#111827',
          secondary: '#4B5563',
          muted: '#6B7280',
          blue: '#1D4ED8',
          'blue-hover': '#1E40AF',
          'blue-light': '#EFF6FF',
          accent: '#0284C7',
          dark: '#0A0F1D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        swiss: '-0.015em'
      },
      boxShadow: {
        'swiss-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'swiss-card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'swiss-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}
