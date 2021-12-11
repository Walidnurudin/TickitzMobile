import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {colors} from '../../../utils/colors';

function Midtrans({navigation, route}) {
  const [params, setParams] = useState({
    url: route.params.params.url,
    dataSeat: route.params.params.dataSeat,
    dateSchedule: route.params.params.dateSchedule,
    movieId: route.params.params.movieId,
    scheduleId: route.params.params.scheduleId,
    timeSchedule: route.params.params.timeSchedule,
    total: route.params.params.total,
    name: route.params.params.name,
    premiere: route.params.params.premiere,
    paymentMethod: route.params.params.paymentMethod,
  });

  const webviewRef = React.useRef(null);

  const toTicket = () => {
    navigation.navigate('Ticket', {
      params: {
        ...params,
      },
    });
  };

  const webViewgoback = () => {
    if (webviewRef.current) {
      webviewRef.current.goBack();
    }
  };

  const webViewNext = () => {
    if (webviewRef.current) {
      webviewRef.current.goForward();
    }
  };

  const LoadingIndicatorView = () => {
    return (
      <ActivityIndicator
        color={colors.primary}
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          source={{
            uri: params.url,
          }}
          style={{width: '100%', height: '100%'}}
        />
        <View style={styles.tabBarContainer}>
          {/* <TouchableOpacity onPress={webViewgoback}>
            <Text style={{color: 'green'}}>Back</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={toTicket}>
            <Text style={{color: colors.primary}}>Get Ticket</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={webViewNext}>
            <Text style={{color: 'green'}}>Next</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: '#d3d3d3',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 24,
  },
  arrow: {
    color: '#ef4771',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Midtrans;
