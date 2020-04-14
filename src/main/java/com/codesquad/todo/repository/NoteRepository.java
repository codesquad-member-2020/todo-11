package com.codesquad.todo.repository;

import com.codesquad.todo.bean.Note;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

  List<Note> findAll();

  @Query("SELECT t.id, t.user, t.category_id, t.content, t.created_at, t.updated_at, t.next, t.deleted " +
         "FROM note t " +
         "WHERE t.category_id = :categoryId " +
         "AND t.deleted = FALSE")
  List<Note> findAllByCategoryAndDeletedFalse(int categoryId);
}
