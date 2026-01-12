# 📱 Lab React Native - Adaptation au Thème Système

## 🎯 **Objectif du TP**
Créer une application React Native qui s'adapte **automatiquement** au thème système (clair/sombre) de l'appareil, sans connexion Internet requise.

---

## 📋 **Plan du TP**

### **Phase 1 : Configuration Initiale**
- ✅ Création du projet Expo
- ✅ Structure des fichiers
- ✅ Lancement de l'émulateur

### **Phase 2 : Interface de Base**
- ✅ Création de l'écran d'accueil
- ✅ Ajout du logo et du texte
- ✅ Styles statiques

### **Phase 3 : Détection du Thème**
- ✅ Import du hook `useColorScheme`
- ✅ Récupération du thème système
- ✅ Gestion du cas `null`

### **Phase 4 : Système de Couleurs**
- ✅ Définition des palettes clair/sombre
- ✅ Variables centralisées
- ✅ Couleur d'accent identique

### **Phase 5 : Application Dynamique**
- ✅ Styles conditionnels
- ✅ Fond et texte adaptatifs
- ✅ Interface réactive

### **Phase 6 : Fonctionnalités Avancées**
- ✅ Barre d'accent colorée
- ✅ Mode debug visuel
- ✅ Section caractéristiques

### **Phase 7 : Tests et Validation**
- ✅ Test sur émulateurs Android/iOS
- ✅ Vérification des contrastes
- ✅ Correction des erreurs

---

## 🛠️ **Technologies Utilisées**

| Technologie | Version | Rôle |
|------------|---------|------|
| **React Native** | 0.73+ | Framework mobile |
| **Expo** | 50+ | Outils de développement |
| **useColorScheme** | Native | Détection du thème |
| **JavaScript/JSX** | ES6+ | Logique et interface |

---

## 🎨 **Palette de Couleurs**

### **Thème Clair**
- **Fond** : `#EDEFEE` (gris clair)
- **Texte** : `#333333` (gris foncé)
- **Accent** : `#EE9972` (orange saumon)
- **Secondaire** : `#F4CE14` (jaune)

### **Thème Sombre**
- **Fond** : `#333333` (gris foncé)
- **Texte** : `#EDEFEE` (gris clair)
- **Accent** : `#EE9972` (identique)
- **Secondaire** : `#F4CE14` (identique)

---

## 📱 **Éléments de l'Interface**

### **1. Barre d'Accent Supérieure**
- Hauteur : 4px
- Pleine largeur
- Couleur d'accent thématique

### **2. En-tête avec Logo**
- Logo "My Bistro"
- Titre et sous-titre
- Alignement horizontal

### **3. Section Principale**
- Description de l'application
- Indicateur de thème actif
- Cartes des caractéristiques

### **4. Mode Debug**
- Affichage des valeurs `colorScheme`
- Toggle d'activation
- Informations techniques

### **5. Barre d'Accent Inférieure**
- Élément décoratif
- Cohérence visuelle

---

## 🔄 **Comportement Attendu**

### **Détection Automatique**
- L'application détecte le thème système
- Mise à jour en temps réel
- Pas de redémarrage nécessaire

### **Adaptation Visuelle**
- Changement immédiat des couleurs
- Conservation de l'identité visuelle
- Lisibilité garantie

### **Performance**
- Rendu fluide
- Pas de clignotement
- Réactivité optimale

---

## 🧪 **Tests à Réaliser**

### **Sur Émulateur Android**
1. Ouvrir **Paramètres** → **Affichage**
2. Basculer **Mode sombre** ON/OFF
3. Observer l'adaptation

---

## ⚠️ **Points d'Attention**

### **Gestion des Erreurs**
1. **Image manquante** : Vérifier le chemin `assets/images/icon.png`
2. **Thème non détecté** : Vérifier la version de l'OS
3. **Styles non appliqués** : Vérifier l'ordre des styles

### **Bonnes Pratiques**
- Centralisation des couleurs
- Styles conditionnels via tableaux
- Gestion du cas `null`
- Accessibilité des contrastes

---

## 📊 **Critères de Réussite**

### **Fonctionnels**
- [ ] Détection correcte du thème
- [ ] Adaptation en temps réel
- [ ] Interface utilisable dans les deux thèmes
- [ ] Mode debug fonctionnel

### **Techniques**
- [ ] Code sans erreur de compilation
- [ ] Variables bien nommées
- [ ] Structure logique
- [ ] Gestion des erreurs

### **Design**
- [ ] Palette cohérente
- [ ] Contraste suffisant
- [ ] Interface responsive
- [ ] Expérience utilisateur fluide

---

## 🔧 **Dépannage Rapide**

### **Problème** : Image non trouvée
**Solution** : 
```bash
mkdir assets\images
copy image.png assets\images\icon.png
```

### **Problème** : Thème non détecté
**Solution** : 
- Vérifier Android 10+ / iOS 13+
- Redémarrer Metro : `npx expo start --clear`

### **Problème** : Styles non appliqués
**Solution** : Vérifier l'ordre dans `style={[style1, style2]}`

---

## 🚀 **Commandes Utiles**

```bash
# Créer le projet
npx create-expo-app MonAppTheme

# Installer les dépendances
npm install

# Démarrer en développement
npx expo start

# Démarrer sur Android
npx expo start --android

# Démarrer sur iOS
npx expo start --ios

# Nettoyer le cache
npx expo start --clear
```

---

## 📚 **Concepts Clés**

### **Hook useColorScheme**
- Retourne `'light'`, `'dark'` ou `null`
- Abonnement automatique aux changements
- Native (pas de bibliothèque externe)

### **Styles Conditionnels**
- Tableaux de styles `style={[base, conditionnel]}`
- Propriétés inline écrasent les styles de base
- Application dynamique via palette

### **Accessibilité**
- Contraste texte/fond vérifié
- Labels accessibles
- Tailles de texte adaptatives

---

## 🏆 **Compétences Validées**

### **Techniques**
- Utilisation des hooks React Native
- Gestion dynamique des styles
- Adaptation aux préférences système
- Débogage d'applications mobiles

### **Design**
- Création de palettes de couleurs
- Respect des guidelines d'accessibilité
- Interface responsive et adaptative
- Expérience utilisateur cohérente

---

## 📈 **Démonstration**

<img width="959" height="474" alt="TP REactNative1" src="https://github.com/user-attachments/assets/e535a63a-ecb6-4c43-9440-00c549ffdab0" />

<img width="959" height="478" alt="TP REACTnative 2" src="https://github.com/user-attachments/assets/69f1b28b-b2ce-4cd8-87fb-e54c117241f3" />




---

## 📞 **Support**

Réalisé par : Ettouyjer yasmine.

Encadré par : Pr.Mohamed Lechgar

3. **Permissions** : Vérifier les accès fichiers

### **Ressources**
- Documentation React Native
- Forum Expo
- Communauté GitHub

---

**⚠️ Remarque** : Ce TP est conçu pour l'apprentissage. L'application fonctionne entièrement hors ligne et ne collecte aucune donnée.

**✅ Objectif atteint** : Une application qui s'adapte automatiquement et élégamment au thème système de l'utilisateur.
