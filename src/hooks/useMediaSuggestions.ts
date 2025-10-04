import { useState } from "react";

import { searchMediaByTitle } from "@/src/services/api/tmdb";
import { getSuggestionFromAI } from "@/src/services/ia/gemini";
import { MediaResult } from "@/src/types/media";

export const useMediaSuggestions = () => {
  const [mediaResults, setMediaResults] = useState<MediaResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateSuggestion = async (prompt: string) => {
    if (prompt.trim() === "") return;

    setIsLoading(true);
    setMediaResults([]);

    try {
      const titlesString = await getSuggestionFromAI(prompt);
      console.log("Resposta da IA (String):", titlesString);

      const titlesArray = titlesString
        .split(",")
        .map((title) => title.trim())
        .filter((title) => title.length > 0);

      console.log("Títulos sugeridos pela IA:", titlesArray);

      const detailedResults: MediaResult[] = [];
      const promises = titlesArray.map((title) => searchMediaByTitle(title));
      const tmdbResponses = await Promise.all(promises);

      tmdbResponses.forEach((result) => {
        if (result) {
          detailedResults.push(result);
        }
      });

      setMediaResults(detailedResults);

      if (detailedResults.length === 0) {
        alert(
          "A IA sugeriu títulos, mas não encontramos detalhes visuais para eles na base de dados."
        );
      }
    } catch (error) {
      console.error("Erro na UI ao gerar sugestão:", error);
      setMediaResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mediaResults,
    isLoading,
    generateSuggestion,
  };
};
