package com.codesquad.todo.dev;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.CategoryService;
import com.codesquad.todo.service.NoteService;
import io.swagger.annotations.Api;
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
@Api(tags = "Dev")
@RequestMapping("/dev-api")
public class DevController {

  @Autowired
  CategoryService categoryService;

  @Autowired
  NoteService noteService;

  @ApiOperation(value = "", notes = "Get all notes")
  @GetMapping("/note")
  public ApiResponse getAllNote() {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.getAll());
  }

  @ApiOperation(value = "", notes = "Get all category")
  @GetMapping("/category")
  public ResponseEntity<ApiResponse> getAllCategory() {
    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, categoryService.getAll()), HttpStatus.OK);
  }
}
