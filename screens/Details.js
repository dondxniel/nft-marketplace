import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	FlatList,
	StatusBar,
	Image,
} from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";
import {
	CircleButton,
	RectButton,
	SubInfo,
	FocusedStatusBar,
	DetailsDesc,
	DetailsBid,
} from "../components";

function DetailsHeader({ data, navigation }) {
	return (
		<View style={{ width: "100%", height: 373 }}>
			<Image
				source={data.image}
				resizeMode="cover"
				style={{ width: "100%", height: "100%" }}
			/>
			<CircleButton
				imgUrl={assets.left}
				top={15}
				left={15}
				handlePress={() => navigation.goBack()}
			/>
			<CircleButton imgUrl={assets.heart} top={15} right={15} />
		</View>
	);
}

function Details({ route, navigation }) {
	const { data } = route.params;
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>
			<View
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					paddingVertical: SIZES.font,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(255, 255, 255, 1)",
					zIndex: 1,
				}}
			>
				<RectButton
					minWidth={170}
					fontSize={SIZES.large}
					{...SHADOWS.dark}
				/>
			</View>
			<FlatList
				data={data.bids}
				renderItem={(item) => <DetailsBid bid={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
				ListHeaderComponent={() => {
					return (
						<>
							<DetailsHeader
								data={data}
								navigation={navigation}
							/>
							<SubInfo />
							<View style={{ padding: SIZES.font }}>
								<DetailsDesc data={data} />
								{data.bids.length > 0 && (
									<Text
										fontSize={{
											fontSize: SIZES.font,
											fontFamily: FONTS.semiBold,
											color: COLORS.primary,
										}}
									>
										Current Bid
									</Text>
								)}
							</View>
						</>
					);
				}}
			/>
		</SafeAreaView>
	);
}

export default Details;
