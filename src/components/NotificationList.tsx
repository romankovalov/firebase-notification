import React from 'react';
import { Notification } from '../models/data';

interface NotificationListProps {
    notifications: Notification[];
    markAsRead: (index: number) => void;
    onDeleteClick: (index: number) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications, markAsRead, onDeleteClick }) => {
    return (
        <ul>
            {notifications.map((notification, index) => (
                <li key={index} onClick={() => markAsRead(index)}>
                    {notification.message + "    "}
                    {notification.isRead ? "Read" : "New"}
                    {"    "}
                    <button onClick={(e) => {
                        e.stopPropagation();
                        onDeleteClick(index);
                    }}>Delete</button>
                </li>

            ))}
        </ul>
    );
};

export default NotificationList;