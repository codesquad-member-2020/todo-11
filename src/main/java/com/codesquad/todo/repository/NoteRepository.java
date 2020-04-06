package com.codesquad.todo.repository;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

  List<Note> findAll();
}
