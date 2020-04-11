package com.codesquad.todo.repository;

import com.codesquad.todo.bean.Category;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Long> {

  @Query("SELECT t.id, t.name, t.deleted " +
         "FROM category t " +
         "WHERE t.deleted = FALSE")
  List<Category> findAllByDeletedFalse();
}
