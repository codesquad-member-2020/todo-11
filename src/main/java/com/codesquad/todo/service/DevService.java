package com.codesquad.todo.service;

import com.codesquad.todo.bean.Category;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.repository.CategoryRepository;
import com.codesquad.todo.repository.HistoryRepository;
import com.codesquad.todo.repository.NoteRepository;
import com.codesquad.todo.util.TokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@Transactional
public class DevService {

  private final NoteRepository noteRepository;
  private final CategoryRepository categoryRepository;
  private final HistoryRepository historyRepository;
  private final NoteService noteService;

  public DevService(NoteRepository noteRepository, CategoryRepository categoryRepository,
                    HistoryRepository historyRepository, NoteService noteService)
  {
    this.noteRepository = noteRepository;
    this.categoryRepository = categoryRepository;
    this.historyRepository = historyRepository;
    this.noteService = noteService;
  }

  public Map<String, Object> getAllNote() {
    Map<String, Object> result = new HashMap<>();
    result.put("notes", noteRepository.findAll());

    return result;
  }

  public Map<String, Object> getAllCategory() {
    Map<String, Object> result = new HashMap<>();
    result.put("category", categoryRepository.findAll());

    return result;
  }

  public Map<String, Object> getAllHistory() {
    Map<String, Object> result = new HashMap<>();
    result.put("history", historyRepository.findAll());

    return result;
  }

  public boolean verifyToken(String token) {
    return TokenUtil.verify(token);
  }

  public void init() {
    categoryRepository.save(new Category("해야할일"));
    categoryRepository.save(new Category("하는중"));
    categoryRepository.save(new Category("다했어"));

    categoryRepository.save(new Category("다했어", true));
    categoryRepository.save(new Category("다했어", true));


    for (int i = 1; i < 4; i++) {
      noteService.create(new Note(1L, "dan 이 해야할 일 " + i + "\n 2번쨰 줄", "dan"));
      noteService.create(new Note(1L, "anonymous 이 해야할 일 " + i + "\n 2번쨰 줄", "anonymous"));
      noteService.create(new Note(1L, "jinie 이 해야할 일 " + i + "\n 2번쨰 줄", "jinie"));

      noteService.create(new Note(2L, "sally 이 하는중 " + i + "\n 2번쨰 줄", "sally"));
      noteService.create(new Note(2L, "anonymous 이 하는중 " + i + "\n 2번쨰 줄", "anonymous"));
      noteService.create(new Note(2L, "jinie 이 하는중 " + i + "\n 2번쨰 줄", "jinie"));

      noteService.create(new Note(3L, "dan 이 다했어 " + i + "\n 2번쨰 줄", "dan"));
      noteService.create(new Note(3L, "anonymous 이 다했어 " + i + "\n 2번쨰 줄", "anonymous"));
      noteService.create(new Note(3L, "sally 이 다했어 " + i + "\n 2번쨰 줄", "sally"));
    }
  }
}
