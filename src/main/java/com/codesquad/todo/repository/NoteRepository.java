package com.codesquad.todo.repository;

import com.codesquad.todo.bean.Note;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

  List<Note> findAll();

  @Query(
      "SELECT note.id, note.column_name, note.content, note.created_at, note.updated_at, note.writer, note.is_deleted " +
      "FROM note " +
      "WHERE column_name = :columnName")
  List<Note> findAllByColumnName(String columnName);

  @Query("SELECT DISTINCT note.column_name " +
         "FROM note;")
  List<String> findDistinctByColumnName();
}
