package com.codesquad.todo.repository;

import com.codesquad.todo.bean.Note;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends CrudRepository<Note, Long> {

  List<Note> findAll();

  @Query("SELECT t.id, " +
         "       t.user, " +
         "       t.category_id, " +
         "       t.content, " +
         "       t.created_at, " +
         "       t.updated_at, " +
         "       t.rank, " +
         "       t.deleted " +
         "FROM note t " +
         "WHERE t.category_id = :categoryId " +
         "  AND t.deleted = FALSE " +
         "  AND t.user = :user " +
         "ORDER BY t.rank ASC")
  List<Note> findAllByCategoryAndDeletedFalse(long categoryId, String user);

  @Query("SELECT t.id, " +
         "       t.user, " +
         "       t.category_id, " +
         "       t.content, " +
         "       t.created_at, " +
         "       t.updated_at, " +
         "       t.rank, " +
         "       t.deleted " +
         "FROM note t " +
         "WHERE t.category_id = :categoryId " +
         "  AND t.rank >= :rank " +
         "  AND t.id != :id " +
         "ORDER BY t.rank DESC")
  List<Note> findAllByCategoryAndRankAfterOrderByRankDescExceptId(long categoryId, long rank, long id);

  @Query("SELECT max(t.rank) " +
         "FROM note t " +
         "WHERE t.category_id = :categoryId")
  Optional<Long> getRankByCategory(long categoryId);
}
