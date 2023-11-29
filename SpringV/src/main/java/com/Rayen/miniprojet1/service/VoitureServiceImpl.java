package com.Rayen.miniprojet1.service;

import com.Rayen.miniprojet1.dto.VoitureDTO;
import com.Rayen.miniprojet1.entities.Voiture;
import com.Rayen.miniprojet1.entities.Marque;
import com.Rayen.miniprojet1.repos.VoitureRepository;
import com.Rayen.miniprojet1.repos.MarqueRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VoitureServiceImpl implements VoitureService {
    @Autowired
    private VoitureRepository voitureRepository;
    @Autowired
    private MarqueRepository marqueRepository;
    @Autowired
    ModelMapper modelMapper;
    @Override
    public VoitureDTO saveVoiture(VoitureDTO voiture) {
        return convertEntityToDto(voitureRepository.save(convertDtoToEntity(voiture)));
    }

    @Override
    public VoitureDTO updateVoiture(VoitureDTO voiture) {
        return convertEntityToDto(voitureRepository.save(convertDtoToEntity(voiture)));
    }

    @Override
    public void deleteVoiture(Voiture voiture) {
        voitureRepository.delete(voiture);
    }

    @Override
    public void deleteVoitureById(Long id) {
        voitureRepository.deleteById(id);
    }

    @Override
    public VoitureDTO getVoiture(Long id) {
        return convertEntityToDto(voitureRepository.findById(id).get());
    }


    @Override
    public List<VoitureDTO> getAllVoiturees() {
        return voitureRepository.findAll().stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public Page<Voiture> getAllVoitureParPage(int page, int size) {
        return voitureRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public List<Voiture> getAllVoiture() {
        return voitureRepository.findAll();
    }

    @Override
    public List<Voiture> findByTypeVoiture(String typeVoiture) {
        return voitureRepository.findByTypeVoiture(typeVoiture);
    }

    @Override
    public List<Voiture> findByTypeVoitureContains(String typeVoiture) {
        return voitureRepository.findByTypeVoitureContains(typeVoiture);
    }

    @Override
    public List<Voiture> findByTypeVoitureCouleur(String typeVoiture, String couleur) {
        return voitureRepository.findByTypeVoitureCouleur(typeVoiture, couleur);
    }

    @Override
    public List<Voiture> findByMarque(Marque marque) {
        return voitureRepository.findByMarque(marque);
    }

    @Override
    public List<Voiture> findByMarqueIdMarque(Long id) {
        return voitureRepository.findByMarqueIdMarque(id);
    }

    @Override
    public List<Voiture> findByOrderByTypeVoitureAsc() {
        return voitureRepository.findByOrderByTypeVoitureAsc();
    }

    @Override
    public List<Voiture> trierVoitureTypeVoitureCouleur() {
        return voitureRepository.trierVoitureTypeVoitureCouleur();
    }

    @Override
    public List<Marque> getAllMarque() {
        return marqueRepository.findAll();
    }

    @Override
    public VoitureDTO convertEntityToDto(Voiture voiture) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);

        VoitureDTO voitureDTO = modelMapper.map(voiture, VoitureDTO.class);
        return voitureDTO;
    }
    @Override
    public Voiture convertDtoToEntity(VoitureDTO voitureDTO) {
        Voiture voiture = new Voiture();
        voiture = modelMapper.map(voitureDTO, Voiture.class);
        return voiture;

    }
    }
