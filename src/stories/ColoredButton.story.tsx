import React from 'react';
import { storiesOf } from '@storybook/react';
import { ColoredButton } from '../components';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('ColoredButton', module)
  .add('Default button', () => (
    <ColoredButton
      title="Default button"
      onClick={action('clicked default button')}
    />
  ))
  .add('Red button', () => (
    <ColoredButton
      color="red"
      title="Red button"
      onClick={action('clicked red button')}
    />
  ))
  .add('Other button', () => (
    <ColoredButton
      color="blue"
      title="View ColoredButton stories"
      onClick={linkTo('ColoredButton')}
    />
  ));
