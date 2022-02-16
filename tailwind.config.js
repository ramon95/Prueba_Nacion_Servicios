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
      steel:	'#CCCCCC',	
      Water:	'#B0E2FF',	
      bug:	'#99CC33',
      dragon:	'#AB82FF',	
      electric:	'#FFD700',	
      ghost:	'#778899',	
      fire:	'#FF7F00',	
      fairy:	'#FFB0FF',	
      ice:	'#ADD8E6',	
      struggle:	'#FF6A6A',	
      normal:	'#DDCCAA',	
      plant:	'#99FF66',	
      psychic:	'#FFB5C5',	
      rock:	'#CD853F',	
      sinister:	'#A9A9A9',	
      earth:	'#DEB887',	
      poison:	'#CC88BB',	
      flying:	'#BAAAFF',
			alert: {
				success: '#37a211',
				warning: '#f49b00',
				error: '#f40000',
			},
			white: '#FFFFFF',
      link: '#2e56e8'
		},
    extend: {

    },
  },
  plugins: [],
}
