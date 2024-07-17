import React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color, Border, Padding } from "../GlobalStyles";
import screenConfig from '../components/screenConfig';

const footerConfig = [
  { name: 'HomePage', icon: require('../assets/home-icon1.png'), activeIcon: require('../assets/home-icon.png') },
  { name: 'OfferingPage4', icon: require('../assets/temple-icon.png'), activeIcon: require('../assets/temple-icon1.png') },
  { name: 'CartPage', icon: require('../assets/shopping-bag-icon.png'), activeIcon: require('../assets/shopping-bag-icon2.png') },
  { name: 'UserPage', icon: require('../assets/user-icon.png'), activeIcon: require('../assets/user-icon1.png') },
];

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentPage = route.name;

  return (
    <View style={styles.footer}>
      <View style={styles.menu}>
        <View style={styles.homeIconParent}>
          {footerConfig.map((item, index) => (
            <Pressable
              key={item.name}
              style={[styles.iconLayout, index > 0 && styles.iconMargin]}
              onPress={() => navigation.navigate(item.name)}
            >
              <Image
                style={styles.icon}
                source={currentPage.startsWith(item.name) ? item.activeIcon : item.icon}
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    top: 831,
    left: 38,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 383,
  },
  menu: {
    width: 355,
    height: 66,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  homeIconParent: {
    marginTop: -33,
    marginLeft: -177.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_smi,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 40,
    width: 40,
  },
  iconMargin: {
    marginLeft: 41,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
});

export default Footer;