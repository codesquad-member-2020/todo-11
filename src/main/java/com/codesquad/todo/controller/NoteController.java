package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.NoteService;
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
@RequestMapping("/api/notes")
public class NoteController {

  @Autowired
  NoteService noteService;

  @ApiOperation(value = "", notes = "Get all notes", tags = "Mockup")
  @ResponseStatus(HttpStatus.OK)
  @GetMapping
  public ApiResponse getAllNotes() {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.getAllNotes());
  }

  @ApiOperation(value = "", notes = "Create note", tags = "Dev")
  @ResponseStatus(HttpStatus.OK)
  @PostMapping
  public ApiResponse createNote(@Valid @RequestBody Note note) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.createNote(note));
  }

  @ApiOperation(value = "", notes = "Soft delete note", tags = "Dev")
  @ResponseStatus(HttpStatus.OK)
  @DeleteMapping
  public ApiResponse deleteNote(@RequestParam Long id) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.deleteNote(id));
  }

  @ApiOperation(value = "", notes = "Get all notes about specific column", tags = "Dev")
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/column")
  public ApiResponse getSpecificColumnNotes(@RequestParam String columnName) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.getSpecificColumnNotes(columnName));
  }
}
