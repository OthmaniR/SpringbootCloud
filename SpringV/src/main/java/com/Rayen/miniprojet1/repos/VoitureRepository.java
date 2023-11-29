package com.Rayen.miniprojet1.repos;

import com.Rayen.miniprojet1.entities.Voiture;
import com.Rayen.miniprojet1.entities.Marque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "rest")
public interface VoitureRepository extends JpaRepository<Voiture, Long> {

    List<Voiture> findByTypeVoiture(String typeVoiture);
    List<Voiture> findByTypeVoitureContains(String typeVoiture);

    @Query("select b from Voiture b where b.typeVoiture like %?1 and b.couleur > ?2")
    List<Voiture> findByTypeVoitureCouleur (String typeVoiture, String couleur);

    @Query("select b from Voiture b where b.marque = ?1")
    List<Voiture> findByMarque (Marque marque);

    List<Voiture> findByMarqueIdMarque(Long id);

    List<Voiture> findByOrderByTypeVoitureAsc();

    @Query("select b from Voiture b order by b.typeVoiture ASC, b.couleur DESC")
    List<Voiture> trierVoitureTypeVoitureCouleur ();

}
