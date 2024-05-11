import React from 'react';

interface NotificationButtonProps {
    label: string;
    onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default NotificationButton;