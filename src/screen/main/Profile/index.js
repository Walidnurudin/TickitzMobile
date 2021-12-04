import React, {useState} from 'react';
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

function Profile({navigation}) {
  const [isHistory, setIsHistory] = useState(false);

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
          <ProfileComponent />
          <Text style={styles.title}>Account Settings</Text>
          <UpdateProfile />
          <UpdatePassword />
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
