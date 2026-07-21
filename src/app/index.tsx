import { useState, } from 'react';
import type { PropsWithChildren } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, ImageBackground, Button, Alert, TextInput, Image } from 'react-native';


const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');

  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./bg.jpg')}
        style={{ flex: 1 }}
      >
        <View
          style={{
            alignItems: 'center',
            marginTop: '20%',
            // backgroundColor: '#589341',
          }}
        >
          <Image
            source={require('./logo.jpg')}
            style={{ width: 120, height: 120, marginTop: '20%', borderRadius: 60, borderWidth: 2, borderColor: '#589341', }}
          />
        </View>
        <View style={[{ marginTop: '10%', padding: 20, }]}>
          <View style={{ backgroundColor: '#589341', padding: 15, borderRadius: 9, marginBottom: 10 }}>
            <TextInput
              placeholder="Enter your Username"
              value={Username}
              onChangeText={setUsername}
            />
          </View>
          <View style={{ backgroundColor: '#589341', padding: 15, borderRadius: 9, marginBottom: 10 }}>
            <TextInput
              placeholder="Enter your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 9,
                backgroundColor: '#589341',
                // marginBottom: 10,
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                style={{
                  // padding: 10,
                  // borderRadius: 4,
                  backgroundColor: '#589341',
                }}
                onPress={() => {
                  Alert.alert(`You Signed In with the Username : ${Username}!`);
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 20, textAlign: 'center', padding: 10 }}
                >
                  Sign In</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 10,
                padding: 10,
                borderRadius: 9,
                backgroundColor: '#589341',
                // marginBottom: 10,
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                style={{
                  // padding: 10,
                  // borderRadius: 4,
                  backgroundColor: '#589341',
                }}
                onPress={() => {
                  Alert.alert(`You Signed In with the Username : ${Username}!`);
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 20, textAlign: 'center', padding: 10 }}
                >
                  forgot</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;