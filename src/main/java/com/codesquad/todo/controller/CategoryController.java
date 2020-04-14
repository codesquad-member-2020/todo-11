package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Category;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@Api(tags = "Prod")
@RequestMapping("/api/category")
public class CategoryController {

  @Autowired
  CategoryService categoryService;

  @ApiOperation(value = "", notes = "Get all category (not deleted)")
  @GetMapping
  public ResponseEntity<ApiResponse> getAllDeletedFalse() {
    return new ResponseEntity<>(
        new ApiResponse(SuccessMessages.SUCCESS, categoryService.getAllDeletedFalse()), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Create category")
  @PostMapping
  public ResponseEntity<ApiResponse> create(@RequestBody Category category) {
    return new ResponseEntity<>(
        new ApiResponse(SuccessMessages.SUCCESS, categoryService.create(category)), HttpStatus.OK);
  }
}
