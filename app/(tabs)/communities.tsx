import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../../components/tab-header";

export default function index() {
	return (
		<SafeAreaView>
			<TabHeader label="Communities" />
		</SafeAreaView>
	);
}
