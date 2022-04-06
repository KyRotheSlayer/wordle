module.exports = {
  content: ["./wordle.html","Layout.js","KeyboardInputs.js"],
  theme: {
    extend: {
      keyframes: {
        firstoneopen:{
          '0%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '100%': { transform: 'translateY(12px) rotate(45deg) scale(1.25)' },
        },
        secondoneopen:{
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(-45deg) scale(1.25)' },
        },
        thirdoneopen:{
          '0%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '100%': { transform: 'translateY(-12px) rotate(45deg) scale(1.25)' },
        },
        firstoneclose:{
          '0%': { transform: 'translateY(12px) rotate(45deg) scale(1.25)' },
          '100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
        },
        secondoneclose:{
          '0%': { transform: 'rotate(-45deg) scale(1.25)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        thirdoneclose:{
          '0%': { transform: 'translateY(-12px) rotate(45deg) scale(1.25)' },
          '100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
        }
      },
      animation:{
        firstoneopen:'firstoneopen 0.5s ease-in-out',
        secondoneopen:'secondoneopen 0.5s ease-in-out',
        thirdoneopen:'thirdoneopen 0.5s ease-in-out',
        firstoneclose:'firstoneclose 0.5s ease-in-out',
        secondoneclose:'secondoneclose 0.5s ease-in-out',
        thirdoneclose:'thirdoneclose 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
