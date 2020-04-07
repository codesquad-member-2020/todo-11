package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.NoteService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@Validated
@RequestMapping("/api/notes")
public class NoteController {

  @Autowired
  NoteService noteService;

  @ApiOperation(value = "", notes = "Get all notes", tags = "Mockup")
  @GetMapping
  public ResponseEntity<ApiResponse> getAllNotes() {
    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, noteService.getAllNotes()), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Create note", tags = "Dev")
  @PostMapping
  public ResponseEntity<ApiResponse> createNote(@RequestBody Note note) {
    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, noteService.createNote(note)), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Soft delete note", tags = "Dev")
  @DeleteMapping
  public ResponseEntity<ApiResponse> deleteNote(@RequestParam Long id) {
    return new ResponseEntity<>
        (new ApiResponse(SuccessMessages.SUCCESS, noteService.deleteNote(id)), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Get all notes about specific column", tags = "Dev")
  @GetMapping("/column")
  public ResponseEntity<ApiResponse> getSpecificColumnNotes(@RequestParam String columnName) {
    return new ResponseEntity<>
        (new ApiResponse(SuccessMessages.SUCCESS, noteService.getSpecificColumnNotes(columnName)), HttpStatus.OK);
  }
}
