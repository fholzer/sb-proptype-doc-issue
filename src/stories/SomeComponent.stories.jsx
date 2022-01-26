import React from 'react';

import SomeComponent from '../SomeComponent';

export default {
  title: 'Example/SomeComponent',
  component: SomeComponent,
};

const Template = (args) => <SomeComponent {...args} />;

export const SomeComponentExample = Template.bind({});
SomeComponentExample.args = {};
