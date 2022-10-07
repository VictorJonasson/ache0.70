import React from 'react';
import {Icon, useTheme} from '@ui-kitten/components';

export function LoginKeyIcon() {
  return (
    <Icon
      style={{
        width: 22,
        height: 22,
      }}
      name="key"
      pack="feather"
      animation="pulse"
    />
  );
}

export const LoginUserIcon = () => (
  <Icon
    style={{
      width: 22,
      height: 22,
    }}
    name="user"
    pack="feather"
  />
);

export const BottomTabAcheIcon = () => (
  <Icon
    style={{
      width: 22,
      height: 22,
      color: 'rgba(77, 186, 249, 0.4)',
    }}
    name="thumbs-down"
    pack="feather"
  />
);

export const BottomTabUserIcon = () => (
  <Icon
    style={{
      width: 22,
      height: 22,
      color: 'rgba(77, 186, 249, 0.4)',
    }}
    name="user"
    pack="feather"
  />
);

export const BottomTabCalendarIcon = () => (
  <Icon
    style={{
      width: 22,
      height: 22,
      color: 'rgba(77, 186, 249, 0.4)',
    }}
    name="calendar"
    pack="feather"
  />
);

export function AlertIcon() {
  const theme = useTheme();
  return (
    <Icon
      style={{
        width: 22,
        height: 22,
        marginRight: 5,
        color: theme['color-warning-600'],
        elevation: 3,
      }}
      name="alert-octagon"
      pack="feather"
    />
  );
}
