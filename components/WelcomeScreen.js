import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

export default function WelcomeScreen() {
  // 1. Récupérer le thème système d'abord
  const colorScheme = useColorScheme();
  const [showDebug, setShowDebug] = useState(false);

  // 2. Calculer effectiveIsLight APRÈS avoir colorScheme
  const effectiveIsLight = colorScheme === 'light';
  
  // 3. Palette complète (utilise effectiveIsLight qui est maintenant défini)
  const palette = effectiveIsLight
    ? {
        // Thème clair
        background: '#EDEFEE',
        text: '#333333',
        accent: '#EE9972',
        secondary: '#F4CE14',
        cardBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        border: '#D4D4D4',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        muted: '#777777',
        shadow: 'rgba(0, 0, 0, 0.1)',
        debugBackground: '#F8F8F8',
      }
    : {
        // Thème sombre (inclut le cas null)
        background: '#333333',
        text: '#EDEFEE',
        accent: '#EE9972',
        secondary: '#F4CE14',
        cardBackground: '#424242',
        headerBackground: '#2D2D2D',
        border: '#555555',
        success: '#66BB6A',
        warning: '#FFB74D',
        error: '#EF5350',
        muted: '#AAAAAA',
        shadow: 'rgba(0, 0, 0, 0.3)',
        debugBackground: '#2A2A2A',
      };

  // Fonction pour formater la valeur de colorScheme
  const formatColorScheme = (scheme) => {
    if (scheme === null) return 'null (défaut: sombre)';
    return scheme === 'light' ? 'clair' : 'sombre';
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.background }}>
      <StatusBar 
        barStyle={effectiveIsLight ? 'dark-content' : 'light-content'}
        backgroundColor={palette.headerBackground}
      />
      
      <ScrollView 
        style={[styles.container, { backgroundColor: palette.background }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Barre d'accent en haut */}
        <View style={[styles.accentBar, { backgroundColor: palette.accent }]} />
        
        {/* En-tête avec logo */}
        <View style={[styles.headerContainer, { backgroundColor: palette.headerBackground }]}>
          <View style={styles.headerWrapper}>
  <Image
    source={require('../assets/icon.png')}  // ← CORRIGÉ ICI
    style={styles.image}
    resizeMode="contain"
    accessibilityLabel="Logo My Bistro"
  />
            <View style={styles.titleContainer}>
              <Text style={[styles.headerText, { color: palette.text }]}>
                My Bistro
              </Text>
              <Text style={[styles.subtitle, { color: palette.accent }]}>
                Cuisine & Convivialité
              </Text>
            </View>
          </View>
        </View>

        {/* Bouton pour activer/désactiver le mode debug */}
        <View style={styles.debugToggleContainer}>
          <TouchableOpacity 
            style={[styles.debugToggleButton, { backgroundColor: palette.cardBackground }]}
            onPress={() => setShowDebug(!showDebug)}
          >
            <Text style={[styles.debugToggleText, { color: palette.text }]}>
              {showDebug ? 'Masquer Debug' : 'Afficher Debug'}
            </Text>
            <Switch
              value={showDebug}
              onValueChange={setShowDebug}
              trackColor={{ false: palette.border, true: palette.accent }}
              thumbColor={showDebug ? palette.secondary : '#f4f3f4'}
            />
          </TouchableOpacity>
        </View>

        {/* Section principale */}
        <View style={styles.contentWrapper}>
          <View style={[styles.introCard, { 
            backgroundColor: palette.cardBackground,
            borderColor: palette.border,
            shadowColor: palette.shadow
          }]}>
            <Text style={[styles.regularText, { color: palette.text }]}>
              My Bistro est une application de démonstration permettant d'explorer
              l'adaptation automatique du thème clair/sombre dans React Native.
            </Text>
            
            {/* Indicateur de thème */}
            <View style={styles.themeIndicator}>
              <View style={[
                styles.themeBadge, 
                { 
                  backgroundColor: palette.accent,
                  borderColor: palette.border
                }
              ]}>
                <Text style={styles.themeBadgeText}>
                  Thème: {effectiveIsLight ? 'Clair' : 'Sombre'}
                </Text>
              </View>
            </View>
          </View>

          {/* Barre d'accent décorative */}
          <View style={[styles.accentBarWide, { backgroundColor: palette.accent }]} />

          {/* Section caractéristiques */}
          <View style={styles.featuresSection}>
            <Text style={[styles.sectionTitle, { color: palette.text }]}>
              Caractéristiques
            </Text>
            
            {[
              {
                title: 'Adaptation automatique',
                description: 'S\'adapte au thème système sans redémarrage'
              },
              {
                title: 'Accessibilité',
                description: 'Contraste optimal pour tous les utilisateurs'
              },
              {
                title: 'Performance',
                description: 'Rendu fluide et réactif'
              },
              {
                title: 'Mode hors ligne',
                description: 'Fonctionne sans connexion Internet'
              }
            ].map((feature, index) => (
              <View 
                key={index} 
                style={[
                  styles.featureCard, 
                  { 
                    backgroundColor: palette.cardBackground,
                    borderColor: palette.border 
                  }
                ]}
              >
                <View style={[styles.featureIcon, { backgroundColor: palette.accent }]} />
                <View style={styles.featureContent}>
                  <Text style={[styles.featureTitle, { color: palette.text }]}>
                    {feature.title}
                  </Text>
                  <Text style={[styles.featureDescription, { color: palette.muted }]}>
                    {feature.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Section DEBUG - Optionnelle */}
          {showDebug && (
            <View style={[styles.debugContainer, { backgroundColor: palette.debugBackground }]}>
              <Text style={[styles.debugTitle, { color: palette.accent }]}>
                🔍 Mode Debug Activé
              </Text>
              
              <View style={styles.debugInfo}>
                <Text style={[styles.debugLabel, { color: palette.text }]}>
                  colorScheme détecté :
                </Text>
                <Text style={[styles.debugValue, { color: palette.accent }]}>
                  {String(colorScheme)}
                </Text>
              </View>
              
              <View style={styles.debugInfo}>
                <Text style={[styles.debugLabel, { color: palette.text }]}>
                  effectiveIsLight :
                </Text>
                <Text style={[styles.debugValue, { color: effectiveIsLight ? palette.success : palette.warning }]}>
                  {String(effectiveIsLight)}
                </Text>
              </View>
              
              <View style={styles.debugInfo}>
                <Text style={[styles.debugLabel, { color: palette.text }]}>
                  Palette utilisée :
                </Text>
                <Text style={[styles.debugValue, { color: palette.text }]}>
                  {effectiveIsLight ? 'Clair' : 'Sombre/Null'}
                </Text>
              </View>
              
              <View style={styles.debugInfo}>
                <Text style={[styles.debugLabel, { color: palette.text }]}>
                  Valeur formatée :
                </Text>
                <Text style={[styles.debugValue, { color: palette.secondary }]}>
                  {formatColorScheme(colorScheme)}
                </Text>
              </View>
              
              <Text style={[styles.debugHint, { color: palette.muted }]}>
                ℹ️ Cette section est uniquement à des fins de développement.
                Elle ne sera pas visible en production.
              </Text>
            </View>
          )}

          {/* Barre d'accent en bas */}
          <View style={[styles.accentBar, { backgroundColor: palette.accent, marginTop: 30 }]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  accentBar: {
    height: 4,
    width: '100%',
  },
  accentBarWide: {
    height: 8,
    marginHorizontal: 20,
    borderRadius: 4,
    marginVertical: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '500',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  debugToggleContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  debugToggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  debugToggleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  contentWrapper: {
    padding: 20,
  },
  introCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  regularText: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 20,
  },
  themeIndicator: {
    alignItems: 'center',
    marginTop: 10,
  },
  themeBadge: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  themeBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  featuresSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    alignItems: 'center',
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  // Styles pour la section debug
  debugContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#555',
  },
  debugTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  debugInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  debugLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  debugValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  debugHint: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 15,
    textAlign: 'center',
  },
});