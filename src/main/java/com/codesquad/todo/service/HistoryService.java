package com.codesquad.todo.service;

import com.codesquad.todo.bean.History;
import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.repository.HistoryRepository;
import com.codesquad.todo.util.TokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.Map;

@Slf4j
@Service
public class HistoryService extends BasicService {

  @Autowired
  private HistoryRepository historyRepository;

  public void create(HttpServletRequest request) {
    String userId = TokenUtil.getUserId(request.getHeader(AuthMessages.HEADER_AUTH));
    String method = request.getMethod();
    String uri = request.getRequestURI();

    StringBuilder sb = new StringBuilder();
    sb.append("{parameter: ").append(getParameter(request))
        .append(", body: ").append(getBody(request))
        .append("}");
    String param = sb.toString();

    History history = new History(userId, method, uri, param);
    historyRepository.save(history);
  }

  public Map<String, ?> getAllByUser(String userId) {
    return getResultMap("history", historyRepository.findAllByUserId(userId));
  }

  private String getParameter(HttpServletRequest request) {
    Enumeration params = request.getParameterNames();
    StringBuilder sb = new StringBuilder();

    while (params.hasMoreElements()) {
      String key = (String) params.nextElement();
      sb.append(key + ": ").append(request.getParameter(key)).append(",");
    }

    if (sb.length() > 0) {
      sb.deleteCharAt(sb.length() - 1);
    }

    sb.insert(0, "{").append("}");

    return sb.toString();
  }

  private String getBody(HttpServletRequest request) {
    return "{" + request.getAttribute("body") + "}";
  }
}
