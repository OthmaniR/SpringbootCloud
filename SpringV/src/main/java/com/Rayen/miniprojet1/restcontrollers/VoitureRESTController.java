package com.Rayen.miniprojet1.restcontrollers;

import com.Rayen.miniprojet1.dto.VoitureDTO;
import com.Rayen.miniprojet1.entities.Voiture;
import com.Rayen.miniprojet1.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class VoitureRESTController {

        @Autowired
        VoitureService voitureService;

        @RequestMapping(path="all" ,method = RequestMethod.GET)
        public List<Voiture> getAllVoiture() {
            return voitureService.getAllVoiture();
        }

        @RequestMapping(value = "/getbyid/{id}", method = RequestMethod.GET)
        public VoitureDTO getVoitureById(@PathVariable("id") Long id) {
            return voitureService.getVoiture(id);
        }

        @RequestMapping(path="/addvoiture",method = RequestMethod.POST)
         public VoitureDTO saveVoiture(@RequestBody VoitureDTO voitureDTO) {
        return voitureService.saveVoiture(voitureDTO);
    }

        @RequestMapping(path="/updatevoiture",method = RequestMethod.PUT)
        public VoitureDTO updateVoiture(@RequestBody VoitureDTO voitureDTO) {
        return voitureService.updateVoiture(voitureDTO);
    }

    @RequestMapping(value = "/delvoiture/{id}", method = RequestMethod.DELETE)
    public void deleteVoiture(@PathVariable("id") Long id) {
        voitureService.deleteVoitureById(id);
    }

    @RequestMapping(value = "/voituremarque/{idMarque}", method = RequestMethod.GET)
    public List<Voiture> findByMarqueIdMarque(@PathVariable("idMarque") Long idMarque) {
        return voitureService.findByMarqueIdMarque(idMarque);
    }

    @RequestMapping(value="/voitureByname/{nomMarque}",method = RequestMethod.GET)
    public List<Voiture> findByTypeVoitureContains(@PathVariable("nomMarque") String nomMarque) {
        return voitureService.findByTypeVoitureContains(nomMarque);
    }

}



