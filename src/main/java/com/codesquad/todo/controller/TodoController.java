package com.codesquad.todo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Validated
@RequestMapping("/api")
public class TodoController {

  @GetMapping("/login")
  public String login() throws Exception {
    log.debug("### dev : login");
    log.info("### real : login");
    return "login success";
  }
}
