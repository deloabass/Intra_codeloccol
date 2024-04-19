import React, { useState } from 'react';

function LoginForm() {
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [numberOfTries, setNumberOfTries] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setInputName(value);
    } else if (name === 'password') {
      setInputPassword(value);
    }
  };

  const handleLogin = () => {
    if (inputName === '' || inputPassword === '') {
      alert("Veuillez remplir les champs");
      return;
    }

    // Vérification des majuscules et minuscules dans le nom d'utilisateur et le mot de passe
    const usernamePattern = /[a-z]/.test(inputName) && /[A-Z]/.test(inputName);
    const passwordPattern = /[a-z]/.test(inputPassword) && /[A-Z]/.test(inputPassword);

    if (!usernamePattern || !passwordPattern) {
      alert("Le nom d'utilisateur et le mot de passe doivent contenir au moins une lettre majuscule et une lettre minuscule.");
      return;
    }

    // Votre logique pour vérifier l'authentification avec les données stockées dans localStorage
    // Si l'authentification réussit, effectuez les actions appropriées
    // Sinon, mettez à jour numberOfTries et affichez les messages d'alerte appropriés

    setNumberOfTries(numberOfTries + 1);
    if (numberOfTries === 1) {
      alert("Nom d'utilisateur ou mot de passe incorrect. Il vous reste 2 tentatives.");
    } else if (numberOfTries === 2) {
      alert("Nom d'utilisateur ou mot de passe incorrect. Il vous reste 1 tentative.");
    } else if (numberOfTries === 3) {
      alert("Nombre maximum de tentatives atteint. Veuillez réessayer plus tard.");
      // Vous pouvez également ajouter ici du code pour bloquer l'accès après trois tentatives
    }
  };

  return (
    <div>
      <input type="text" name="username" placeholder="Nom d'utilisateur" value={inputName} onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Mot de passe" value={inputPassword} onChange={handleInputChange} />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default LoginForm;

