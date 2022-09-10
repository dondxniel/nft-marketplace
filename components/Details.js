import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { ETHPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export function DetailsDesc({ data }) {
	const [desc] = useState(data.description.slice(0, 100));
	const [readmore, setReadmore] = useState(false);
	return (
		<>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<NFTTitle
					title={data.name}
					subtitle={data.creator}
					titleSize={SIZES.extraLarge}
					subtitleSize={SIZES.font}
				/>
				<ETHPrice price={data.price} />
			</View>
			<View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
				<Text
					style={{
						fontSize: SIZES.font,
						fontFamily: FONTS.semiBold,
						color: COLORS.primary,
					}}
				>
					Description
				</Text>
				<View style={{ marginTop: SIZES.base }}>
					<Text
						style={{
							fontSize: SIZES.small,
							fontFamily: FONTS.regular,
							color: COLORS.secondary,
							lineHeight: SIZES.large,
						}}
					>
						{readmore ? data.description : desc}
						{readmore ? (
							<>
								<Text>...</Text>
								<TouchableOpacity
									onPress={() => setReadmore(false)}
								>
									<Text
										style={{
											fontSize: SIZES.small,
											fontFamily: FONTS.bold,
											paddingTop: 15,
											color: COLORS.secondary,
											lineHeight: SIZES.large,
										}}
									>
										Read less
									</Text>
								</TouchableOpacity>
							</>
						) : (
							<>
								<Text>...</Text>
								<TouchableOpacity
									onPress={() => setReadmore(true)}
								>
									<Text
										style={{
											fontSize: SIZES.small,
											fontFamily: FONTS.bold,
											paddingTop: 15,
											color: COLORS.secondary,
											lineHeight: SIZES.large,
										}}
									>
										Read more
									</Text>
								</TouchableOpacity>
							</>
						)}
					</Text>
				</View>
			</View>
		</>
	);
}

export function DetailsBid({ bid }) {
	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginVertical: SIZES.base,
				paddingHorizontal: SIZES.base * 2,
			}}
		>
			<Image
				source={bid.item.image}
				resizeMode="contain"
				style={{ width: 48, height: 48 }}
			/>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 10,
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						fontSize: SIZES.small,
						fontFamily: FONTS.semiBold,
						color: COLORS.primary,
					}}
				>
					Bid placed by {bid.item.name}.
				</Text>
				<Text
					style={{
						fontSize: SIZES.small - 2,
						fontFamily: FONTS.regular,
						color: COLORS.secondary,
						marginTop: 3,
					}}
				>
					{bid.item.date}.
				</Text>
			</View>
			<ETHPrice price={bid.item.price} />
		</View>
	);
}
