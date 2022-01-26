import React from 'react';
import './styles.css'
import ProfileImg from '../../img/Perfil.png'

const Profile = () => {
  return(
    <div>
      <img src={ProfileImg} alt="Imagem de Perfil" id="profileimg"/>
    </div>
  )
}

export default Profile;