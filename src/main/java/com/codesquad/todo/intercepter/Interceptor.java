package com.codesquad.todo.intercepter;

import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.service.HistoryService;
import com.codesquad.todo.util.TokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
public class Interceptor extends HandlerInterceptorAdapter {

  private final HistoryService historyService;

  public Interceptor(HistoryService historyService) {
    this.historyService = historyService;
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
      throws Exception
  {
    log.debug("### preHandle userId : {}", TokenUtil.getUserId(request.getHeader(AuthMessages.HEADER_AUTH)));
    return super.preHandle(request, response, handler);
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response
      , Object handler, ModelAndView modelAndView) throws Exception
  {
    super.postHandle(request, response, handler, modelAndView);
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
      throws Exception
  {
    if (ObjectUtils.isEmpty(ex)) {
      log.debug("### afterCompletion userId : {}", TokenUtil.getUserId(request.getHeader(AuthMessages.HEADER_AUTH)));
      log.debug("### afterCompletion : {}", request.getAttribute("body"));
      historyService.create(request);
    }
    super.afterCompletion(request, response, handler, ex);
  }
}