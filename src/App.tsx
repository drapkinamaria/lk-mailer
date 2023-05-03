import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import './StyleSheets/main_elements.css'
import './StyleSheets/text_styles.css'
import './StyleSheets/mailing_elements.css'
import NotificationsList from "./Pages/notifications_list";
import CreateNotification from "./Pages/create_notification";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/notifications-list' element={<NotificationsList />} />
                <Route path='/create-notification' element={<CreateNotification />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
