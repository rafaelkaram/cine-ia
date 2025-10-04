export const formatDate = (dateString: string): string => {
  if (!dateString || dateString === "Data não disponível") return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
};

export const formatRuntime = (minutes?: number): string => {
  if (!minutes) return "Não informado";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return hours > 0
    ? `${hours}h ${remainingMinutes}min`
    : `${remainingMinutes}min`;
};

export const getMediaTypeLabel = (mediaType: string): string => {
  return mediaType === "tv" ? "SÉRIE" : "FILME";
};
