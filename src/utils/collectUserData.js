// src/utils/collectUser Data.js
import { UAParser } from 'ua-parser-js'; // Change this line

export const collectUserData = () => {
  const parser = new UAParser();
  const userAgent = parser.getUA();
  const browser = parser.getBrowser();
  const device = parser.getDevice();
  const os = parser.getOS();

  const userData = {
    userAgent,
    browser: {
      name: browser.name,
      version: browser.version,
    },
    device: {
      model: device.model,
      type: device.type,
      vendor: device.vendor,
    },
    os: {
      name: os.name,
      version: os.version,
    },
    screen: {
      width: window.screen.width,
      height: window.screen.height,
    },
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  return userData;
};