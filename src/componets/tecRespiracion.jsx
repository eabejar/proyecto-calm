import React from 'react';
import './Estilos/tecRespiracion.css';  
import ReactAudioPlayer from 'react-audio-player';
import practicaRelajacionImg from './imagenes y audios/tecRespiracion/practicas_de_relagacion.png';
import practicaRelajacionDosImg from './imagenes y audios/tecRespiracion/imagendos.png';
import practicaMeditacionImg from './imagenes y audios/tecRespiracion/meditacion.png';
import practicaRelajacionAUD from './imagenes y audios/tecRespiracion/Practica-de-relajacion-Imhay.mp3';
import practicaRespiracionAUD from './imagenes y audios/tecRespiracion/Practica-de-respiracion-Imhay2.mp3';
import practicaMeditacionAUD from './imagenes y audios/tecRespiracion/Audio_meditacion-Imhay-1.mp3';


const Contact = () => {
  return (
    <div>
      <h2>Técnicas de Respiración</h2>
      <div className="video-container">
        <div className="video-column">
          <div className="video-row">
            <div className="video-item">

              <img
                src={practicaRelajacionImg}
                alt="Imagen 1"
                className="image-content"
              />
              <p>Breve práctica de relajación guiada que puedes emplear cuando sientas que lo necesitas.</p>
            </div>
            <div className="video-item">
              <h3>Práctica de Relajación</h3>
              <ReactAudioPlayer
                src={practicaRelajacionAUD}
                autoPlay={false}
                controls
                className="audio-content"
              />
              <p>Duración: 6 minutos y 41 segundos</p>
            </div>
          </div>

          <div className="video-row">
            <div className="video-item">
              <img
                src={practicaRelajacionDosImg}
                alt="Imagen 2"
                className="image-content"
              />
              <p>La práctica de respiración consciente es un recordatorio poderoso de nuestra capacidad 
                innata para encontrar calma y equilibrio, simplemente conectándonos con cada inhalación y exhalación.</p>
            </div>
            <div className="video-item">
              <h3>Práctica de Respiracion</h3>
              <ReactAudioPlayer
                src={practicaRespiracionAUD}
                autoPlay={false}
                controls
                className="audio-content"
              />
              <p>Duración: 6 minutos y 26 segundos</p>
            </div>
          </div>

          <div className="video-row">
            <div className="video-item">
              <img
                src={practicaMeditacionImg}
                alt="Imagen 3"
                className="image-content"
              />
              <p>La meditación junto con la respiración consciente nos guía hacia un espacio interior 
                de serenidad y claridad, donde cada respiración se convierte en un ancla que nos conecta
                 con el presente y nos ayuda a encontrar paz interior.</p>
            </div>
            <div className="video-item">
              <h3>Práctica de Meditacion</h3>
              <ReactAudioPlayer
                src={practicaMeditacionAUD}
                autoPlay={false}
                controls
                className="audio-content"
              />
              <p>Duración: 6 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
