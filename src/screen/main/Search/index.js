import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Footer, Gap, Pagination} from '../../../components/atoms';
import {CardMovie, InputSearch} from '../../../components/molecules';
import axios from '../../../utils/axios';

function Search() {
  const [dataMovie, setDataMovie] = useState({
    data: [],
    pagination: {},
  });
  const [params, setParams] = useState({
    search: '',
    page: 1,
    limit: 2,
  });

  const getMovie = () => {
    axios
      .get(
        `/movie?page=${params.page}&limit=${params.limit}&search=${params.search}&month=&sort=name ASC`,
      )
      .then(res => {
        setDataMovie({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handleSearch = value => {
    setParams({
      ...params,
      search: value,
    });
  };

  const handleSubmitSearch = () => {
    axios
      .get(
        `/movie?page=${params.page}&limit=${params.limit}&search=${params.search}&month=&sort=name ASC`,
      )
      .then(res => {
        setDataMovie({data: res.data.data, pagination: res.data.pagination});
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
        `/movie?page=${item}&limit=${params.limit}&search=${params.search}&month=&sort=name ASC`,
      )
      .then(res => {
        setDataMovie({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <InputSearch
          onChange={value => handleSearch(value)}
          onPress={handleSubmitSearch}
        />
        <Gap height={30} />
        {dataMovie.data.length > 0 ? (
          <>
            {dataMovie.data.map(item => (
              <CardMovie item={item} />
            ))}
            <Gap height={30} />
            <Pagination
              currentPage={params.page}
              onPress={item => handlePagination(item)}
              totalPage={dataMovie.pagination.totalPage}
            />
          </>
        ) : (
          <>
            <Text>Data not found</Text>
          </>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    // backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 24,
    marginVertical: 30,
  },
});

export default Search;
