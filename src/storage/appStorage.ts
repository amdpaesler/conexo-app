import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGE_KEYS } from './storageKeys';
import type { UserProfile } from '../types/profile';
import type { UserSession } from '../types/session';

async function saveJson<T>(key: string, value: T): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

async function getJson<T>(key: string): Promise<T | null> {
  const value = await AsyncStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
}

export async function saveSelectedProfile(profile: UserProfile): Promise<void> {
  await saveJson(STORAGE_KEYS.selectedProfile, profile);
}

export async function getSelectedProfile(): Promise<UserProfile | null> {
  return getJson<UserProfile>(STORAGE_KEYS.selectedProfile);
}

export async function saveSession(session: UserSession): Promise<void> {
  await saveJson(STORAGE_KEYS.session, session);
}

export async function getSession(): Promise<UserSession | null> {
  return getJson<UserSession>(STORAGE_KEYS.session);
}
