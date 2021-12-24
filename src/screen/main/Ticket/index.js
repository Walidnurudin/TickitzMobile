import React, {useEffect, useState} from 'react';
import {Footer} from '../../../components/atoms';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../utils/colors';
import QRCode from 'react-native-qrcode-svg';
import {URL_BACKEND} from '@env';

function Ticket({navigation, route}) {
  const [params, setParams] = useState(route.params.params);
  const [value, setValue] = useState(
    `${URL_BACKEND}/booking/used-ticket/${params.bookingId}`,
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <QRCode value={value} size={186} />
          </View>
          <View style={styles.content}>
            <View style={styles.wrapContent}>
              <View style={{flex: 3}}>
                <Text style={styles.title}>Movie</Text>
                <Text style={styles.value}>{params.name || '-'}</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.title}>Premiere</Text>
                <Text style={styles.value}>{params.premiere || '-'}</Text>
              </View>
            </View>
            <View style={styles.wrapContent}>
              <View style={{flex: 3}}>
                <Text style={styles.title}>Date</Text>
                <Text style={styles.value}>{params.dateSchedule || '-'}</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.title}>Time</Text>
                <Text style={styles.value}>{params.timeSchedule || '-'}</Text>
              </View>
            </View>
            <View style={styles.wrapContent}>
              <View style={{flex: 3}}>
                <Text style={styles.title}>Count</Text>
                <Text style={styles.value}>
                  {params.dataSeat.length || 0} pcs
                </Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.title}>Seats</Text>
                <Text style={styles.value}>
                  {params.dataSeat.join(',  ') || '-'}
                </Text>
              </View>
            </View>

            <View style={styles.total}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.totalValue}>${params.total || 0}</Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Text style={styles.buttonText}>back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingTop: 48,
    paddingBottom: 72,
  },
  card: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 55,
    paddingVertical: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  content: {
    paddingTop: 65,
    paddingHorizontal: 24,
    paddingBottom: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderTopColor: colors.third,
    borderTopWidth: 0.5,
  },
  wrapContent: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: colors.third,
  },
  value: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: colors.black,
  },
  total: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.third,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  totalTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: colors.black,
  },
  totalValue: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 28,
    color: colors.black,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    width: 150,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Ticket;
