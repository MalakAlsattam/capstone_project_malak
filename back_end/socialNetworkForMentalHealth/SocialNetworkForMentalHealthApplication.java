package com.example.socialNetworkForMentalHealth;

import com.example.socialNetworkForMentalHealth.model.Repositry.UserRepositry;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackageClasses = UserRepositry.class)
@SpringBootApplication

public class SocialNetworkForMentalHealthApplication {

	public static void main(String[] args) {
		SpringApplication.run(SocialNetworkForMentalHealthApplication.class, args);
	}

}
