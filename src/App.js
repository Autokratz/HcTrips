import {useEffect} from "react";
import {useDispatch} from "react-redux";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import './App.css';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TaskPage from "./pages/TaskPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import {fetchCampsites} from "./features/campsites/campsitesSlice";
import {fetchPartners} from "./features/partners/partnersSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import { fetchComments } from "./features/comments/commentsSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="directory" element={<CampsitesDirectoryPage/>}/>
                <Route path="tasks" element={<TaskPage/>}/>
                <Route
                    path="directory/:campsiteId"
                    element={<CampsiteDetailPage/>}
                />
                <Route path="about" element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
export default App;