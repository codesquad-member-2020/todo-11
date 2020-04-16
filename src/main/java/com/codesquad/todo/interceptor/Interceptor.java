package com.codesquad.todo.interceptor;

import com.codesquad.todo.service.HistoryService;
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
      historyService.create(request);
    }

    super.afterCompletion(request, response, handler, ex);
  }
}
