package ec.edu.ups.productoservice.repository;

import ec.edu.ups.productoservice.model.Ropa;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RopaRepository extends MongoRepository<Ropa, String> {
    Ropa findByCategoria(String categoria);
}
