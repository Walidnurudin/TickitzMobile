import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import axios from '../../../utils/axios';

class DrawerContent extends React.Component {
  handleLogout = () => {
    Alert.alert('Logout', 'Are you sure want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        onPress: () => {
          axios
            .post('/auth/logout')
            .then(res => {
              console.log(res);
              this.props.navigation.navigate('AuthNavigator', {
                screen: 'Login',
              });
            })
            .catch(err => {
              console.log(err);
            });
        },
      },
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...this.props}>
          <View style={styles.containerProfile}>
            <View style={styles.avatar} />
            <View style={styles.biodata}>
              <Text style={styles.title}>Anonymous</Text>
              <Text style={styles.caption}>@bagustea</Text>
            </View>
          </View>
          <DrawerItemList {...this.props} />
        </DrawerContentScrollView>
        <View style={styles.containerSection}>
          <DrawerItem
            label="Sign Out"
            icon={({color, size}) => (
              <Icon color={color} size={size} name="log-out" />
            )}
            onPress={this.handleLogout}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
