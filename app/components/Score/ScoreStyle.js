import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";
import { fontStyles } from "react-native-wind/dist/styles/typography/font-style";

const styles = StyleSheet.create({   

  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,

  },
  
});

export default styles;