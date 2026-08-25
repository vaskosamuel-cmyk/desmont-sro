import React from 'react';
import { renderToString } from 'react-dom/server';
import { Logos3 } from './src/components/blocks/logos3';

try {
  const html = renderToString(<Logos3 />);
  console.log("RENDER SUCCESS:", html.substring(0, 100));
} catch (e) {
  console.error("RENDER ERROR:", e);
}
