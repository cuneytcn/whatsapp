/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				"primaty-light": ["Quicksand_300Light", "system-ui"],
				"primaty-regular": ["Quicksand_400Regular", "system-ui"],
				"primaty-medium": ["Quicksand_500Medium", "system-ui"],
				"primaty-semibold": ["Quicksand_600SemiBold", "system-ui"],
				"primaty-bold": ["Quicksand_700Bold", "system-ui"],
			},
		},
	},
	plugins: [],
};
