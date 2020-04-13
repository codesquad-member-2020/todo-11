package com.codesquad.todo.intercepter;

import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.service.AuthService;
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
public class Intercepter extends HandlerInterceptorAdapter {

  private final AuthService authService;

  public Intercepter(AuthService authService) {
    this.authService = authService;
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
      throws Exception
  {
    log.debug("### preHandle userId : {}", TokenUtil.getUserId(AuthMessages.HEADER_AUTH));
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

    }
    super.afterCompletion(request, response, handler, ex);
  }
}
