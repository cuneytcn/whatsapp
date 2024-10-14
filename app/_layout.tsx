import * as React from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Quicksand_300Light: require("../assets/fonts/Quicksand-Light.ttf"),
		Quicksand_400Regular: require("../assets/fonts/Quicksand-Regular.ttf"),
		Quicksand_500Medium: require("../assets/fonts/Quicksand-Medium.ttf"),
		Quicksand_600SemiBold: require("../assets/fonts/Quicksand-SemiBold.ttf"),
		Quicksand_700Bold: require("../assets/fonts/Quicksand-Bold.ttf"),
	});

	React.useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
