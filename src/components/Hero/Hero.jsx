import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />

        {/*The best ad*/}
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "160px" : "238" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>O melhor de BH e região</span>
        </div>

        {/*Hero text*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Ideal</span>
          </div>
          <div>
            <span>Para o seu corpo</span>
          </div>
          <div>
            <span>
              Aqui vamos ajudá-lo a moldar e construir o seu corpo ideal,
              viva sua vida ao máximo
            </span>
          </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>ALUNOS PREIMADOS</span>
          </div>
          <div>
            <span>
              <NumberCounter end={9780} start={8000} delay="4" preFix="+" />
            </span>
            <span>HORAS TREINAS</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="2" preFix="+" />
            </span>
            <span>TIPOS DE TREINAMENTO</span>
          </div>
        </div>

        {/*Hero-buttons*/}
        <div className="hero-buttons">
          <button className="btn">Vamos começar</button>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Começar</button>

        <motion.div
          initial={{ right: "-1rem" }}
          transition={transition}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Batimentos</span>
          <span>116 bpm</span>
        </motion.div>

        {/*Hero-images*/}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          transition={transition}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/*Calories*/}
        <motion.div
          initial={{ right: "37rem" }}
          transition={transition}
          whileInView={{ right: "28rem" }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Perdidas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
