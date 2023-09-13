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
        margin:"auto" ,
        alignSelf:"center"
         
      },
  headerTitle: {
    fontSize: SIZES.medium,
    marginRight:SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.white,

  },
  
});

export default styles;