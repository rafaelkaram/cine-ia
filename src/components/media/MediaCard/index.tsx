import { MediaResult, MediaType } from "@/src/types/media";
import { getMediaTypeLabel } from "@/src/utils/formatters";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface MediaCardProps extends MediaResult {
  onPress?: (id: number, mediaType: MediaType) => void;
}

export const MediaCard = ({
  id,
  title,
  overview,
  posterUrl,
  mediaType,
  onPress,
}: MediaCardProps) => {
  const typeLabel = getMediaTypeLabel(mediaType);

  const handlePress = () => {
    if (onPress && mediaType !== "person") {
      onPress(id, mediaType as MediaType);
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {posterUrl ? (
        <Image
          source={{ uri: posterUrl }}
          style={styles.poster}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.posterPlaceholder}>
          <Text style={styles.placeholderText}>Capa indisponível</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.mediaType}>{typeLabel}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.overview} numberOfLines={4}>
          {overview}
        </Text>
        {mediaType !== "person" && (
          <Text style={styles.tapHint}>Toque para ver detalhes</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
