import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Footer, Gap} from '../../../components/atoms';
import {MovieDesc, SceduleCard} from '../../../components/molecules';
import {colors} from '../../../utils/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

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

        <TouchableOpacity
          onPress={() => setOpenDate(true)}
          style={styles.buttonDate}>
          <Icon name="calendar" size={20} />
          <Gap width={50} />
          <Text>Set a date</Text>
        </TouchableOpacity>

        <DatePicker
          textColor="black"
          style={styles.buttonDate}
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
          style={styles.buttonCity}
          labelProps="kadal"
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
  buttonDate: {
    backgroundColor: '#EFF0F6',
    paddingVertical: 20,
    paddingHorizontal: 26,
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCity: {
    backgroundColor: 'background: rgba(239, 240, 246, 1)',
    marginBottom: 48,
  },
});

export default Movie;
