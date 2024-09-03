import { React, useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, TouchableWithoutFeedback} from 'react-native';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import  Dialog  from "react-native-dialog";
import Lunar from '@tony801015/chinese-lunar';


function getCardSize(shape){
    if(shape == 'square'){
        return styles.squareSize
    }
    else if (shape == 'rectangle'){
        return styles.rectangleSize
    }
}

function renderRightActions (progress, dragAnimatedValue, showDialog, goEdit, event){
    const opacity = dragAnimatedValue.interpolate({
        inputRange: [-80, 0],
        outputRange: [screenWidth - 300, 0],
        // extrapolate: 'clamp',
    });
    return (
        <View style={styles.swipedRow}>
          <Animated.View style={[styles.behindButton, { opacity }, styles.editBackgroundColor]}>
            <TouchableOpacity onPress={goEdit}>
              <Text style={styles.behindButtonText}>Edit</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.behindButton, { opacity }, styles.deleteBackgroundColor]}>
            <TouchableOpacity onPress={showDialog}>
              <Text style={styles.behindButtonText}>Delete</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
}


function EventCard ({ event, size }){
    const navigation = useNavigation();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [activeSwipeable, setActiveSwipeable] = useState(null);
    const swipeableRef = useRef(null);
    
    const showDialog = () => {
      setDialogVisible(true);
    };
  
    const handleCancel = () => {
      setDialogVisible(false);
    };
  
    const handleDelete = () => {
      setDialogVisible(false);
      swipeableRef.current?.close();
      // Add delete the event at this part
    };
    const convertSolarDateToLunarDate = (date) => {
        const gregorianDate = date 
        const [year, month, day] = gregorianDate.split('-');
        const lunarData = Lunar(year, month, day).getJson();
        const lunarDateString = `${lunarData.lunarMonth}${lunarData.lunarDay}`;
       
        return lunarDateString;
    }

    const handleSwipeableOpen = (id) => {
        if (activeSwipeable && activeSwipeable !== id) {
            activeSwipeable.close();
        }
        setActiveSwipeable(swipeableRef.current);
    };

    const handleSwipeableClose = () => {
        setActiveSwipeable(null);
    };
    const handleTouchOutside = () => {
        if (activeSwipeable) {
            activeSwipeable.close();
        }
    };

    
    const goEdit = () => {
        swipeableRef.current?.close();
        navigation.navigate('EditTempleInfoPage', { 
                                event: event, 
                                forEdit: true
                            });
    }

    if(size == "square"){
        return (
                <View style={[styles.card, getCardSize(size)]}>
                    <Image source={event.imageUrl} style={styles.image} />
                    <Text style={styles.overlayText}>{convertSolarDateToLunarDate(event.TIME)}</Text>
                </View>
        );
    }
    if(size == "rectangle"){
        return (
            <TouchableWithoutFeedback onPress={handleTouchOutside}>
                <View>
                    <Swipeable 
                        renderRightActions={(progress, dragAnimatedValue) => renderRightActions(progress, dragAnimatedValue, showDialog, goEdit)}
                        ref={swipeableRef}
                        onSwipeableWillOpen={() => handleSwipeableOpen(event.tNO)}
                        onSwipeableWillClose={handleSwipeableClose}>
                        <View style={[styles.card, getCardSize(size)]}>
                            <Image source={event.imageUrl} style={styles.image} />
                            <Text style={styles.overlayText}>{convertSolarDateToLunarDate(event.TIME)}</Text>
                        </View>
                    </Swipeable>  
                    <Dialog.Container visible={dialogVisible}>
                        <Dialog.Title>刪除</Dialog.Title>
                        <Dialog.Description>
                        確認刪除這筆法會資料？
                        </Dialog.Description>
                        <Dialog.Button label="Cancel" onPress={handleCancel}/>
                        <Dialog.Button label="Delete" onPress={handleDelete}/>
                    </Dialog.Container>
                </View>
            </TouchableWithoutFeedback>
        )
    }  
};


let marginSpace = 30;
let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
    },
    card: {
        flex: 1,
        position: 'relative',
        borderWidth: '1px',
        borderColor: '#e6e6e6',
        backgroundColor: 'white',
    },
    squareSize: {
        width: 120,
        height: 120,
        marginRight: marginSpace,
        borderRadius: 10
    },
    rectangleSize: {
        width: '100%', // Device depends?
        height: 120,
        // marginBottom: marginSpace,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlayText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    swipedRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    behindButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '100%',
        zIndex: -1,
      },
    behindButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    deleteBackgroundColor: {
        backgroundColor: '#ff524f',
    },
    editBackgroundColor: {
        backgroundColor: '#66a6ff'
    }
});

export default EventCard;
