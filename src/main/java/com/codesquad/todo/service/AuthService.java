package com.codesquad.todo.service;

import com.codesquad.todo.util.TokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Map;

@Slf4j
@Service
public class AuthService extends BasicService {

  public Map<String, ?> login(String userId) {
    return getResultMap("loginToken", TokenUtil.create(userId));
  }
}
