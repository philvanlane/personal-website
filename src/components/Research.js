import React from 'react';
import './Research.css';
import ResearchCard from './reusable/research-card';
import EncotessCard from './reusable/encotess-card';

const Research = () => {
    return (
        <div className="research container">
            <h1>Research</h1>
            <br></br>
            <hr />
            <EncotessCard/>
            <hr />
            <ResearchCard/>
            <hr />
        </div>
    );
}

export default Research;