import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './src/assets/custom-theme/custom-theme.json';
import StackNavigation from './src/navigation/stack-navigation';
import {FeatherIconsPack} from './src/components/icon-helper/feather-icons';

const Ache = () => (
  <>
    <IconRegistry icons={FeatherIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <StackNavigation />
    </ApplicationProvider>
  </>
);

export default Ache;
