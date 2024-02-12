package ec.edu.ups.clienteservice.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Cliente {

    @Id
    private String id;
    private String nombre;
    private String email;
    private String telefono;

    public Cliente() {
       
    }

    public Cliente(String id, String nombre, String email, String telefono) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    

    @Override
    public String toString() {
        return "Cliente{" +
               "id='" + id + '\'' +
               ", nombre='" + nombre + '\'' +
               ", email='" + email + '\'' +
               ", telefono='" + telefono + '\'' +
               '}';
    }

    
}
