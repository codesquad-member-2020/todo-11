package com.codesquad.todo.repository;

import com.codesquad.todo.bean.History;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HistoryRepository extends CrudRepository<History, Long> {

  List<History> findAll();
}
