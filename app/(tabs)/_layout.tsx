import { Tabs } from "expo-router";
import React from "react";
import { Icon } from "../../components/icon";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "black",
				tabBarStyle: {
					borderTopColor: "white",
					shadowColor: "transparent",
					height: 60,
				},
				tabBarItemStyle: {
					padding: 10,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontFamily: "Quicksand_600SemiBold",
				},
			}}>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					tabBarLabel: "Messages",
					tabBarIcon: () => <Icon.Messages />,
				}}
			/>
			<Tabs.Screen
				name="update"
				options={{
					headerShown: false,
					tabBarLabel: "Updates",
					tabBarIcon: () => <Icon.Update />,
				}}
			/>
			<Tabs.Screen
				name="communities"
				options={{
					headerShown: false,
					tabBarLabel: "Communities",
					tabBarIcon: () => <Icon.Communities />,
				}}
			/>
			<Tabs.Screen
				name="calls"
				options={{
					headerShown: false,
					tabBarLabel: "Calls",
					tabBarIcon: () => <Icon.Call />,
				}}
			/>
		</Tabs>
	);
}
