package com.codesquad.todo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

@Slf4j
@SpringBootApplication
public class TodoApplication {

  public static void main(String[] args) {
    SpringApplication.run(TodoApplication.class, args);

    log.debug("### dev : debug start");
    log.info("### real : info start");

    RestTemplate restTemplate = new RestTemplate();
    restTemplate.execute("http://localhost:8080/dev-api/init", HttpMethod.GET, null, null);
  }
}
