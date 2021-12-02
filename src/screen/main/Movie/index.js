import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import {Footer} from '../../../components/atoms';
import {MovieDesc, SceduleCard} from '../../../components/molecules';
import {colors} from '../../../utils/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

function Movie({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [openDate, setOpenDate] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <ScrollView style={styles.page}>
      <MovieDesc />

      {/* SCHEDULE SECTION */}
      <View style={styles.shedule}>
        <Text style={styles.title}>Showtimes and Tickets</Text>

        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <DropDownPicker
          open={openDate}
          value={value}
          items={items}
          setOpen={setOpenDate}
          setValue={setValue}
          setItems={setItems}
        />

        <SceduleCard navigation={navigation} />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
  shedule: {
    paddingHorizontal: 24,
    backgroundColor: '#F5F6F8',
    paddingTop: 40,
    paddingBottom: 64,
  },
  title: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 34,
    textAlign: 'center',
  },
});

export default Movie;
