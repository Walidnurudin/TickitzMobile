import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  UpdatePassword,
  TicketHistory,
  UpdateProfile,
  ProfileComponent,
} from '../../../components/molecules';
import {Footer} from '../../../components/atoms';
import {colors} from '../../../utils/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

  const [image, setImage] = useState({
    image: null,
  });
  const [responseImage, setResponseImage] = useState({
    isShow: false,
    msg: '',
    loading: false,
  });

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
    console.log('Launch');

    launchImageLibrary({}, res => {
      console.log('response', res);
      if (res.didCancel) {
      } else if (res.assets) {
        setImage({image: res.assets[0]});
      } else {
        console.log(res);
      }
    });
  };

  // const handleImageSubmit = () => {
  //   console.log('SUBMIT IMAGE', image);
  //   if (image === null || !image.image) {
  //   } else {
  //     const formData = new FormData();
  //     for (const data in image) {
  //       formData.append(data, image[data]);
  //     }

  //     console.log(formData);

  //     dispatch(updateImage(formData))
  //       .then(res => {
  //         console.log('RES', res);
  //         dispatch(getUser());
  //       })
  //       .catch(err => {
  //         console.log('ERROR', err);
  //       });
  //   }
  // };

  // useEffect(() => {
  //   handleImageSubmit();
  // }, [image]);

  return (
    <ScrollView
      style={styles.container}
      // stickyHeaderIndices={[0]}
    >
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

      {isHistory ? (
        <View style={styles.wrapHistory}>
          <TicketHistory />
          <TicketHistory />
        </View>
      ) : (
        <View>
          <ProfileComponent
            onPress={handleImage}
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 8,
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
