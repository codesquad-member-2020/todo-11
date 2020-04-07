package com.codesquad.todo.service;

import com.codesquad.todo.bean.Note;
import com.codesquad.todo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class NoteService {

  @Autowired
  NoteRepository noteRepository;

  public Map<String, Object> getAllNotes() {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAll());

    return result;
  }

  public Map<String, Object> createNote(Note note) {
    Map<String, Object> result = new HashMap<>();
    result.put("note", noteRepository.save(note));

    return result;
  }

  public Map<String, Object> deleteNote(Long id) {
    Optional<Note> noteOptional = noteRepository.findById(id);
    Note note = noteOptional.get();
    note.delete();

    Map<String, Object> result = new HashMap<>();
    result.put("note", noteRepository.save(note));

    return result;
  }

  public Map<String, Object> getSpecificColumnNotes(String columnName) {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAllByColumnName(columnName));

    return result;
  }
}
