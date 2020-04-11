package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.NoteService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@Validated
@Api(tags = "Prod")
@RequestMapping("/api/notes")
public class NoteController {

  @Autowired
  NoteService noteService;

  @ApiOperation(value = "", notes = "Create note")
  @ResponseStatus(HttpStatus.OK)
  @PostMapping
  public ApiResponse create(@Valid @RequestBody Note note) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.create(note));
  }

  @ApiOperation(value = "", notes = "Soft delete note")
  @ResponseStatus(HttpStatus.OK)
  @DeleteMapping
  public ApiResponse delete(@RequestParam Long id) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.delete(id));
  }

  @ApiOperation(value = "", notes = "Get all notes about specific category")
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/category")
  public ApiResponse getSpecificCategory(@RequestParam int categoryId) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.getSpecificCategory(categoryId));
  }
}
