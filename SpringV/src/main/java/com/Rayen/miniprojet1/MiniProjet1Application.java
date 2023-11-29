package com.Rayen.miniprojet1;

import com.Rayen.miniprojet1.entities.Voiture;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication

public class MiniProjet1Application implements CommandLineRunner{

    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(MiniProjet1Application.class, args);
    }
    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Voiture.class);
    }
    @Bean
    public ModelMapper modelMapper()
    {
        return new ModelMapper();
    }

}
