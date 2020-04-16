package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Category;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@Api(tags = "Prod")
@RequestMapping("/api/category")
public class CategoryController {

  @Autowired
  private CategoryService categoryService;

  @ApiOperation(value = "", notes = "Get all category (not deleted)")
  @GetMapping
  public ApiResponse getAllDeletedFalse() {
    return new ApiResponse(SuccessMessages.SUCCESS, categoryService.getAllDeletedFalse());
  }

  @ApiOperation(value = "", notes = "Create category")
  @PostMapping
  public ApiResponse create(@RequestBody Category category, HttpServletRequest request) {
    request.setAttribute("body", category);
    return new ApiResponse(SuccessMessages.SUCCESS, categoryService.create(category));
  }
}
