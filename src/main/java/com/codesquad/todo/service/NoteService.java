package com.codesquad.todo.service;

import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.ErrorMessages;
import com.codesquad.todo.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@Slf4j
@Service
public class NoteService {

  @Autowired
  NoteRepository noteRepository;

  public Map<String, Object> getAll() {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAll());

    return result;
  }

  public Map<String, Object> create(Note note) {
    Map<String, Object> result = new HashMap<>();
    result.put("note", noteRepository.save(note));

    return result;
  }

  public Map<String, Object> delete(Long id) {
    Optional<Note> noteOptional = noteRepository.findById(id);
    Note note = noteOptional.orElseThrow(() -> new NoSuchElementException(ErrorMessages.NO_SUCH_NOTE_OF_REQUEST_ID));

    note.delete();

    Map<String, Object> result = new HashMap<>();
    result.put("note", noteRepository.save(note));

    return result;
  }

  public Map<String, Object> getSpecificCategory(int categoryId) {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAllByCategoryAndDeletedFalse(categoryId));

    return result;
  }
}
