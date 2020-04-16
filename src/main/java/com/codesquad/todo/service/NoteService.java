package com.codesquad.todo.service;

import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.ErrorMessages;
import com.codesquad.todo.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Slf4j
@Service
@Transactional
public class NoteService extends BasicService {

  @Autowired
  private NoteRepository noteRepository;

  public Map<String, ?> create(Note note) {
    long rank = noteRepository.getRankByCategory(note.getCategoryId()).orElse(0L);
    note.setRank(rank + 1L);

    return getResultMap("note", noteRepository.save(note));
  }

  public Map<String, ?> delete(Long id) {
    Note findNote = findById(id);
    findNote.delete();

    return getResultMap("note", noteRepository.save(findNote));
  }

  public Map<String, ?> getSpecificCategory(Long categoryId, String user) {
    return getResultMap("notes", noteRepository.findAllByCategoryAndDeletedFalse(categoryId, user));
  }

  public Map<String, ?> patch(Note note) {
    Note findNote = findById(note.getId());
    findNote.patch(note);

    return getResultMap("note", noteRepository.save(findNote));
  }

  public Map<String, Object> move(Note note) {
    Note findNote = findById(note.getId());
    List<Note> findNotes
        = noteRepository.findAllByCategoryAndRankAfterOrderByRankDescExceptId(findNote.getCategoryId(),
                                                                              note.getRank(),
                                                                              findNote.getId());

    for (Note n : findNotes) {
      log.debug("### n : {}", n);
      n.setRank(n.getRank() + 1L);
      noteRepository.save(n);
    }

    findNote.patch(note);

    return getResultMap("note", noteRepository.save(findNote));
  }

  private Note findById(Long id) {
    return noteRepository.findById(id).orElseThrow(
        () -> new NoSuchElementException(ErrorMessages.NO_SUCH_NOTE_OF_REQUEST_ID));
  }
}
