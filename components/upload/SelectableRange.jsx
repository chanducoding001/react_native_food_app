// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Slider from '@react-native-community/slider';

// const SelectableRange = () => {
//   const [selectedValue, setSelectedValue] = useState(30);

//   const handleChange = (value) => {
//     setSelectedValue(value);
//   };

//   return (
//     <View style={styles.container}>
//     <Text style={styles.valueText}>{selectedValue}</Text>
//       <Slider
//         style={{ width: '80%', height: 20, backgroundColor:'' }}
//         minimumValue={30}
//         maximumValue={60}
//         minimumTrackTintColor="#FFFFFF"
//         maximumTrackTintColor="#000000"
//         step={1}
//         value={selectedValue}
//         onValueChange={handleChange}
//       />
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     backgroundColor:'green',
//     // height:200
//   },
//   valueText: {
//     fontSize: 24,
    
//   },
// });

// export default SelectableRange;




import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const SelectableRange = () => {
  const [selectedValue, setSelectedValue] = useState(30);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.rangeTextContainer}>
        <Text style={styles.rangeText}>{"< 30"}</Text>
        <Text style={styles.rangeText}>{"60 <"}</Text>
      </View>
      <Text style={styles.valueText}>{selectedValue}</Text>
      <Slider
        style={{ width: '80%', height: 10 }}
        minimumValue={0}
        maximumValue={60}
        minimumTrackTintColor="green"
        maximumTrackTintColor="red"
        thumbTintColor="white"
        step={1}
        value={selectedValue}
        onValueChange={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom:20
  },
  rangeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 5,
  },
  rangeText: {
    fontSize: 16,
    color: 'gray',
  },
  valueText: {
    fontSize: 24,
  },
  
});

export default SelectableRange;
