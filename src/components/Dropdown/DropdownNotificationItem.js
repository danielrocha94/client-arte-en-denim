import React from 'react';
import { faAt, faBullhorn, faBolt, faExclamationTriangle, faEnvelope, faBug } from '@fortawesome/free-solid-svg-icons';
import {DropdownNotifItem,
        NotificationIcon,
        NotificationIconContainer,
        DropdownNotifItemContent,
        DropdownNotifItemDate,
      } from './style'

function getNotificationIcon(type){
  switch(type) {
    case 'announcement':
      return faBullhorn
    case 'mention':
      return faAt
    case 'alert':
      return faBolt
    case 'warning':
      return faExclamationTriangle
    case 'bug':
      return faBug
    default:
      return faEnvelope
  }
}

const DropdownNotificationItem = (props) => {
  return (
    <DropdownNotifItem >
      <NotificationIconContainer type={props.type}>
        <NotificationIcon icon={getNotificationIcon(props.type)} type={props.type}/>
      </NotificationIconContainer>
      <DropdownNotifItemContent>
        {props.children}
        <DropdownNotifItemDate>
          Yesterday
        </DropdownNotifItemDate>
      </DropdownNotifItemContent>
    </DropdownNotifItem>
  )
}

export default DropdownNotificationItem;