/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      keyframes: {
        'spin-3d': {
          '0%': { transform: 'rotateX(0) rotateY(0)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'wave': {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '25%': { transform: 'translateY(-10px) rotate(2deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '75%': { transform: 'translateY(10px) rotate(-2deg)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
        'blob': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '40% 60% 70% 30% / 60% 30% 70% 40%' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'spin-3d': 'spin-3d 20s linear infinite',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-x': 'float-x 7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'scale-in': 'scale-in 0.7s ease-out forwards',
        'rotate-slow': 'rotate-slow 15s linear infinite',
        'rotate-reverse': 'rotate-slow 20s linear infinite reverse',
        'shimmer': 'shimmer 3s infinite linear',
        'wave': 'wave 10s ease-in-out infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'delay-200': 'fade-in 1.2s ease-out 0.2s forwards',
        'delay-400': 'fade-in 1.2s ease-out 0.4s forwards',
        'delay-600': 'fade-in 1.2s ease-out 0.6s forwards',
        'delay-800': 'fade-in 1.2s ease-out 0.8s forwards',
      },
    },
  },
  plugins: [],
};
