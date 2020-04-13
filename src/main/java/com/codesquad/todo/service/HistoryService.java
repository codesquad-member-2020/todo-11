package com.codesquad.todo.service;

import com.codesquad.todo.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class HistoryService {

  @Autowired
  HistoryRepository historyRepository;

  public Map<String, Object> create() {
    Map<String, Object> result = new HashMap<>();
    result.put("history", historyRepository.findAll());

    return result;
  }

  public Map<String, Object> getAllByUser(String userId) {
    Map<String, Object> result = new HashMap<>();
    result.put("history", historyRepository.findAll());

    return result;
  }
}
