import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
});

const MODEL = "gemini-2.5-flash";

export async function getSuggestionFromAI(userPrompt: string) {
  const prompt = `
        Com base na seguinte descrição de necessidade: "${userPrompt}",
        sugira 10 títulos de filmes ou séries populares que se encaixam perfeitamente.
        A resposta deve conter SOMENTE os títulos, separados por vírgula, sem nenhuma outra palavra ou explicação.
        Exemplo de resposta: "Superbad, The Office, Parks and Recreation".
    `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      config: {
        temperature: 0.8,
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    const result = response.text;

    return result ? result.trim() : "Não consegui gerar sugestões no momento.";
  } catch (e) {
    console.error("Erro ao chamar a API do Gemini:", e);
    // Erro genérico para o usuário final
    return "Erro ao gerar sugestão. Verifique sua chave de API.";
  }
}
