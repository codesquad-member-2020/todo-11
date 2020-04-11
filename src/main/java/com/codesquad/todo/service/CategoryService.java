package com.codesquad.todo.service;

import com.codesquad.todo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CategoryService {

  @Autowired
  CategoryRepository categoryRepository;

  public Map<String, Object> getAll() {
    Map<String, Object> result = new HashMap<>();
    result.put("category", categoryRepository.findAll());

    return result;
  }

  public Map<String, Object> getAllDeletedFalse() {
    Map<String, Object> result = new HashMap<>();
    result.put("category", categoryRepository.findAllByDeletedFalse());

    return result;
  }
}
