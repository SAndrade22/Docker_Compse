package ec.edu.ups.productoservice.service;

import ec.edu.ups.productoservice.model.Ropa;
import ec.edu.ups.productoservice.repository.RopaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RopaService {

    private final RopaRepository ropaRepository;

    @Autowired
    public RopaService(RopaRepository ropaRepository) {
        this.ropaRepository = ropaRepository;
    }

    public List<Ropa> findAllRopas() {
        return ropaRepository.findAll();
    }

    public Optional<Ropa> findRopaById(String id) {
        return ropaRepository.findById(id);
    }

    public Ropa saveRopa(Ropa ropa) {
        return ropaRepository.save(ropa);
    }

    public void deleteRopa(String id) {
        ropaRepository.deleteById(id);
    }
   
}
