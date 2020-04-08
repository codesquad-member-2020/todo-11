package com.codesquad.todo.exception;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.ErrorMessages;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@ControllerAdvice
public class CustomAdvice {

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiResponse exception(Exception e) {
    Map<String, Object> response = new HashMap<>();
    response.put("errorTrace", e.getMessage());

    return new ApiResponse(ErrorMessages.INTERNAL_SERVER_ERROR, response);
  }
}
