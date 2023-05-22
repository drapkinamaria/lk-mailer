import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import './StyleSheets/main_elements.css'
import './StyleSheets/text_styles.css'
import './StyleSheets/mailing_elements.css'
import NotificationsList from "./Pages/notifications_list";
import CreateNotification from "./Pages/create_notification";
import Statistics from "./Pages/statistics";
import Information from "./Pages/information";
import SubscriptionManagement from "./Pages/subscription_management";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/notifications-list' element={<NotificationsList />} />
                <Route path='/create-notification' element={<CreateNotification />}/>
                <Route path='/statistics' element={<Statistics/>}/>
                <Route path='/subscription-management' element={<SubscriptionManagement/>}/>
                <Route path='information' element={<Information/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
