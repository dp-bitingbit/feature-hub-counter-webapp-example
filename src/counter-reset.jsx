import * as React from 'react';

export default {
  id: 'example:counter-reset',

  dependencies: {
    featureServices: {
      'example:counter': '^1.0.0',
    },
  },

  create(env) {
    const counter = env.featureServices['example:counter'];

    return {
      render: () => <button onClick={() => counter.reset()}>reset</button>,
    };
  },
};
