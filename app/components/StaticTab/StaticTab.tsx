import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { s } from 'react-native-wind'
 
import styles from './StaticTabStyle'
import { COLORS } from '../../../constants'
import { useAppContext } from '../../context/AppContext'
import pushupTable from '../../data/pushupTable'
import { getStaticScore } from '../../utils/getStaticScore'
 
 
type StaticTabProps ={
  station: string,

}
 
const StaticTab = ({station}:StaticTabProps) => {
  const scoreTable = pushupTable

  //Get score depending on age group
   


   
  const {setScore,ageGroup,setPushupScore,setPushupReps,pushupReps,setReps,pushupNextPoint,situpNextPoint} = useAppContext()

 
  return (
    <View>
        <TouchableOpacity style={styles.container}>
            <View style={s`flex-row justify-between`}>
            <Text style={styles.headerTitle}>{station}</Text>

            <View style={{display:"flex",flexDirection:"column",alignItems:"center" }}>
            <TextInput style={{backgroundColor:"white",width:30,display:"flex",textAlign:"center"}} defaultValue='1' 
            keyboardType='numeric' 
            onChangeText={reps=> {
             setReps(station,reps)
            }}></TextInput>
            <Text style={{color:"#B4B4B4",fontSize:"10px",marginTop:8}}>{station=="push-up"? pushupNextPoint: situpNextPoint} to next point</Text>
            </View>
            </View>
            
        </TouchableOpacity>
    </View>
  )
}

export default StaticTab
