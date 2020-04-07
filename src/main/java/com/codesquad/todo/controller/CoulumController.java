package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.CoulumService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Validated
@RequestMapping("/api/columns")
public class CoulumController {

  @Autowired
  CoulumService coulumService;

  @ApiOperation(value = "", notes = "Get all columns", tags = "Dev")
  @GetMapping
  public ResponseEntity<ApiResponse> getColumns() {
    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, coulumService.getColumns()), HttpStatus.OK);
  }
}
