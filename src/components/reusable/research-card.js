import React from "react";
import './research-card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResearchCard = () => {
  return (
    <div className="research-card container">
      <div className="gyro-video">
        <video controls>
            <source  src={`${process.env.PUBLIC_URL}/images/gyro_animation.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='vid-caption'>
        A time lapse of the rotation period density distribution predicted by our gyrochronology model: ChronoFlow, for stellar populations at increasing ages. White regions are high probability (where we expect to see more stars). The probabilities are normalized over age and colour, so any vertical line will integrate to 1.
        </div>
    </div>
    <div className="gyro-content">
    <div className="research-title">
        Modelling Rotational Evolution of FGKM Stars with Statistics and Machine Learning
        </div>
    <div className="gyro-collaborators">
        Collaborators: Joshua S. Speagle (沈佳士), Gwendolyn M. Eadie, Stephanie T. Douglas, Phillip A. Cargile, Catherine Zucker, Lucy (Yuxi) Lu, Ruth Angus
    </div>
    <div className='gyro-paper-details'>
            <i class="fas fa-bookmark"></i>&nbsp;
            <a href="https://arxiv.org/abs/2412.12244" target="_blank" rel="noopener noreferrer">Van-Lane et al. (2025) preprint</a>
            <br></br>
            <i class="fas fa-bookmark"></i>&nbsp;
            <a href="https://arxiv.org/abs/2307.08753" target="_blank" rel="noopener noreferrer">Van-Lane et al. (2023) ICML paper</a>
    </div>
    <div className="gyro-description">
        My PhD research to date has been focused on characterizing the rotational evolution of low mass (~FGKM) main sequence (MS) stars. Stellar ages are important to astronomy on a wide range of scales, but dating these FGKM dwarfs can be challenging due to their long MS lifetimes. Importantly, they do undergo <i>stellar spindown</i> because of magnetic braking, meaning that measuring their rotation periods can provide insight into their age; this technique is known as <b>gyrochronology</b>. However, the observed dispersion in rotation rates for similar coeval stars has historically been difficult to characterize with traditional analytical models. To model stellar spindown more flexibly, we have developed a data-driven machine learning model: <b>ChronoFlow</b>. We introduced a proof-of-concept in Van-Lane et al. (2023), and have released the final model in Van-Lane at al. (2025). In the latter work, we also compiled the largest open cluster rotational catalogue to date, which we hope is useful for the wider community.
    </div>

    </div>
    </div>
  );
}

export default ResearchCard;