import { React, useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Pressable, TextInput } from 'react-native'
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import  Dialog  from "react-native-dialog";
import Lunar from '@tony801015/chinese-lunar';

import TextInputSet from '../../components/Utility/TextInputSet';

import PageTitle from '../../components/PageTitle';
import SetButton from '../../components/Utility/SetButton';
import DatePicker from '../../components/Utility/DatePicker';
import NavigateBack from '../../components/Utility/NavigateBack';

function EditTempleInfoPage(){
    const navigation = useNavigation();
    const route = useRoute();
    const info = route.params.event;
    const forEdit = route.params.forEdit;
    const insets = useSafeAreaInsets();
    const [date, setDate] = useState(new Date(info.date));

    return (
        <SafeAreaProvider>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left ,
                    paddingRight: insets.right
                }}
            >
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.textDanger}>取消</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.textSucceed}>完成</Text>
                    </Pressable>
                </View>
                
                <PageTitle titleText={forEdit ? "編輯法會資訊" : "新增法會資訊"}></PageTitle>
                
                <View style={styles.formContainer}>
                    <TextInputSet labelName={'法會名稱'} defaultValue={info.title} multiLine={false} placeholder={"請輸入法會名稱"}/>
                    <DatePicker dateValue={info.date} labelName={"農曆日期"} isLunar={true} /> 
                    <DatePicker dateValue={info.date} labelName={"國曆日期"} isLunar={false}/>
                    <TextInputSet labelName={'法會簡介'} defaultValue={info.Description} multiLine={true} placeholder={"請輸入法會簡介"}/>
                </View>
                              
                {/* <View style={styles.buttonPosition}>
                    <SetButton 
                        btnText={'確定'} 
                        btnStatus={'primary'}
                        navigateScreen={'TempleEventPage'}
                    >
                    </SetButton>
                </View> */}
            </View>
        </SafeAreaProvider>
    )
}   

const styles = StyleSheet.create({
    formContainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 8,
    },
    buttonPosition: {
        marginTop: 30,

    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    textDanger: {
        color: "red",
        fontWeight: "bold"
    },
    textSucceed: {
        color: "blue",
        fontWeight: "bold"
    }
   
})  

export default EditTempleInfoPage;