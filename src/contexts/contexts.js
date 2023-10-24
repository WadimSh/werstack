import React from 'react';
import data from '../data/data'

const dat = data;

export const ConfigContext = React.createContext();

export const config = {
  ru: dat,
  en: {}
};
