import { Provider } from './Context';
import { useState } from 'react';

export type AppState = {
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {

  const appState: AppState = {
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
