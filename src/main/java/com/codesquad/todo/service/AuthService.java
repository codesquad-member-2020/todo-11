package com.codesquad.todo.service;

import com.codesquad.todo.util.TokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class AuthService {

  public Map<String, Object> login(String userId) {
    Map<String, Object> result = new HashMap<>();
    result.put("loginToken", TokenUtil.create(userId));

    return result;
  }
}
