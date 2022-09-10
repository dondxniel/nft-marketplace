import { useState } from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";

function Home() {
	const [nftData, setNFTData] = useState(NFTData);
	const handleSearch = (value) => {
		if (!value.length) return setNFTData(NFTData);
		const filteredData = NFTData.filter((item) =>
			item.name.toLowerCase().includes(value.toLowerCase())
		);
		if (filteredData.length > 0) {
			setNFTData(filteredData);
		} else {
			setNFTData(NFTData);
		}
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar background={COLORS.primary} />
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={nftData}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={
							<HomeHeader handleSearch={handleSearch} />
						}
					/>
				</View>
				<View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -1,
					}}
				>
					<View
						style={{
							height: 450,
							backgroundColor: COLORS.primary,
							borderBottomLeftRadius: 9999,
							borderBottomRightRadius: 9999,
							elevation: 5,
						}}
					/>
					<View style={{ flex: 1, backgroundColor: COLORS.white }} />
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Home;
