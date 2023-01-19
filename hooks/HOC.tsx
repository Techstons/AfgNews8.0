import React, { useContext } from 'react';
import { DataProvider } from '@hooks/DataContext';

interface Props {
    router: any
  }

export const withDataProvider = <P extends Props>(Component: React.ComponentType<P>)=> {
    return (props: P) => (
      <DataProvider>
        <Component {...props} />
      </DataProvider>
    );
  }