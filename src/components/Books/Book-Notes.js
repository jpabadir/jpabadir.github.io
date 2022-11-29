import {Routes, Route } from 'react-router-dom';
import HowTheWorldReallyWorks from './Book Notes/How The World Really Works';

function BookNotesNav() {
    return (
        <Routes>
            <Route path='howtheworldreallyworks' element={<HowTheWorldReallyWorks/>} />
        </Routes>
    )
}

export default BookNotesNav;