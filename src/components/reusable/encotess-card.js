import React from "react";
import './research-card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EncotessCard = () => {
  return (
    <div className="research-card container">
      <div className="gyro-video">
        <img src={`${process.env.PUBLIC_URL}/images/encotess_umap_age.png`} alt="EncoTESS light curve encodings compressed into 2 dimensions with UMAP, colour coded by stellar age" />
        <div className='vid-caption'>
        Encodings of the light curves in our EncoTESS training catalogue, compressed into 2 dimensions with UMAP. Light curves are colour coded by the age of the star.
        </div>
    </div>
    <div className="gyro-content">
    <div className="research-title">
        Age Inference from Raw TESS Light Curve Encodings 
        </div>
    <div className="gyro-collaborators">
        Collaborators: Joshua S. Speagle (沈佳士), Ryan Cloutier, Christopher A. Theissen, Gwendolyn M. Eadie, Ilay Kamai
    </div>
    <div className='gyro-paper-details'>
    <div className="encotess-link" >
            <i className="fa-brands fa-github"></i>&nbsp;
            <a href="https://github.com/philvanlane/encotess" target="_blank" rel="noopener noreferrer"><b>EncoTESS</b></a>
            </div>
            <i className="fas fa-scroll"></i>&nbsp;
            <a href="https://arxiv.org/abs/2608.25019" target="_blank" rel="noopener noreferrer"><b>Van-Lane et al. (2026)</b> [arXiv]</a>

    </div>
    <div className="gyro-description">
        This work includes the development of a Time Series Foundation Model (TSFM) called <b>EncoTESS</b> that uses self-supervised training to encode raw 2-min <i>TESS</i> light curves into a latent feature space. EncoTESS is compact relative to literature TSFMs, and can be run easily on modern laptops. The encodings track different types of stellar variability such as rotation and flaring, and can be used to infer stellar ages. In particular, the EncoTESS encodings outperform rotation period as an age indicator for young M dwarfs. On the GitHub repository we provide the EncoTESS code, pre-trained model, and encodings for the full 2-min TESS light curve catalogue.
    </div>

    </div>
    </div>
  );
}

export default EncotessCard;
