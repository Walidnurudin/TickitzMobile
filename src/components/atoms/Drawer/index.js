import React from 'react';
import {View, Text, StyleSheet, Alert, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import axios from '../../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {URL_BACKEND} from '@env';
import {def} from '../../../assets/images';

function DrawerContent(props) {
  const user = useSelector(state => state.user);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        onPress: async () => {
          try {
            await axios.post('/auth/logout');
            await AsyncStorage.removeItem('token');
            props.navigation.navigate('AuthNavigator', {
              screen: 'Login',
            });
          } catch (error) {
            console.log(error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <Image
            source={
              user.data.image
                ? // ? `${URL_BACKEND}/uploads/movie/${user.data.image}`
                  {
                    uri: `${URL_BACKEND}/uploads/user/${user.data.image}`,
                    // uri: `http://192.168.43.155:3001/uploads/movie/${user.data.image}`,
                  }
                : def
            }
            style={styles.avatar}
          />
          <View style={styles.biodata}>
            <Text style={styles.title}>
              {user.data.firstName} {user.data.lastName}
            </Text>
            <Text style={styles.caption}>{user.data.email}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
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
    borderRadius: 20,
    // backgroundColor: 'gray',
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
