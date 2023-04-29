import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ItemScreen", { param: data })}
            className="rounded-md border border-gray-300 space-y-2 px-1 py-2 shadow-md bg-white w-[150px] my-2"
        > 
            <Image
                source={{ uri: imageSrc }}
                className="w-full h-40 rounded-md object-cover"
            />
            {title ? (
                <>
                    <Text className="text-[#428288] text-[18px] font-bold">
                        {title?.length > 10 ? `${title.slice(0, 10)}..` : title}
                    </Text>

                    <View className="flex-row items-center space-x-2">
                        <FontAwesome name="map-marker" size={20} color="#8597A2" />
                        <Text className="text-[#428288] text-[14px] font-bold">
                            {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
                        </Text>
                    </View>
                </>
            ) : (
                <></>
            )
            }
        </TouchableOpacity>
    );
};

export default ItemCardContainer;