import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default class Information extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerAvatar}>
          <Image
          style={styles.avatarImg}
          source={require('../assets/avatar.jpg')}
          />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>Thao Nguyen</Text>
          <Text style={styles.textJob}>IT engineer</Text>
          <View style={styles.groupButton}>
          <TouchableOpacity style={styles.buttonFollow} onPress = {this.showAlertFollowed}><Text style={styles.textFollow}>Follow</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonSend} onPress = {this.showAlertSent}><Feather name="send" style={styles.textSend} /></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  showAlertFollowed = () =>{
      Alert.alert(
         'followed'
      )
   }
   showAlertSent = () =>{
      Alert.alert(
         'message sended'
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerAvatar: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfo: {
    flex: 0.5,
    justifyContent: 'center',
  },
  avatarImg: {
    width: 100, 
    height: 100,
    borderRadius: 50,
  },
  buttonFollow: {
    backgroundColor: FOLLOW_COLOR,
    color: 'white',
    width: 90,
    height: 22,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: FOLLOW_COLOR,
    shadowRadius: 7
  },
  buttonSend: {
    backgroundColor: SEND_MESSAGE_COLOR,
    color: 'white',
    width: 40,
    height: 22,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    shadowColor: SEND_MESSAGE_COLOR,
    shadowRadius: 7
  },
  textFollow: {
    color: 'white',
  },
  textSend: {
    color: 'white',
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textJob: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 15,
  },
  groupButton: {
    flexDirection: 'row',
  },
});
