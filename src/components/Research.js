import React from 'react';
import './Research.css';
import ResearchCard from './reusable/research-card';

const Research = () => {
    return (
        <div className="research container">
            <h1>Research</h1>
            <br></br>
            <hr />
            <ResearchCard/>
            <hr />
        </div>
    );
}

export default Research;