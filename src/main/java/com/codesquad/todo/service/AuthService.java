package com.codesquad.todo.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

  public Map<String, Object> login() {
    Map<String, Object> result = new HashMap<>();
    result.put("contents", "login sucess");

    return result;
  }
}
