/* @flow strict-local */

import React from 'react';
import type { Node } from 'react';
import { View } from 'react-native';

import { useSelector } from '../react-redux';
import { getUnreadPmsTotal, getUnreadHuddlesTotal } from '../selectors';
import {IconChatBubbleEllipses} from '../common/Icons';
import { CountOverlay } from '../common';

type Props = $ReadOnly<{|
  color: string,
|}>;

export default function IconUnreadConversations(props: Props): Node {
  const { color } = props;
  const unreadHuddlesTotal = useSelector(getUnreadHuddlesTotal);
  const unreadPmsTotal = useSelector(getUnreadPmsTotal);
  const unreadCount = unreadHuddlesTotal + unreadPmsTotal;

  return (
    <View>
      <CountOverlay unreadCount={unreadCount}>
        <IconChatBubbleEllipses size={28} color={color} />
      </CountOverlay>
    </View>
  );
}
