package com.codesquad.todo.service;

import com.codesquad.todo.bean.Category;
import com.codesquad.todo.repository.CategoryRepository;
import com.codesquad.todo.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@Transactional
public class DevService {

  private final NoteRepository noteRepository;
  private final CategoryRepository categoryRepository;

  public DevService(NoteRepository noteRepository, CategoryRepository categoryRepository) {
    this.noteRepository = noteRepository;
    this.categoryRepository = categoryRepository;
  }

  public Map<String, Object> getAllNote() {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAll());

    return result;
  }

  public Map<String, Object> getAllCategory() {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", categoryRepository.findAll());

    return result;
  }

  public Map<String, Object> init() {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", categoryRepository.findAll());

    categoryRepository.save(new Category("해야할일"));
    categoryRepository.save(new Category("하는중"));
    categoryRepository.save(new Category("다했어"));

    categoryRepository.save(new Category("다했어", true));
    categoryRepository.save(new Category("다했어", true));

    return result;
  }
}
