import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { collection, onSnapshot, addDoc, getDocs, doc, deleteDoc, updateDoc } from '@firebase/firestore';
import './App.css';
import NotificationList from './components/NotificationList';
import NotificationButton from './components/NotificationButton';
import { Notification } from './models/data';
import { db } from './store/firebase';

const App: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // Fetch notifications on every new Snapshot of 'notifications'
    useEffect(() => {
        const notificationsCol = collection(db, 'notifications');
        const unsubscribe = onSnapshot(notificationsCol, (snapshot) => {
            const updatedNotifications = snapshot.docs.map((doc) => {
                const {message, isRead} = doc.data();
                return {message, isRead};
            });
            setNotifications(updatedNotifications);
        });

        return () => unsubscribe();
    }, []);

    // Sends notification to the user
    const handleButtonClick = async (message: string) => {
        const notificationsCol = await collection(db, 'notifications');
        await addDoc(notificationsCol, {
            message,
            isRead: false
        });
    };

    // Deletes notifications from the list
    const handleDeleteButton = async (index: number) => {
        const notificationsCol = await collection(db, 'notifications');
        const snapshot = await getDocs(notificationsCol);
        const docId = snapshot.docs[index].id;
        const docToDelete = await doc(notificationsCol, docId);
        await deleteDoc(docToDelete);
    }

    // Reads notification
    const markAsRead = async (index: number) => {
        const notificationsCol = await collection(db, 'notifications');
        const snapshot = await getDocs(notificationsCol);
        const docId = snapshot.docs[index].id;
        const docToUpdate = await doc(notificationsCol, docId);
        await updateDoc(docToUpdate, 'isRead', true);
    };


    return (
        <div className='App'>
            <h1>Notification System</h1>
            <NotificationButton label="Notification 1" onClick={() => handleButtonClick('Notification 1')}/>
            <NotificationButton label="Notification 2" onClick={() => handleButtonClick('Notification 2')}/>
            <NotificationButton label="Notification 3" onClick={() => handleButtonClick('Notification 3')}/>
            <NotificationList notifications={notifications} markAsRead={markAsRead} onDeleteClick={handleDeleteButton}/>
        </div>
    );
};

export default App;