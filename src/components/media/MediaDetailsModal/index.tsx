import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { getMediaDetails } from "@/src/services/api/tmdb";
import { DetailedMedia, MediaType } from "@/src/types/media";
import {
  formatDate,
  formatRuntime,
  getMediaTypeLabel,
} from "@/src/utils/formatters";

import { colors } from "@/src/constants/colors";
import { styles } from "./styles";

interface MediaDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  mediaId: number;
  mediaType: MediaType;
}

export const MediaDetailsModal = ({
  visible,
  onClose,
  mediaId,
  mediaType,
}: MediaDetailsModalProps) => {
  const [details, setDetails] = useState<DetailedMedia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visible && mediaId) {
      fetchDetails();
    }
  }, [visible, mediaId, mediaType]);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const data = await getMediaDetails(mediaId, mediaType);
      setDetails(data);
    } catch (error) {
      console.error("Erro ao buscar detalhes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Carregando detalhes...</Text>
          </View>
        ) : details ? (
          <ScrollView style={styles.scrollContainer} bounces={true}>
            <View style={styles.header}>
              {details.backdropUrl ? (
                <Image
                  source={{ uri: details.backdropUrl }}
                  style={styles.backdrop}
                  resizeMode="cover"
                />
              ) : (
                <View style={[styles.backdrop, styles.backdropPlaceholder]} />
              )}

              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(11, 0, 0, 0.3)",
                  "rgba(11, 0, 0, 0.8)",
                  "#0b0000",
                ]}
                locations={[0, 0.5, 0.8, 1]}
                style={styles.linearGradient}
              />

              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <AntDesign name="close" size={18} color={colors.text.primary} />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <View style={styles.mainInfo}>
                {details.posterUrl && (
                  <Image
                    source={{ uri: details.posterUrl }}
                    style={styles.poster}
                    resizeMode="cover"
                  />
                )}

                <View style={styles.titleSection}>
                  <View style={styles.typeRatingContainer}>
                    <Text style={styles.mediaTypeBadge}>
                      {getMediaTypeLabel(details.mediaType)}
                    </Text>
                    {details.rating > 0 && (
                      <View style={styles.ratingContainer}>
                        <View style={styles.ratingWithIcon}>
                          <AntDesign
                            name="star"
                            size={16}
                            color={colors.accent.gold}
                          />
                          <Text style={styles.ratingText}>
                            {details.rating}
                          </Text>
                        </View>
                        <Text style={styles.voteCount}>
                          ({details.voteCount})
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text style={styles.title}>{details.title}</Text>

                  {details.genres.length > 0 && (
                    <View style={styles.genresContainer}>
                      {details.genres.map((genre, index) => (
                        <Text key={index} style={styles.genre}>
                          {genre}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.detailsSection}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Lançamento:</Text>
                  <Text style={styles.detailValue}>
                    {formatDate(details.releaseDate)}
                  </Text>
                </View>

                {details.runtime && (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Duração:</Text>
                    <Text style={styles.detailValue}>
                      {formatRuntime(details.runtime)}
                    </Text>
                  </View>
                )}

                {details.seasons && (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Temporadas:</Text>
                    <Text style={styles.detailValue}>{details.seasons}</Text>
                  </View>
                )}

                {details.episodes && (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Episódios:</Text>
                    <Text style={styles.detailValue}>{details.episodes}</Text>
                  </View>
                )}

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Status:</Text>
                  <Text style={styles.detailValue}>{details.status}</Text>
                </View>
              </View>

              {details.overview && (
                <View style={styles.overviewSection}>
                  <Text style={styles.overviewTitle}>Sinopse</Text>
                  <Text style={styles.overviewText}>{details.overview}</Text>
                </View>
              )}
            </View>
          </ScrollView>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Erro ao carregar detalhes</Text>
            <TouchableOpacity style={styles.retryButton} onPress={fetchDetails}>
              <Text style={styles.retryButtonText}>Tentar novamente</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};
