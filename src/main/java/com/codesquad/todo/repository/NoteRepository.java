package com.codesquad.todo.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

  List<Note> findAll();

  @Query("select distinct note.column_name from note")
  List<String> findDistinctByColumnName();
}
