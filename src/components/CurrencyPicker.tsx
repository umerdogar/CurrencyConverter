import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { colors } from "@styles/colors";
import { fontSizes } from "@styles/typography";
import { spacing } from "@styles/spacing";
import { borderRadius } from "@styles/spacing";

interface Props {
  selectedValue: string;
  currencies: string[];
  onValueChange: (value: string) => void;
}

const CurrencyPicker = ({
  selectedValue,
  currencies,
  onValueChange,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (code: string) => {
    setVisible(false);
    onValueChange(code);
  };

  return (
    <>
      <TouchableOpacity style={styles.trigger} onPress={() => setVisible(true)}>
        {/* <Text style={styles.flag}>{currencyFlags[selectedValue]}</Text> */}
        <Text style={styles.code}>{selectedValue}</Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
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
                  {/* <Text style={styles.flag}>{currencyFlags[item]}</Text> */}
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
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

export default CurrencyPicker;
