package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.repository.Note;
import com.codesquad.todo.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@Validated
@RequestMapping("/api")
public class TodoController {

  @Autowired
  NoteRepository noteRepository;

  @GetMapping("/login")
  public ResponseEntity<ApiResponse> login() {
    Map<String, Object> response = new HashMap<>();

    response.put("contents", "login sucess");

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }

  @GetMapping("/notes")
  public ResponseEntity<ApiResponse> notes() {
    Map<String, Object> response = new HashMap<>();

    List<Note> noteList = noteRepository.findAll();
    response.put("notes", noteList);

    return new ResponseEntity<>(new ApiResponse(SuccessMessages.SUCCESS, response), HttpStatus.OK);
  }
}
