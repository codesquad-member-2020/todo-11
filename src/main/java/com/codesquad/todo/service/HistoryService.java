package com.codesquad.todo.service;

import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.repository.HistoryRepository;
import com.codesquad.todo.util.TokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class HistoryService {

  @Autowired
  HistoryRepository historyRepository;

  public Map<String, Object> create(HttpServletRequest request) {
    Map<String, Object> result = new HashMap<>();
    //    result.put("history", historyRepository.findAll());
    String userId = TokenUtil.getUserId(request.getHeader(AuthMessages.HEADER_AUTH));

    log.debug("### history create : {}", request.toString());

    return result;
  }

  public Map<String, Object> getAllByUser(String userId) {
    Map<String, Object> result = new HashMap<>();
    result.put("history", historyRepository.findAllByUserId(userId));

    return result;
  }
}
