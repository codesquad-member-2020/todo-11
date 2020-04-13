package com.codesquad.todo.repository;

import com.codesquad.todo.bean.History;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HistoryRepository extends CrudRepository<History, Long> {

  List<History> findAll();

  @Query("SELECT t.id, t.user, t.content, t.created_at " +
         "FROM history t " +
         "WHERE user = :userId")
  List<History> findAllByUserId(String userId);
}
