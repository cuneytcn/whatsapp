import { View, Text, Pressable } from "react-native";
import React from "react";
import { Icon } from "./icon";

export default function TabHeader({ label }: { label?: string }) {
	return (
		<View className="flex h-16 flex-row items-center justify-between px-6">
			<Text className="font-primaty-semibold text-3xl text-black">{label}</Text>

			<View className="flex flex-row items-center">
				<Pressable
					onPress={() => {}}
					className="flex h-10 w-10 items-center justify-center p-2">
					<Icon.Camera />
				</Pressable>

				<Pressable
					onPress={() => {}}
					className="flex h-10 w-10 items-center justify-center p-2">
					<Icon.Search />
				</Pressable>

				<Pressable
					onPress={() => {}}
					className="-ml-2 flex h-10 w-10 items-center justify-center p-2">
					<Icon.EllipsesHorizontal />
				</Pressable>
			</View>
		</View>
	);
}
