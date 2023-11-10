import React from 'react';
import data from './data.json'

const dat = data;

export const ConfigContext = React.createContext();

export const config = {
  ru: dat,
  en: {}
};
