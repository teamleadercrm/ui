type OperatingSystem = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux';

export const OS_TYPES: Record<string, OperatingSystem> = {
  MAC_OS: 'Mac OS',
  IOS: 'iOS',
  WINDOWS: 'Windows',
  ANDROID: 'Android',
  LINUX: 'Linux',
};

const getOS = (): OperatingSystem | null => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  let os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = OS_TYPES.MAC_OS;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = OS_TYPES.IOS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OS_TYPES.WINDOWS;
  } else if (/Android/.test(userAgent)) {
    os = OS_TYPES.ANDROID;
  } else if (!os && /Linux/.test(platform)) {
    os = OS_TYPES.LINUX;
  }

  return os;
};

export default getOS;
