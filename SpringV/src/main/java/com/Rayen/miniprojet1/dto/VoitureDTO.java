package com.Rayen.miniprojet1.dto;


import java.util.Date;

import com.Rayen.miniprojet1.entities.Image;
import com.Rayen.miniprojet1.entities.Marque;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class VoitureDTO {
    private Long idVoiture;
    private String typeVoiture;
    private double price;
    private Date dateMisenService;
    private String couleur;
    private int capacity;
    private Marque marque;
    private Image image;
    private String nomMarque;
}
