import { View,Text, TouchableOpacity ,Switch} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { s } from 'react-native-wind'
import React, { useMemo, useState } from 'react';
 
import { COLORS } from '../../../constants'
import styles from './UserInfoStyle'
import RadioGroup from 'react-native-radio-buttons-group';
import { color } from 'react-native-tailwindcss';
import { useAppContext } from '../../context/AppContext';
import { getAgeGroup } from '../../utils/getStaticScore';
 
type StaticTabProps ={
  station: string,

}
 
 
const UserInfo= ( ) => {
     const {ageGroup,setAgeGroup}=useAppContext()

    const genderRadioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'Male',
            color:COLORS.lightWhite,
            borderColor:COLORS.lightWhite,
            labelStyle:{color:"white"}
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female',
            color:COLORS.lightWhite,
            borderColor:COLORS.lightWhite,
            labelStyle:{color:"white"}
        }
    ]), []);

    const statusRadioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'NSF',
            value: 'NSF',
            color:COLORS.lightWhite,
            borderColor:COLORS.lightWhite,
            labelStyle:{color:"white"}
        },
        {
            id: '2',
            label: 'NSMEN',
            value: 'NSMEN',
            color:COLORS.lightWhite,
            borderColor:COLORS.lightWhite,
            labelStyle:{color:"white"}
        }
    ]), []);

    const [selectedGender, setSelectedGender] = useState<any>();
    const [selectedStatus, setSelectedStatus] = useState<any>();

  return (
    <View style={styles.container}>

    <View style={{display:"flex",flexDirection:"column" }}>
    <View style={s`flex-row mr-10 mb-5`}>
    <Text style={styles.headerTitle}>Age:</Text>
    <TextInput    style={{backgroundColor:"white",width:30,display:"flex",textAlign:"center"}}   defaultValue='0' 
     onChangeText={newAge=>{
        
        setAgeGroup(getAgeGroup(parseInt(newAge)))
        console.log(ageGroup)}}></TextInput>   

    </View>
    <View style={{display:"flex",flexDirection:"row",alignItems:'center',marginBottom:20}}>
    <Text style={styles.headerTitle}>Commando,guards,diver:</Text>
    <Switch/>

    </View>
    </View>
    
    <RadioGroup   containerStyle={{display:"flex",flexDirection:"row"  }}
            radioButtons={genderRadioButtons} 
            onPress={setSelectedGender}
            selectedId={selectedGender}
        />
     <RadioGroup containerStyle={{display:"flex",flexDirection:"row"}}
            radioButtons={statusRadioButtons} 
            onPress={setSelectedStatus}
            selectedId={selectedStatus}
        />
    </View>
  )
}

export default UserInfo
