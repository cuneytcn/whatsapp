import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function ChatItem() {
	return (
		<View className="mb-3 flex flex-row items-center justify-between border-b border-white/50 pb-3 last:mb-0 last:border-b-0 last:pb-0">
			<View className="flex flex-row items-center gap-4">
				<Image
					source={{
						uri: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?w=826",
						resizeMode: "cover",
					}}
					className="h-16 w-16 rounded-full bg-gray-500 object-cover"
				/>
				<View className="flex flex-col">
					<Text className="font-primaty-bold text-lg">John Doe</Text>
					<Text className="font-primaty-light">Hello World</Text>
				</View>
			</View>

			<View>
				<Text className="font-primaty-semibold text-xs text-gray-500">12/10/2024</Text>
			</View>
		</View>
	);
}
