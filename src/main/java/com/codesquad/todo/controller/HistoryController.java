package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.service.HistoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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
  HistoryService historyService;

  @ApiOperation(value = "", notes = "Get all category (only login user)")
  @GetMapping
  public ResponseEntity<ApiResponse> getAllByUser(HttpServletRequest request) {
    log.debug("### request : {}", request);
    //    return new ResponseEntity<>(
    //        new ApiResponse(SuccessMessages.SUCCESS, categoryService.getAllDeletedFalse()), HttpStatus.OK);

    return null;
  }

  //  @ApiOperation(value = "", notes = "Create category")
  //  @PostMapping
  //  public ResponseEntity<ApiResponse> create(@RequestBody Category category) {
  //    return new ResponseEntity<>(
  //        new ApiResponse(SuccessMessages.SUCCESS, categoryService.create(category)), HttpStatus.OK);
  //  }
}
