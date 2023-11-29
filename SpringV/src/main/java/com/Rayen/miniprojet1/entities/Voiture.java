package com.Rayen.miniprojet1.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVoiture;

    @NotNull

    private String typeVoiture;


    private double price;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @PastOrPresent
    private Date dateMisenService;

    @NotNull

    private String couleur;


    private int capacity;

    @ManyToOne
    private Marque marque;

    @OneToOne
    private Image image;



}
