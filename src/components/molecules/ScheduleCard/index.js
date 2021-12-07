import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../../atoms';
import {ebvid, hiflix, cineone21} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function SceduleCard({onBook, onTime, data, scheduleId, timeSchedule}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image
          source={
            data.premire === 'hiflix'
              ? hiflix
              : data.premire === 'cineone21'
              ? cineone21
              : ebvid
          }
          style={styles.image}
        />
        <Text style={styles.address}>{data.location || '-'}</Text>
      </View>

      <View style={styles.wrapTime}>
        {data.time?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={
              data.id === scheduleId && item === timeSchedule
                ? styles.timeActive
                : styles.time
            }
            onPress={() => onTime(item, data.id)}>
            <Text
              style={{
                color:
                  data.id === scheduleId && item === timeSchedule
                    ? 'white'
                    : colors.black,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wrapInfo}>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.seat}>${data.price}/seat</Text>
      </View>

      <Button
        title="Book now"
        onPress={onBook}
        disabled={scheduleId !== data.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  wrapImage: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 30,
    marginBottom: 12,
  },
  address: {
    fontWeight: '300',
    width: '100%',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 22,
    color: colors.third,
    paddingBottom: 23,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  wrapTime: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 24,
    flexWrap: 'wrap',
  },
  time: {
    // backgroundColor: 'red',
    marginHorizontal: 8,
    marginVertical: 4,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 23,
    padding: 5,
  },
  timeActive: {
    backgroundColor: colors.primary,
    marginHorizontal: 8,
    marginVertical: 4,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 23,
    borderRadius: 5,
    padding: 5,
  },
  wrapInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  price: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  seat: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '600',
    color: colors.black,
  },
});

export default SceduleCard;
