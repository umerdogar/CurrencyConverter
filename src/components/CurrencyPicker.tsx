// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   StyleSheet,
//   Animated,
// } from "react-native";
// import { colors, fontSizes, spacing, borderRadius } from '@styles';

// interface Props {
//   selectedValue: string;
//   currencies: string[];
//   onValueChange: (value: string) => void;
// }

// export const CurrencyPicker = ({
//   selectedValue,
//   currencies,
//   onValueChange,
// }: Props) => {
//   const [visible, setVisible] = useState(false);
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const openModal = () => {
//     setVisible(true);
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 150,
//       useNativeDriver: true,
//     }).start();
//   };

//   const closeModal = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 150,
//       useNativeDriver: true,
//     }).start(() => setVisible(false));
//   };

//   const handleSelect = (code: string) => {    
//     closeModal();
//     onValueChange(code);
//   };

//   return (
//     <>
//       <TouchableOpacity style={styles.trigger} onPress={openModal}>
//         <Text style={styles.code}>{selectedValue}</Text>
//         <Text style={styles.arrow}>▼</Text>
//       </TouchableOpacity>

//       <Modal
//         visible={visible}
//         transparent
//         animationType="none"
//         hardwareAccelerated
//         statusBarTranslucent
//       >
//         <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
//           <TouchableOpacity
//             style={StyleSheet.absoluteFill}
//             onPress={closeModal}
//           />
//           <View style={styles.dropdown}>
//             <FlatList
//               data={currencies}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={[
//                     styles.option,
//                     item === selectedValue && styles.optionSelected,
//                   ]}
//                   onPress={() => handleSelect(item)}
//                 >
//                   <Text style={styles.optionText}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         </Animated.View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   trigger: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: colors.surface,
//     borderRadius: borderRadius.md,
//     borderWidth: 1,
//     borderColor: colors.inputBorder,
//     padding: spacing.md,
//     marginBottom: spacing.md,
//   },
//   flag: {
//     fontSize: fontSizes.lg,
//     marginRight: spacing.sm,
//   },
//   code: {
//     flex: 1,
//     fontSize: fontSizes.md,
//     color: colors.textPrimary,
//     fontWeight: "500",
//   },
//   arrow: {
//     fontSize: fontSizes.sm,
//     color: colors.textSecondary,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.3)",
//     justifyContent: "center",
//     padding: spacing.lg,
//   },
//   dropdown: {
//     backgroundColor: colors.surface,
//     borderRadius: borderRadius.md,
//     maxHeight: 350,
//     padding: spacing.sm,
//   },
//   option: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: spacing.md,
//     borderRadius: borderRadius.sm,
//   },
//   optionSelected: {
//     backgroundColor: colors.background,
//   },
//   optionText: {
//     fontSize: fontSizes.md,
//     color: colors.textPrimary,
//   },
// });

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { colors, fontSizes, spacing, borderRadius } from '@styles';
import { currencyFlags } from '@utils/currencyFlags';

interface Props {
  selectedValue: string;
  currencies: string[];
  onValueChange: (value: string) => void;
}

export const CurrencyPicker = ({
  selectedValue,
  currencies,
  onValueChange,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const openModal = () => {
    setVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  const handleSelect = (code: string) => {
    closeModal();
    onValueChange(code);
  };

  return (
    <>
      <TouchableOpacity style={styles.trigger} onPress={openModal}>
        <Text style={styles.flag}>
         {currencyFlags[selectedValue] ?? '🏳️'}
        </Text>
        <Text style={styles.code}>{selectedValue}</Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="none"
        hardwareAccelerated
        statusBarTranslucent
      >
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
          <TouchableOpacity
            style={StyleSheet.absoluteFill}
            onPress={closeModal}
          />
          <View style={styles.dropdown}>
            <FlatList
              data={currencies}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item === selectedValue && styles.optionSelected,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.flag}>
                    {currencyFlags[item] ?? '🏳️'}
                  </Text>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  flag: {
    fontSize: fontSizes.lg,
    marginRight: spacing.sm,
  },
  code: {
    flex: 1,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    fontWeight: "500",
  },
  arrow: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    padding: spacing.lg,
  },
  dropdown: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    maxHeight: 350,
    padding: spacing.sm,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderRadius: borderRadius.sm,
  },
  optionSelected: {
    backgroundColor: colors.background,
  },
  optionText: {
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },
});