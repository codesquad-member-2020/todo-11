package com.codesquad.todo.service;

import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.ErrorMessages;
import com.codesquad.todo.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@Slf4j
@Service
@Transactional
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
    Note note = noteOptional.orElseThrow(() -> new NoSuchElementException(ErrorMessages.NO_SUCH_NOTE_OF_REQUEST_ID));

    note.delete();

    Map<String, Object> result = new HashMap<>();
    result.put("note", noteRepository.save(note));

    return result;
  }

  public Map<String, Object> getSpecificColumnNotes(String columnName) {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAllByColumnNameAndDeletedFalse(columnName));

    return result;
  }

  public Map<String, Object> patchNote(Note note) {
    Optional<Note> noteOptional = noteRepository.findById(note.getId());
    Note findNote = noteOptional.orElseThrow(
        () -> new NoSuchElementException(ErrorMessages.NO_SUCH_NOTE_OF_REQUEST_ID));

    findNote.patch(note);

    Map<String, Object> result = new HashMap<>();
    result.put("findNote", noteRepository.save(findNote));

    return result;
  }
}
