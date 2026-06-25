// src/__tests__/preferences.test.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { savePreferences, loadPreferences } from '../storage/preferences';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('preferences', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('loads default GBP and USD when nothing is saved', async () => {
    const { from, to } = await loadPreferences();
    expect(from).toBe('GBP');
    expect(to).toBe('USD');
  });

  it('saves and loads preferences correctly', async () => {
    await savePreferences('EUR', 'JPY');
    const { from, to } = await loadPreferences();
    expect(from).toBe('EUR');
    expect(to).toBe('JPY');
  });

  it('overwrites previously saved preferences', async () => {
    await savePreferences('EUR', 'JPY');
    await savePreferences('AUD', 'CHF');
    const { from, to } = await loadPreferences();
    expect(from).toBe('AUD');
    expect(to).toBe('CHF');
  });
});