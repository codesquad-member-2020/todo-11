package com.codesquad.todo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

  private ApiInfo metadata() {
    return new ApiInfoBuilder()
        .title("Todo-11")
        .description("Todo-11 Api made by Dan")
        .version("0.0.1")
        .build();
  }

  @Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2)
        .groupName("Api")
        .select()
        .apis(RequestHandlerSelectors.any())
        .paths(PathSelectors.ant("/api/*"))
        .build()
        .apiInfo(metadata());
  }
}
