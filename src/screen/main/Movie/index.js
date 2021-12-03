import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Footer} from '../../../components/atoms';
import {MovieDesc, SceduleCard} from '../../../components/molecules';
import {colors} from '../../../utils/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

function Movie({navigation}) {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);
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

        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text>Open</Text>
        </TouchableOpacity>

        <DatePicker
          textColor="black"
          modal
          open={openDate}
          date={date}
          mode="date"
          onConfirm={date => {
            setOpenDate(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />

        <DropDownPicker
          open={openDropdown}
          value={value}
          items={items}
          setOpen={setOpenDropdown}
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
