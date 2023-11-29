package com.Rayen.miniprojet1.service;

import com.Rayen.miniprojet1.dto.VoitureDTO;
import com.Rayen.miniprojet1.entities.Voiture;
import com.Rayen.miniprojet1.entities.Marque;
import org.springframework.data.domain.Page;

import java.util.List;

public interface VoitureService {

    VoitureDTO saveVoiture(VoitureDTO voiture);
    VoitureDTO updateVoiture(VoitureDTO voiture);
    void deleteVoiture(Voiture voiture);
    void deleteVoitureById(Long id);
    VoitureDTO getVoiture(Long id);
    List<VoitureDTO> getAllVoiturees();
    Page<Voiture> getAllVoitureParPage(int page, int size);

    List<Voiture> getAllVoiture();
    List<Voiture> findByTypeVoiture(String typeVoiture);
    List<Voiture> findByTypeVoitureContains(String typeVoiture);

    List<Voiture> findByTypeVoitureCouleur (String typeVoiture, String couleur);

    List<Voiture> findByMarque (Marque marque);
    List<Voiture> findByMarqueIdMarque(Long id);

    List<Voiture> findByOrderByTypeVoitureAsc();

    List<Voiture> trierVoitureTypeVoitureCouleur ();

    List<Marque> getAllMarque();
    VoitureDTO convertEntityToDto (Voiture voiture);
    Voiture convertDtoToEntity(VoitureDTO voitureDTO);
}
