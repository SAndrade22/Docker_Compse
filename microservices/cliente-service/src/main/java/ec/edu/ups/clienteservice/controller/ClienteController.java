package ec.edu.ups.clienteservice.controller;

import ec.edu.ups.clienteservice.model.Cliente;
import ec.edu.ups.clienteservice.service.ClienteService;
import io.opentracing.Tracer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    private final ClienteService clienteService;
    private final Tracer tracer;

    @Autowired
    public ClienteController(ClienteService clienteService, Tracer tracer) {
        this.clienteService = clienteService;
        this.tracer = tracer;
    }

    @GetMapping
    public List<Cliente> getAllClientes() {
        var span = tracer.buildSpan("getAllClientes").start();
        try {
            return clienteService.findAllClientes();
        } finally {
            span.finish();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable String id) {
        var span = tracer.buildSpan("getClienteById").start();
        try {
            Optional<Cliente> cliente = clienteService.findClienteById(id);
            return cliente.map(ResponseEntity::ok)
                          .orElseGet(() -> ResponseEntity.notFound().build());
        } finally {
            span.finish();
        }
    }

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        var span = tracer.buildSpan("createCliente").start();
        try {
            return clienteService.saveCliente(cliente);
        } finally {
            span.finish();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable String id, @RequestBody Cliente cliente) {
        var span = tracer.buildSpan("updateCliente").start();
        try {
            return clienteService.findClienteById(id)
            .map(clienteExistente -> {
                cliente.setId(id);
                return ResponseEntity.ok(clienteService.saveCliente(cliente));
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
        } finally {
            span.finish();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCliente(@PathVariable String id) {
        var span = tracer.buildSpan("deleteCliente").start();
        try {
            if (clienteService.findClienteById(id).isPresent()) {
                clienteService.deleteCliente(id);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } finally {
            span.finish();
        }
    }

}
