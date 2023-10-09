import React from 'react';
import ReactDOM from 'react-dom/client';
import {createFeatureHub} from '@feature-hub/core';
import {loadAmdModule} from '@feature-hub/module-loader-amd';
import {
  FeatureAppContainer,
  FeatureHubContextProvider,
} from '@feature-hub/react';
import counterDefinition from './counter';
import counterControlDefinition from './counter-control';
import counterDisplayDefinition from './counter-display';
import counterResetDefinition from './counter-reset';

const {featureAppManager} = createFeatureHub('counter-web-app:integrator', {
  moduleLoader: loadAmdModule,
  featureServiceDefinitions: [counterDefinition],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeatureHubContextProvider value={{featureAppManager}}>
      <FeatureAppContainer
        featureAppId="example:counter-control"
        featureAppDefinition={counterControlDefinition}
      />
      <FeatureAppContainer
        featureAppId="example:counter-reset"
        featureAppDefinition={counterResetDefinition}
      />
      <FeatureAppContainer
        featureAppId="example:counter-display"
        featureAppDefinition={counterDisplayDefinition}
      />
    </FeatureHubContextProvider>
  </React.StrictMode>
);
