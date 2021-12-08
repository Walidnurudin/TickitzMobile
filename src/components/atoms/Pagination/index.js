import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

function Pagination({totalPage, onPress, currentPage}) {
  const [data, setData] = useState([]);

  const convert = () => {
    let dataTemp = [];

    for (let i = 1; i <= totalPage; i++) {
      dataTemp.push(i);
    }

    setData(dataTemp);
  };

  useEffect(() => {
    convert();
  }, [totalPage]);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <>
          {data.map(item => (
            <TouchableOpacity
              key={item}
              style={item === currentPage ? styles.itemActive : styles.item}
              onPress={() => onPress(item)}>
              <Text
                style={
                  item === currentPage ? styles.itemTextActive : styles.itemText
                }>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <TouchableOpacity style={styles.itemActive}>
          <Text style={styles.itemTextActive}>1</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  item: {
    padding: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 3,
    borderRadius: 8,
  },
  itemText: {
    color: colors.black,
  },
  itemActive: {
    padding: 10,
    backgroundColor: colors.primary,
    borderColor: 'white',
    borderWidth: 1,
    margin: 3,
    borderRadius: 8,
  },
  itemTextActive: {
    color: 'white',
  },
});

export default Pagination;
