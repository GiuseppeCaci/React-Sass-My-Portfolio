// postcss.config.js
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport(), // Gestisce gli import CSS
    postcssPresetEnv({
      stage: 1, // Usa le caratteristiche CSS di livello 1
    }),
    autoprefixer(), // Aggiunge i prefissi ai CSS
  ],
};
