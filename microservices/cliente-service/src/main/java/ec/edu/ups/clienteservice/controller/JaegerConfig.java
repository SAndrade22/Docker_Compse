package ec.edu.ups.clienteservice.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.jaegertracing.internal.JaegerTracer;
import io.jaegertracing.internal.samplers.ConstSampler;

@Configuration
public class JaegerConfig {

    @Value("${JAEGER_SERVICE_NAME:cliente-service}")
    private String serviceName;

    @Value("${JAEGER_AGENT_HOST:jaeger}")
    private String jaegerHost;

    @Value("${JAEGER_AGENT_PORT:6831}")
    private int jaegerPort;

    @Value("${JAEGER_SAMPLER_TYPE:const}")
    private String samplerType;

    @Value("${JAEGER_SAMPLER_PARAM:1}")
    private int samplerParam;

    @Bean
    public JaegerTracer jaegerTracer() {
        return new io.jaegertracing.Configuration(serviceName)
                .withSampler(new io.jaegertracing.Configuration.SamplerConfiguration()
                        .withType(samplerType)
                        .withParam(samplerParam))
                .withReporter(new io.jaegertracing.Configuration.ReporterConfiguration()
                        .withSender(new io.jaegertracing.Configuration.SenderConfiguration()
                                .withAgentHost(jaegerHost)
                                .withAgentPort(jaegerPort))
                        .withLogSpans(true))
                .getTracer();
    }
}
