import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { s } from 'react-native-wind'
import styles from './ScoreStyle'
import { useAppContext } from '../../context/AppContext'
 
 
 
const Score = ( ) => {
  const {score}= useAppContext()
 
  return (
    <View  style={{display:"flex",justifyContent:"center", alignItems:"center",  height: 200, padding: 30, }} >
       
            {/* <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sunt amet blanditiis id, adipisci itaque suscipit! Ut dolorum assumenda similique, maiores minus totam consequuntur illum veniam voluptatibus officia sunt soluta, amet libero praesentium quaerat fugiat. Explicabo, in nemo at quas illo unde distinctio laudantium iusto quod provident quisquam vero error. Fugit dolorem sunt obcaecati distinctio asperiores minus voluptatem. Veritatis, corrupti illo labore dolorem atque maiores itaque recusandae est sapiente qui. Dolor, consequuntur asperiores ipsam magni ducimus nulla quas impedit molestias dolorem molestiae quam soluta, eos aut ad iste culpa modi, dignissimos suscipit laboriosam natus vero accusantium quibusdam? Explicabo, impedit officia.</Text> */}
            <Text style={styles.headerTitle}>Total Score:</Text>
            <Text style={styles.headerTitle}>{score}</Text>
     
     
            
  
    </View>
  )
}

export default Score
