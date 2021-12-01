import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {tickitz, hiflix, cineone21, ebvid} from '../../../assets/images';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms/index';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import FIcon from 'react-native-vector-icons/dist/FontAwesome';

function Footer() {
  return (
    <View style={styles.container}>
      <Image source={tickitz} style={styles.image} />
      <Text style={styles.desc}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>

      <Text style={styles.title}>Explore</Text>
      <View style={styles.explore}>
        <Text style={styles.exploreItem}>Cinemas</Text>
        <Text style={styles.exploreItem}>Movies List</Text>
        <Text style={styles.exploreItem}>Notification</Text>
        <Text style={styles.exploreItem}>My Ticket</Text>
      </View>

      <Gap height={48} />

      <Text style={styles.title}>Our Sponsor</Text>
      <View style={styles.ourSponsor}>
        <Image style={styles.imagePremiere} source={ebvid} />
        <Image style={styles.imagePremiere} source={cineone21} />
        <Image style={styles.imagePremiere} source={hiflix} />
      </View>

      <Gap height={48} />
      <Text style={styles.title}>Follow us</Text>
      <View style={styles.followUs}>
        <FIcon style={styles.icon} name="facebook" />
        <Icon style={styles.icon} name="instagram" />
        <Icon style={styles.icon} name="twitter" />
        <Icon style={styles.icon} name="youtube" />
      </View>

      <Gap height={65} />
      <Text style={styles.footer}>© 2020 Tickitz. All Rights Reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    paddingBottom: 65,
    paddingHorizontal: 24,
  },
  image: {
    width: 141,
    height: 40,
    marginBottom: 23,
  },
  desc: {
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 40,
    fontWeight: '400',
    color: colors.third,
  },
  title: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 16,
  },
  explore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exploreItem: {
    fontSize: 14,
    color: colors.third,
  },
  ourSponsor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagePremiere: {
    height: 30,
    width: 80,
    resizeMode: 'contain',
  },
  followUs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 24,
  },
  footer: {
    fontSize: 14,
    color: colors.third,
    lineHeight: 22,
  },
});

export default Footer;
