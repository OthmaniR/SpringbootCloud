package com.Rayen.miniprojet1.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "typeVoiture", types = { Voiture.class })
public interface VoitureProjection {
    public String getTypeVoiture();
}
