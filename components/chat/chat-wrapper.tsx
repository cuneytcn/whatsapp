import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import ChatItem from "./chat-item";

export default function ChatWrapper() {
	return (
		<ScrollView className="flex flex-col gap-4 px-6">
			<FlatList
				showsVerticalScrollIndicator={false}
				data="111111111111111"
				renderItem={({ item }) => <ChatItem />}
			/>
		</ScrollView>
	);
}
