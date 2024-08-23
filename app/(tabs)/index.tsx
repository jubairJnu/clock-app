import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// expanded

type TRowProps = {
  label: string;
  value: string;
};

const RowView = ({ label, value }:TRowProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 10,
            color: "#303030",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter-bold",
            fontSize: 20,
            color: "#303030",

            textTransform: "capitalize",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

// main

export default function HomeScreen() {
  const [showMore, setShowMore] = useState(false);

  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground
      source={require("../../assets/light-bg.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 65,
          paddingHorizontal: 28,
        }}
      >
        {/* upper */}

        {!showMore && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 12,
                  color: "#fff",
                }}
              >
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontFamily: "Inter-bold",
                  color: "#fff",
                }}
              >
                - Ada Lovelace
              </Text>
            </View>
            {/* icon */}
            <Image source={require("../../assets/refresh.png")} />
          </View>
        )}

        {/* upper closse */}

        {/* bottom portion */}

        <View style={{ marginBottom: 26 }}>
          {/* icon and text */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image source={require("../../assets/sun.png")} />
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Inter-Regular",
                fontSize: 15,
                color: "#fff",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Good Morning
            </Text>
          </View>
          {/* time */}

          <View>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter-bold",
                  fontSize: 100,
                  color: "#fff",
                }}
              >
                11:37
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                BST
              </Text>
            </Text>
          </View>
          {/* location */}

          <View>
            <Text
              style={{
                textTransform: "uppercase",
                fontFamily: "Inter-bold",
                fontSize: 15,
                color: "white",
                letterSpacing: 3,
              }}
            >
              in london uk
            </Text>
          </View>

          {/* button*/}

          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              flexDirection: "row",
              height: 40,
              width: 115,
              backgroundColor: "#fff",
              borderRadius: 30,
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 16,
              paddingRight: 4,
              marginTop: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-bold",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              {showMore ? "Less" : "More"}
            </Text>
            <Image
              source={
                showMore
                  ? require("../../assets/arrow-up.png")
                  : require("../../assets/arrow-down.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* expanded view */}

      {showMore && (
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView label={"Current Timezone"} value={"europe/london"} />
          <RowView label={"Day of the Year"} value={"295"} />
          <RowView label={"day of the week"} value={"5"} />
          <RowView label={"week  number"} value={"42"} />
        </View>
      )}
    </ImageBackground>
  );
}
