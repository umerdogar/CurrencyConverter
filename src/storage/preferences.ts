import AsyncStorage from "@react-native-async-storage/async-storage";

const FROM_KEY = "fromCurrency";
const TO_KEY = "toCurrency";

export const savePreferences = async (
  from: string,
  to: string,
): Promise<void> => {
  await AsyncStorage.multiSet([
    [FROM_KEY, from],
    [TO_KEY, to],
  ]);
};

export const loadPreferences = async (): Promise<{
  from: string;
  to: string;
}> => {
  const values = await AsyncStorage.multiGet([FROM_KEY, TO_KEY]);
  return {
    from: values[0][1] ?? "GBP",
    to: values[1][1] ?? "USD",
  };
};
