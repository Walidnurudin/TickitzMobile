import React from 'react';
import {View, Text} from 'react-native';

function MsgResponse({msg, isSuccess}) {
  return (
    <View style={{marginBottom: 30, alignItems: 'center'}}>
      <Text style={{color: isSuccess ? 'green' : 'red'}}>{msg}</Text>
    </View>
  );
}

export default MsgResponse;
