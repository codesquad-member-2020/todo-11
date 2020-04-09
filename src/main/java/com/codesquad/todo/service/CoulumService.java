package com.codesquad.todo.service;

import com.codesquad.todo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CoulumService {

  @Autowired
  NoteRepository noteRepository;

  public Map<String, Object> getColumns() {
    Map<String, Object> result = new HashMap<>();
    result.put("columns", noteRepository.findDistinctByColumnNameAndDeletedFalse());

    return result;
  }
}
