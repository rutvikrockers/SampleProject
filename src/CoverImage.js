import React from "react";
import { View, Image, StyleSheet } from "react-native";
const CoverImage = () => {
  return (
    <View style={styles.profileCover}>
      <Image
        style={styles.profileCoverImage}
        source={{
          uri:
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM-970-80.jpg"
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  profileCover: {
    height: 200,
    position: "absolute",
    width: 100 + "%"
  },
  profileCoverGradient: {
    height: 200,
    width: 100 + "%",
    position: "absolute"
  },
  profileCoverImage: {
    height: 200,
    width: 100 + "%",
    position: "absolute"
  }
});

export default CoverImage;