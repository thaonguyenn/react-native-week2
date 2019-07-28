import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const imgData = [
  { id: 1, imgSource: require('./assets/pic1.jpg') },
  { id: 2, imgSource: require('./assets/pic2.jpg') },
  { id: 3, imgSource: require('./assets/pic3.jpg') },
  { id: 4, imgSource: require('./assets/pic4.jpg') },
  { id: 5, imgSource: require('./assets/pic5.jpg') },
  { id: 6, imgSource: require('./assets/pic6.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

import Information from './components/Information';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconHeaderBack}>
          <TouchableOpacity><MaterialIcons name="arrow-back" size={30} color= 'gray'/></TouchableOpacity>
        </View>
        <View style={styles.iconHeaderMore}>
          <TouchableOpacity><MaterialIcons name="more-vert" size={30} color= 'gray'/></TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewAvatar}>
        <Information />
      </View>
      <View style={styles.viewLike}>
        <View style={styles.groupPhoto}>
          <Text style={styles.textNumber}>210</Text>
          <Text style={styles.textPhoto}>Photos</Text>
        </View>
        <View style={styles.groupPhoto}>
          <Text style={styles.textNumber}>15k</Text>
          <Text style={styles.textPhoto}>followers</Text>
        </View>
        <View style={styles.groupPhoto}>
          <Text style={styles.textNumber}>605</Text>
          <Text style={styles.textPhoto}>Following</Text>
        </View>
      </View>
      <View style={styles.viewImage}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.imgView}>
            {imgData.slice(0,centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.imgLeft}/>
            })}
          </View>
          <View style={styles.imgView}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.img}/>
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity><MaterialIcons name="attachment" size={30} color= 'gray'/></TouchableOpacity>
        <TouchableOpacity><Feather name="plus-circle" size={30} color= 'gray' style={styles.iconFooter}/></TouchableOpacity>
        <TouchableOpacity><MaterialIcons name="person-outline" size={30} color= 'gray'  style={styles.iconFooter}/></TouchableOpacity>
      </View>
    </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  viewAvatar: {
    flex:0.25, 
    flexDirection: 'row',
  },
  viewLike: {
    flex:0.1, 
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  groupPhoto: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    flex:0.5, 
  },
  textNumber: {
    fontSize: 18,
    fontWeight: 500,
  },
  textPhoto: {
    fontSize: 11,
    color: 'gray',
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    flex: 0.5,
    flexDirection: 'column',
  },
  img: {
    marginLeft: 10,
    height: 130, 
    width: 120,
    borderRadius: 10,  
    marginBottom: 5,
  },
  imgLeft: {
    marginLeft: 30,
    height: 130, 
    width: 120,
    borderRadius: 10,  
    marginBottom: 5,
  },
  header: {
    flex:0.05,
    justifyContent: "center",
    flexDirection: 'row',
  },
  iconHeaderBack: {
    flex: 0.9, 
    marginLeft: 10,
  },
  iconHeaderMore: {
    flex: 0.1,
  },
  footer: {
    flex:0.1,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFooter: {
    marginLeft: 30,
  }
});
