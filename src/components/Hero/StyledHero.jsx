import styled from "styled-components";
import heroWatch from "../../assets/img/hero-watch.png";

export const StyledHero = styled.section`
  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 45px;
  overflow: hidden; /* Assurer qu'aucun contenu ne déborde de la section */

  /* L'image de fond qui sera animée */
  background-image: url(${heroWatch});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: background-color 2s ease, transform 2s ease; /* Transition pour l'agrandissement de l'image */

  /* Effet de montée pour l'image de fond */
  transform: translateY(30px); /* L'image démarre légèrement en bas */
  &.visible {
    transform: translateY(0); /* L'image monte jusqu'à sa position finale */
  }

  /* La couche sombre qui va s'ajouter */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Assombrissement */
    opacity: 0;
    transition: opacity 2s ease; /* Ralentir l'apparition de la couche sombre */
  }

  /* Quand on active la classe visible, la couche sombre devient visible */
  &.visible::before {
    opacity: 1;
  }

  a {
    text-decoration: none;
  }

  /* Contenu au premier plan */
  h1, h2, span, .btn {
    position: relative;
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 2s ease, transform 2s ease; /* Ralentir l'animation des éléments textuels */
  }

  /* Quand la classe visible est ajoutée, on fait apparaître les éléments */
  &.visible h1,
  &.visible h2,
  &.visible span,
  &.visible .btn {
    opacity: 1;
    transform: translateY(0);
  }

  h1 {
    font-size: 92px;
    font-weight: 400;
    line-height: 110.4px;
  }

  h2 {
    font-size: 64px;
    font-weight: 400;
    line-height: 76.8px;
    text-align: center;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
  }

  .btn {
    padding: 20px 15px;
    background-color: rgba(212, 175, 55, 1);
    gap: 8px;
    cursor: pointer;

    span {
      font-size: 36px;
      font-weight: 400;
      line-height: 43.2px;
      color: rgba(10, 10, 10, 1);
    }
  }

  
  @media (max-width: 900px) {
    h1 {
    font-size: 48px;
    }

    h2 {
      font-size: 24px;
    }

    span {
      font-size: 16px;
    }

    .btn {
      span {
        font-size: 24px;
      }
    }
  }
`;
