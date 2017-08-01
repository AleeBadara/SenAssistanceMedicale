# Site web Sen Assistance Médicale

### Installation

1- Cloner le projet sur votre local

2- Exécuter la commande suivante pour installer toutes les dépendances: **npm install**

3- Exécuter la commande suivante pour déployer : **npm start**

4- Visiter *localhost:3000*

5- Voila :thumbsup:

### Minification du bundle.js

On peut minifier le fichier bundle.js pour déploiement en production. Pour cela, il faut:

1- Exécuter la commande suivante de la CLI: 

**webpack -p** 

2- Vérifier que le fichier bundle.js est minifié)

3- Exécuter la commande npm start pour démarrer le serveur

### Stack

Ce projet est développé en ReactJs. 

**Design**:

1. Foundation: qui est un framework de Css à l'instar de Bootstrap. [foundation.zurb.com]
2. Material-UI: qui est le Google's Material Design pour ReactJs. [http://www.material-ui.com/#/]
3. Font-awesome: pour les icones.

**Test**:

1. Jest: framework pour les tests unitaires. [https://facebook.github.io/jest/]

### Structure du projet

1. **app**: dossier principal, contient tous les autres dossiers.
2. **components**: contient tous les composants principaux du projet.
3. **styles**: contient tout le style de l'application (on utilise scss).
4. **app.jsx**: est le point d'entrée.
5. **public**: contient la page html index.html.
6. **jest.config.json** et **.babelrc**: configuration pour utiliser le framework jest pour les tests.
7. **webpack.config.js**: configuration du webpack.
8. **package.json**: gestion des scripts, dépendances, etc. du projet.
