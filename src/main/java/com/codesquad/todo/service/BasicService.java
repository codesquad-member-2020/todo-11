package com.codesquad.todo.service;

import java.util.HashMap;
import java.util.Map;

public class BasicService {

  protected <T> Map<String, T> getResultMap(String key, T value) {
    Map<String, T> result = new HashMap<>();
    result.put(key, value);
    return result;
  }
}
