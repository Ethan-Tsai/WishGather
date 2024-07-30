import { React, useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import  Dialog  from "react-native-dialog";

import TextInputSet from '../components/TextInputSet';

import PageTitle from '../components/PageTitle';
import SetButton from '../components/SetButton';
import DatePicker from '../components/DatePicker';

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
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left ,
                    paddingRight: insets.right
                }}
            >
                <Pressable 
                style={styles.pressBack}
                onPress={() => navigation.navigate('TempleEventPage')}>
                    <Text>Back</Text>
                </Pressable>
                
                <PageTitle titleText={forEdit ? "編輯法會資訊" : "新增法會資訊"}></PageTitle>
                
                <TextInputSet labelName={'法會名稱'} defaultValue={info.title}></TextInputSet>
                <DatePicker dateValue={info.date}labelName={"農曆日期"} />
                <DatePicker dateValue={info.date}labelName={"國曆日期"} />

                <View style={styles.buttonPosition}>
                    <SetButton 
                        btnText={'確定'} 
                        btnStatus={'primary'}
                        navigateScreen={'TempleEventPage'}
                    >
                    </SetButton>
                </View>
            </View>
        </SafeAreaProvider>
    )
}   

const styles = StyleSheet.create({
    buttonPosition: {
        marginTop: 30,

    }
})  

export default EditTempleInfoPage;