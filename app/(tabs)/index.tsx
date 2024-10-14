import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../../components/tab-header";
import ChatWrapper from "../../components/chat/chat-wrapper";

export default function index() {
	return (
		<SafeAreaView className="flex-1">
			<TabHeader label="Messages" />
			<ChatWrapper />
		</SafeAreaView>
	);
}
