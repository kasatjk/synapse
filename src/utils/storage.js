/**
 * Safe local storage wrapper preventing crashes in restricted / iframe / private browsing environments.
 */

export function getStorageItem(key, fallback = null) {
  try {
    const value = window.localStorage.getItem(key);
    return value !== null ? value : fallback;
  } catch (error) {
    console.warn(`[storage] Failed to read "${key}" from localStorage:`, error);
    return fallback;
  }
}

export function setStorageItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`[storage] Failed to write "${key}" to localStorage:`, error);
    return false;
  }
}

export function removeStorageItem(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`[storage] Failed to remove "${key}" from localStorage:`, error);
    return false;
  }
}
