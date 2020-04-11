package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.AuthMessages;
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

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@Validated
@Api(tags = "Dev")
@RequestMapping("/dev-api/login")
public class AuthController {

  @Autowired
  AuthService authService;

  @ApiOperation(value = "", notes = "Get JWT token")
  @GetMapping
  public ApiResponse login(@RequestParam String userId) {
    return new ApiResponse(SuccessMessages.SUCCESS, authService.login(userId));
  }

  @ApiOperation(value = "", notes = "Verify JWT token")
  @GetMapping("/verify")
  public ApiResponse verifyToken(HttpServletRequest request) {
    if (authService.verifyToken(request.getHeader(AuthMessages.HEADER_AUTH))) {
      return new ApiResponse(SuccessMessages.SUCCESS, null);
    }

    return new ApiResponse("Error", null);
  }
}
