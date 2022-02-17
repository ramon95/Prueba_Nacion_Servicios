module.exports = {
  mode: 'jit',
  content: [
	  "./src/**/*.{html,js,jsx}",
	  "./pages/**/*.{html,js,jsx}"
	],
  theme: {
    screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1700px',
		},
		fontFamily: {
			arial: ['Arial', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
		},
		colors: {
      normal:	'#DDCCAA',
      fighting:	'#FF6A6A',
      flying:	'#BAAAFF',
      poison:	'#CC88BB',
      ground:	'#DEB887',
      rock:	'#CD853F',
      bug:	'#99CC33',
      ghost:	'#778899',
      steel:	'#CCCCCC',
      fire:	'#FF7F00',
      water:	'#B0E2FF',
      grass:	'#99FF66',
      electric:	'#FFD700',
      psychic:	'#FFB5C5',
      ice:	'#ADD8E6',
      dragon:	'#AB82FF',
      dark:	'#A9A9A9',
      fairy:	'#FFB0FF',
      unknown: '#C0C0C0',
      shadow: '#424242',
			alert: {
				success: '#37a211',
				warning: '#f49b00',
				error: '#f40000',
			},
			white: '#FFFFFF',
      link: '#2e56e8',
      gray_light: "#f2f2f2",
      box: "#30a7d7",
      box_stats: "#a4a4a4"
		},
    extend: {

    },
  },
  plugins: [],
}
