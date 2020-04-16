package com.codesquad.todo.service;

import com.codesquad.todo.bean.Category;
import com.codesquad.todo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CategoryService extends BasicService {

  @Autowired
  private CategoryRepository categoryRepository;

  public Map<String, ?> getAll() {
    return getResultMap("category", categoryRepository.findAll());
  }

  public Map<String, ?> getAllDeletedFalse() {
    return getResultMap("category", categoryRepository.findAllByDeletedFalse());
  }

  public Map<String, ?> create(Category category) {
    return getResultMap("category", categoryRepository.save(category));
  }
}
