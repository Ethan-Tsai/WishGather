import React, {useState} from "react";
import { Pressable, View, Text, Image } from "react-native";


const Title = ({titleName}) => {
    const [touched, setTouched] = useState(false);

    const handlePress = () => {
        // Toggle the 'touched' state when pressed
        setTouched(!touched);
        // Call your callback function here
        // For example, you can log a message
        console.log('Title pressed!');
    };
    // View as the outside container, should be pressable 
    // text in the middle of the view
    // svg icon in the right of the text
    return (
        <Pressable onPress={handlePress} className="flex flex-row p-4">
            <Text className="p-4 text-orange-900">
                {titleName}
            </Text>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <Path d="M9 6l6 6-6 6" />
            </Svg>
            <Text>{touched ? 'Touched' : 'Not Touched'}</Text>
        </Pressable>
    );
  };


export default Title;