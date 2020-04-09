package com.codesquad.todo.repository;

import com.codesquad.todo.bean.Note;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

  @Query(
      "SELECT note.id, note.column_name, note.content, note.created_at, note.updated_at, note.writer, note.deleted " +
      "FROM note " +
      "WHERE note.deleted = FALSE")
  List<Note> findAllAndDeletedFalse();

  @Query(
      "SELECT note.id, note.column_name, note.content, note.created_at, note.updated_at, note.writer, note.deleted " +
      "FROM note " +
      "WHERE column_name = :columnName " +
      "AND note.deleted = FALSE")
  List<Note> findAllByColumnNameAndDeletedFalse(String columnName);

  @Query("SELECT DISTINCT note.column_name " +
         "FROM note " +
         "WHERE note.deleted = FALSE")
  List<String> findDistinctByColumnNameAndDeletedFalse();
}
