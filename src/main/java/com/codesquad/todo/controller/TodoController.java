package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.repository.NoteRepository;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@Validated
@RequestMapping("/api")
public class TodoController {

  @Autowired
  NoteRepository noteRepository;

  @ApiOperation(value = "", notes = "Get JWT token", tags = "not complete")
  @GetMapping("/login")
  public ResponseEntity<ApiResponse> login() {
    Map<String, Object> response = new HashMap<>();
    response.put("contents", "login sucess");

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Get all notes", tags = "Mockup")
  @GetMapping("/notes")
  public ResponseEntity<ApiResponse> notes() {
    Map<String, Object> response = new HashMap<>();
    response.put("notes", noteRepository.findAll());

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Get all notes about specific column", tags = "Dev")
  @GetMapping("/notes/column")
  public ResponseEntity<ApiResponse> specificColumnNotes(@RequestParam String columnName) {
    Map<String, Object> response = new HashMap<>();
    response.put("notes", noteRepository.findAllByColumnName(columnName));

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Get all columns", tags = "Dev")
  @GetMapping("/columns")
  public ResponseEntity<ApiResponse> columns() {
    Map<String, Object> response = new HashMap<>();
    response.put("columns", noteRepository.findDistinctByColumnName());

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Create note", tags = "Dev")
  @PostMapping("/note")
  public ResponseEntity<ApiResponse> note(@RequestBody Note note) {
    Map<String, Object> response = new HashMap<>();
    response.put("note", noteRepository.save(note));

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }

  @ApiOperation(value = "", notes = "Soft delete note", tags = "Dev")
  @DeleteMapping("/note")
  public ResponseEntity<ApiResponse> specificColumnNotes(@RequestParam Long id) {
    Optional<Note> noteOptional = noteRepository.findById(id);
    Note note = noteOptional.get();
    note.delete();
    noteRepository.save(note);

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, null), HttpStatus.OK);
  }
}
