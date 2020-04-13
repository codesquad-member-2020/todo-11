package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@Api(tags = "Prod")
@RequestMapping("/api/history")
public class HistoryController {

  @Autowired
  CategoryService categoryService;

  @ApiOperation(value = "", notes = "Get all category (only login user)")
  @GetMapping
  public ResponseEntity<ApiResponse> getAllByUser(HttpServletRequest request) {
    log.debug("### request : {}", request);
    return new ResponseEntity<>(
        new ApiResponse(SuccessMessages.SUCCESS, categoryService.getAllDeletedFalse()), HttpStatus.OK);
  }

  //  @ApiOperation(value = "", notes = "Create category")
  //  @PostMapping
  //  public ResponseEntity<ApiResponse> create(@RequestBody Category category) {
  //    return new ResponseEntity<>(
  //        new ApiResponse(SuccessMessages.SUCCESS, categoryService.create(category)), HttpStatus.OK);
  //  }
}
