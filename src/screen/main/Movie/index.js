import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Footer, Gap, Pagination} from '../../../components/atoms';
import {MovieDesc, SceduleCard} from '../../../components/molecules';
import {colors} from '../../../utils/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from '../../../utils/axios';

function Movie({navigation, route}) {
  const [openDate, setOpenDate] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Jakarta', value: 'Jakarta'},
    {label: 'Bandung', value: 'Bandung'},
    {label: 'Indramayu', value: 'Indramayu'},
  ]);

  const [params, setParams] = useState({
    page: 1,
    limit: 1,
    movieId: route.params.params.idMovie,
  });
  const [dataMovie, setDataMovie] = useState({});
  const [dataSchedule, setDataSchedule] = useState({
    data: [],
    pagination: {},
  });
  const [tempData, setTempData] = useState({
    movieId: route.params.params.idMovie,
    scheduleId: '',
    timeSchedule: '',
    dateSchedule: new Date(),
  });

  const getMovieById = () => {
    axios
      .get(`/movie/${params.movieId}`)
      .then(res => {
        console.log(res);
        setDataMovie(res.data.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getScheduleByIdMovie = () => {
    axios
      .get(
        `/schedule?page=${params.page}&limit=${
          params.limit
        }&searchLocation=${''}&searchMovieId=${params.movieId}`,
      )
      .then(res => {
        console.log(res.data);
        setDataSchedule({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handlePagination = item => {
    setParams({
      ...params,
      page: item,
    });

    axios
      .get(
        `/schedule?page=${item}&limit=${
          params.limit
        }&searchLocation=${''}&searchMovieId=${params.movieId}`,
      )
      .then(res => {
        setDataSchedule({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const onTime = (time, scheduleId) => {
    console.log(time, scheduleId);
    setTempData({...tempData, timeSchedule: time, scheduleId: scheduleId});
  };

  const onBook = () => {
    navigation.navigate('Order', {
      params: {
        ...tempData,
        dateSchedule: tempData.dateSchedule.toISOString().split('T')[0],
        // .toString()
        // .split(' ')
        // .splice(0, 4)
        // .join(' '),
      },
    });

    console.log({
      ...tempData,
      dateSchedule: tempData.dateSchedule.toISOString().split('T')[0],
      // .toString()
      // .split(' ')
      // .splice(0, 5)
      // .join(' '),
    });
  };

  useEffect(() => {
    getMovieById();
    getScheduleByIdMovie();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.page}>
        <MovieDesc data={dataMovie} />

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
            date={tempData.dateSchedule}
            mode="date"
            onConfirm={date => {
              const newDate = date.toISOString().split('T')[0];
              const Now = new Date().toISOString().split('T')[0];
              if (Now > newDate) {
                setOpenDate(false);
                alert('error');
              } else {
                setOpenDate(false);
                setTempData({
                  ...tempData,
                  dateSchedule: date,
                });
              }
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />

          <DropDownPicker
            style={styles.buttonCity}
            labelProps="Select item"
            open={openDropdown}
            value={value}
            items={items}
            setOpen={setOpenDropdown}
            setValue={setValue}
            setItems={setItems}
          />

          {dataSchedule.data.length > 0 ? (
            <>
              {dataSchedule.data.map(item => (
                <SceduleCard
                  navigation={navigation}
                  data={item}
                  key={item.id}
                  scheduleId={tempData.scheduleId}
                  timeSchedule={tempData.timeSchedule}
                  onTime={(time, scheduleId) => onTime(time, scheduleId)}
                  onBook={onBook}
                />
              ))}
              <Pagination
                totalPage={dataSchedule.pagination.totalPage}
                onPress={item => handlePagination(item)}
                currentPage={params.page}
              />
            </>
          ) : (
            <>
              <Text>Schedule not found</Text>
            </>
          )}
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
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
