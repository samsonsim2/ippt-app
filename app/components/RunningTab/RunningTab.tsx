import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { s } from 'react-native-wind'
 
 
import { COLORS } from '../../../constants'
import styles from './RunningTabStyle'
import { useAppContext } from '../../context/AppContext'
 
type RunningTabProps ={
  station: string,

}
 
const RunningTab = ({station}:RunningTabProps) => {

  const {setTime,time,runNextPoint,runScore} = useAppContext()


  return (
    <View>
        <TouchableOpacity style={styles.container}>
            <View style={s`flex-row justify-between`}>
            <Text style={styles.headerTitle}>{station}</Text>
            
            <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

              
            <View style={s`  w-40 flex-row justify-between`} >
            <TextInput 
            defaultValue='18' 
            keyboardType='numeric'
            style={{backgroundColor:"white",width:30,display:"flex",textAlign:"center"}} onChangeText={(mins)=>{setTime({...time,mins:parseInt(mins)})}}></TextInput>
            <Text style={s`self-center text-white  `} >Mins</Text>
            <TextInput 
              defaultValue='20' 
              keyboardType='numeric'
            style={{backgroundColor:"white",width:30,display:"flex",textAlign:"center"}} onChangeText={(secs)=>{setTime({...time,secs:parseInt(secs)})}}></TextInput>
            <Text style={s`self-center text-white`} >Secs</Text>
            </View>

            <View style={{marginTop:8}}>
            {runScore == 50 ?<Text style={{color:"#B4B4B4",fontSize:"10px"}}>0 to next point</Text>: 
            <Text  style={{color:"#B4B4B4",fontSize:"10px"}}> -{runNextPoint}s to next point</Text> }
            </View>

            </View>


            
            </View>
            
        </TouchableOpacity>
    </View>
  )
}

export default RunningTab
