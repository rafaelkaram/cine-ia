import { getSuggestionFromAI } from "@/services/ia/gemini";
import { styles } from "@/styles";
import { useFonts } from "expo-font";
import { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const FONT_PATH = "../assets/fonts/BebasNeue-Regular.ttf";

export default function Index() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestionResult, setSuggestionResult] = useState<string[] | null>(
    null
  );

  const [fontsLoaded] = useFonts({
    CineFont: require(FONT_PATH),
  });

  const handleGenerateSuggestion = async () => {
    if (prompt.trim() === "") return;

    Keyboard.dismiss();

    setIsLoading(true);
    setSuggestionResult(null);
    try {
      const titlesString = await getSuggestionFromAI(prompt);

      console.log("Resposta da IA (String):", titlesString);

      const titlesArray = titlesString
        .split(",")
        .map((title) => title.trim())
        .filter((title) => title.length > 0);

      setSuggestionResult(titlesArray);
    } catch (error) {
      console.error("Erro na UI ao gerar sugestão:", error);
      setSuggestionResult([
        "Erro ao conectar com a IA. Verifique sua chave e o console.",
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator size="large" color="#df0707" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>CINE IA</Text>
        <Text style={styles.subtitle}>O que você quer assistir hoje?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Quero algo leve para rir e esquecer o estresse."
          placeholderTextColor="#aaaaaa"
          multiline
          value={prompt}
          onChangeText={setPrompt}
        />
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleGenerateSuggestion}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#0b0000" size="small" />
          ) : (
            <Text style={styles.buttonText}>GERAR SUGESTÃO</Text>
          )}
        </TouchableOpacity>

        {suggestionResult && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsHeader}>Sugestões do CINE IA:</Text>
            {suggestionResult.map((title, index) => (
              <Text key={index} style={styles.resultItem}>
                🎬 {title}
              </Text>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
