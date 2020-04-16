package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.AuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Validated
@Api(tags = "Prod")
@RequestMapping("/api/login")
public class AuthController {

  @Autowired
  private AuthService authService;

  @ApiOperation(value = "", notes = "Get JWT token")
  @GetMapping
  public ApiResponse login(@RequestParam String userId) {
    return new ApiResponse(SuccessMessages.SUCCESS, authService.login(userId));
  }
}
