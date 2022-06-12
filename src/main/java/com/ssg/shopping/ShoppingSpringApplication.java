package com.ssg.shopping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;


@EnableAspectJAutoProxy
@SpringBootApplication
public class ShoppingSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingSpringApplication.class, args);
	}

}
