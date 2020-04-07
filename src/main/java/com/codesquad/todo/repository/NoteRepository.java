package com.codesquad.todo.repository;

import com.codesquad.todo.bean.Note;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

  List<Note> findAll();

  @Query("select note.id, note.column_name, note.content, note.created_at, note.updated_at, note.writer from note where column_name = :columnName")
  List<Note> findAllByColumnName(String columnName);

  @Query("select distinct note.column_name from note")
  List<String> findDistinctByColumnName();
}
