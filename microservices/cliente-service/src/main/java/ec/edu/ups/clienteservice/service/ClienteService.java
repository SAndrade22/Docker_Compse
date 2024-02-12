package ec.edu.ups.clienteservice.service;

import ec.edu.ups.clienteservice.model.Cliente;
import ec.edu.ups.clienteservice.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<Cliente> findAllClientes() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> findClienteById(String id) {
        return clienteRepository.findById(id);
    }

    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public void deleteCliente(String id) {
        clienteRepository.deleteById(id);
    }
}
