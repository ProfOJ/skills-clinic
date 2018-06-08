import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';

ReactDOM.render(
    <div>
        <Header /> 
        <Section />
        <Footer />
    </div>,
    document.getElementById('root')
);

