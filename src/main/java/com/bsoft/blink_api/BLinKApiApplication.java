package com.bsoft.blink_api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.bsoft.blink_api.services.CustomService;

@SpringBootApplication
public class BLinKApiApplication {
	private static final Logger log = LoggerFactory.getLogger(BLinKApiApplication.class);
	
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(BLinKApiApplication.class, args);

		CustomService service = context.getBean(CustomService.class);
		log.info(service.getName());
		log.info(service.getVersion());
		log.info(service.getAuthor());
		log.info(service.getOS());
		log.info(service.getJavaVersion());
	}
}
