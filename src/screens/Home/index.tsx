import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Header } from "@/src/components/layout/Header";
import { MediaCard } from "@/src/components/media/MediaCard";
import { MediaDetailsModal } from "@/src/components/media/MediaDetailsModal";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { LoadingOverlay } from "@/src/components/ui/LoadingOverlay";

import { useMediaSuggestions } from "@/src/hooks/useMediaSuggestions";
import { MediaType } from "@/src/types/media";

import { styles } from "./styles";

const FONT_PATH = "../../../assets/fonts/BebasNeue-Regular.ttf";

export const HomeScreen = () => {
  const [prompt, setPrompt] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{
    id: number;
    mediaType: MediaType;
  } | null>(null);

  const { mediaResults, isLoading, generateSuggestion } = useMediaSuggestions();

  const [fontsLoaded] = useFonts({
    CineFont: require(FONT_PATH),
  });

  const handleCardPress = (id: number, mediaType: MediaType) => {
    setSelectedMedia({ id, mediaType });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedMedia(null);
  };

  const handleGenerateSuggestion = () => {
    Keyboard.dismiss();
    generateSuggestion(prompt);
  };

  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        <Header title="CINE IA" subtitle="O que você quer assistir hoje?" />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Input
            variant="multiline"
            placeholder="Ex: Quero algo leve para rir e esquecer o estresse."
            multiline
            value={prompt}
            onChangeText={setPrompt}
          />
        </TouchableWithoutFeedback>

        <Button
          title="GERAR SUGESTÃO"
          onPress={handleGenerateSuggestion}
          loading={isLoading}
        />

        {mediaResults.length > 0 && (
          <View style={styles.resultsList}>
            <Text style={styles.resultsHeader}>
              Encontramos estas opções para você:
            </Text>
            {mediaResults.map((media) => (
              <MediaCard key={media.id} {...media} onPress={handleCardPress} />
            ))}
          </View>
        )}
      </ScrollView>

      {isLoading && <LoadingOverlay />}

      {selectedMedia && (
        <MediaDetailsModal
          visible={modalVisible}
          onClose={handleCloseModal}
          mediaId={selectedMedia.id}
          mediaType={selectedMedia.mediaType}
        />
      )}
    </View>
  );
};
