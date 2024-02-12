package ec.edu.ups.productoservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Ropa {

    @Id
    private String id;
    private String nombre;
    private Double precio;
    private String categoria;

    public Ropa() {
        // Constructor por defecto necesario para Spring
    }

    public Ropa(String id, String nombre, Double precio, String categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // Getters y Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }


    @Override
    public String toString() {
        return "Ropa{" +
               "id='" + id + '\'' +
               ", nombre='" + nombre + '\'' +
               ", precio='" + precio + '\'' +
               ", categoria='" + categoria + '\'' +
               '}';
    }

    // Implementa equals y hashCode si es necesario
}
