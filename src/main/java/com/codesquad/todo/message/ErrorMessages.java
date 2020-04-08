package com.codesquad.todo.message;

import org.springframework.http.HttpStatus;

public class ErrorMessages {
  public static final String INTERNAL_SERVER_ERROR = HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase();
}
