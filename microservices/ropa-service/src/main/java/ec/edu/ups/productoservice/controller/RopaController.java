package ec.edu.ups.productoservice.controller;

import ec.edu.ups.productoservice.model.Ropa;
import ec.edu.ups.productoservice.service.RopaService;
import io.opentracing.Tracer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ropas")
public class RopaController {

    private final RopaService ropaService;
    private final Tracer tracer;

    @Autowired
    public RopaController(RopaService ropaService, Tracer tracer) {
        this.ropaService = ropaService;
        this.tracer = tracer;
    }

    @GetMapping
    public List<Ropa> getAllRopas() {
        var span = tracer.buildSpan("getAllRopas").start();
        try {
            return ropaService.findAllRopas();
        } finally {
            span.finish();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ropa> getRopaById(@PathVariable String id) {
        var span = tracer.buildSpan("getRopaById").start();
        try {
            Optional<Ropa> ropa = ropaService.findRopaById(id);
            return ropa.map(ResponseEntity::ok)
                          .orElseGet(() -> ResponseEntity.notFound().build());
        } finally {
            span.finish();
        }
    }

    @PostMapping
    public Ropa createRopa(@RequestBody Ropa ropa) {
        var span = tracer.buildSpan("createRopa").start();
        try {
            return ropaService.saveRopa(ropa);
        } finally {
            span.finish();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ropa> updateRopa(@PathVariable String id, @RequestBody Ropa ropa) {
        var span = tracer.buildSpan("updateRopa").start();
        try {
            return ropaService.findRopaById(id)
            .map(ropaExistente -> {
                ropa.setId(id);
                return ResponseEntity.ok(ropaService.saveRopa(ropa));
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
        } finally {
            span.finish();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRopa(@PathVariable String id) {
        var span = tracer.buildSpan("deleteRopa").start();
        try {
            if (ropaService.findRopaById(id).isPresent()) {
                ropaService.deleteRopa(id);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } finally {
            span.finish();
        }
    }

}
