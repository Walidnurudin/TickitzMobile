import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {
  UpdatePassword,
  TicketHistory,
  UpdateProfile,
  ProfileComponent,
} from '../../../components/molecules';
import {Footer} from '../../../components/atoms';
import {colors} from '../../../utils/colors';
import axios from '../../../utils/axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Notifications from '../Payment/notif';

// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {
  updatePassword,
  updateUser,
  getUser,
  updateImage,
} from '../../../stores/actions/user';

function Profile({navigation}) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isHistory, setIsHistory] = useState(false);

  const [profile, setProfile] = useState({
    firstName: user.data.firstName,
    lastName: user.data.lastName,
    email: user.data.email,
    phoneNumber: user.data.phoneNumber,
  });
  const [responseProfile, setResponseProfile] = useState({
    isShow: false,
    msg: '',
    loading: false,
  });

  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [responsePassword, setResponsePassword] = useState({
    isShow: false,
    msg: '',
    loading: false,
  });

  const [ticket, setTicket] = useState([]);

  // const [responseImage, setResponseImage] = useState({
  //   isShow: false,
  //   msg: '',
  //   loading: false,
  // });

  // NAVIGATION
  const showDetail = item => {
    navigation.navigate('HomeNavigator', {
      screen: 'Ticket',
      params: {
        bookingId: item.id,
        userId: item.userId,
        name: item.name,
        premiere: item.premiere,
        total: item.totalPayment,
        statusPayment: item.statusPayment,
        scheduleId: item.scheduleId,
        timeSchedule: item.timeBooking,
        dateSchedule: item.dateBooking,
        paymentMethod: item.paymentMethod,
        dataSeat: item.seat,
      },
    });
  };

  const continuePayment = item => {
    Notifications.reminderNotification();

    navigation.navigate('HomeNavigator', {
      screen: 'Midtrans',
      params: {
        params: {
          bookingId: item.id,
          userId: item.userId,
          name: item.name,
          premiere: item.premiere,
          total: item.totalPayment,
          statusPayment: item.statusPayment,
          scheduleId: item.scheduleId,
          timeSchedule: item.timeBooking,
          dateSchedule: item.dateBooking,
          paymentMethod: item.paymentMethod,
          dataSeat: item.seat,
          url: item.payment,
        },
      },
    });
  };

  // TICKET
  const getTicket = () => {
    axios
      .get('user/ticket-history')
      .then(res => {
        setTicket(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  // PROFILE
  const handleProfile = (value, field) => {
    setProfile({...profile, [field]: value});
  };

  const handleProfileSubmit = () => {
    setResponseProfile({...responseProfile, loading: true});
    dispatch(updateUser(profile))
      .then(res => {
        alert('Success update profile');
        setResponseProfile({...responseProfile, loading: false});
        dispatch(getUser());
      })
      .catch(err => {
        setResponseProfile({
          msg: err.response.data.msg,
          isShow: true,
          loading: false,
        });

        setTimeout(() => {
          setResponseProfile({
            ...responseProfile,
            msg: '',
            isShow: false,
          });
        }, 3000);
      });
  };

  // PASSWORD
  const handlePassword = (value, field) => {
    setPassword({...password, [field]: value});
  };

  const handlePasswordSubmit = () => {
    setResponsePassword({...responsePassword, loading: true});
    dispatch(updatePassword(password))
      .then(res => {
        alert('Success update password');
        setResponsePassword({...responsePassword, loading: false});
        dispatch(getUser());
      })
      .catch(err => {
        setResponsePassword({
          msg: err.response.data.msg,
          isShow: true,
          loading: false,
        });

        setTimeout(() => {
          setResponsePassword({
            ...responsePassword,
            msg: '',
            isShow: false,
          });
        }, 3000);
      });
  };

  // IMAGE
  const handleImage = () => {
    Alert.alert('Update image', 'Upload image profile', [
      // GALLERY
      {
        text: 'Gallery',
        onPress: async () => {
          try {
            const result = await launchImageLibrary();
            if (result.didCancel) {
            } else {
              handleImageSubmit({
                uri: result.assets[0].uri,
                name: result.assets[0].fileName,
                type: result.assets[0].type,
              });
            }
          } catch (error) {
            console.log(error.response);
          }
        },
      },

      // CAMERA
      {
        text: 'Camera',
        onPress: async () => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'App Camera Permission',
              message: 'App needs access to your camera ',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission given');
            try {
              const result = await launchCamera();
              if (result.didCancel) {
              } else {
                handleImageSubmit({
                  uri: result.assets[0].uri,
                  name: result.assets[0].fileName,
                  type: result.assets[0].type,
                });
              }
            } catch (error) {
              console.log(error.response);
            }
          } else {
            console.log('Camera permission denied');
          }
        },
      },
    ]);
  };

  const handleImageSubmit = data => {
    if (data === null || !data) {
    } else {
      const setData = {
        image: data,
      };
      console.log('SUBMIT IMAGE', setData);

      const formData = new FormData();
      for (const data in setData) {
        formData.append(data, setData[data]);
      }

      dispatch(updateImage(formData))
        .then(res => {
          dispatch(getUser());
        })
        .catch(err => {
          Alert.alert('Error', err.response.data.msg);
        });
    }
  };

  const handleDeleteImage = () => {
    Alert.alert('Delete image', 'Are you sure want to delete this image?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete',
        onPress: () => {
          dispatch(updateImage({}))
            .then(res => {
              dispatch(getUser());
            })
            .catch(err => {
              Alert.alert('Error', err.response.data.msg);
            });
        },
      },
    ]);
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <View>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => setIsHistory(false)}
          style={!isHistory ? styles.navbarWrapActive : styles.navbarWrap}>
          <Text
            style={!isHistory ? styles.navbarItemActive : styles.navbarItem}>
            Detail Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsHistory(true)}
          style={isHistory ? styles.navbarWrapActive : styles.navbarWrap}>
          <Text style={isHistory ? styles.navbarItemActive : styles.navbarItem}>
            Order History
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.container}
        // stickyHeaderIndices={[0]}
      >
        {isHistory ? (
          <View style={styles.wrapHistory}>
            {ticket.length > 0 ? (
              <>
                {ticket.map(item => (
                  <TicketHistory
                    premiere={item.premiere}
                    date={item.dateBooking.split('T')[0]}
                    time={item.timeBooking}
                    name={item.name}
                    status={item.statusUsed}
                    key={item.id}
                    onPressShow={() => showDetail(item)}
                    onPressPayment={() => continuePayment(item)}
                  />
                ))}
              </>
            ) : (
              <>
                <Text style={{alignSelf: 'center', marginTop: 50}}>
                  Data order history not found!
                </Text>
              </>
            )}
          </View>
        ) : (
          <View>
            <ProfileComponent
              onPress={handleImage}
              handleDelete={handleDeleteImage}
              name={`${user.data.firstName} ${user.data.lastName}`}
              role={user.data.role}
              image={user.data.image}
            />
            <Text style={styles.title}>Account Settings</Text>
            <UpdateProfile
              firstName={profile.firstName}
              lastName={profile.lastName}
              email={profile.email}
              phoneNumber={profile.phoneNumber}
              onChange={(value, field) => handleProfile(value, field)}
              onPress={handleProfileSubmit}
              isLoading={responseProfile.loading}
              showError={responseProfile.isShow}
              msgError={responseProfile.msg}
            />
            <UpdatePassword
              onChange={(value, field) => handlePassword(value, field)}
              onPress={handlePasswordSubmit}
              isLoading={responsePassword.loading}
              showError={responsePassword.isShow}
              msgError={responsePassword.msg}
            />
          </View>
        )}
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    marginTop: 26,
    marginHorizontal: 24,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: colors.black,
  },
  navbar: {
    paddingHorizontal: 48,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  navbarWrap: {
    paddingVertical: 16,
  },
  navbarWrapActive: {
    paddingVertical: 16,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  navbarItem: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 26,
  },
  navbarItemActive: {
    fontWeight: '400',
    color: colors.black,
    fontSize: 14,
    lineHeight: 26,
  },
  wrapHistory: {
    marginBottom: 72,
  },
});

export default Profile;
