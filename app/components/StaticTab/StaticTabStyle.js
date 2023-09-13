import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";
import { fontStyles } from "react-native-wind/dist/styles/typography/font-style";
import { alignSelf } from "react-native-wind/dist/styles/flex/align-self";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xSmall,
    backgroundColor:COLORS.gray,
    width:"90%",
    borderRadius: SIZES.xSmall,
    padding: SIZES.medium,
    borderColor:"red",
    alignSelf:"center"
     
  },

  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,

  },
  
});

export default styles;