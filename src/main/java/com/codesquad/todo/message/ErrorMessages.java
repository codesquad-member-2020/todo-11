package com.codesquad.todo.message;

import org.springframework.http.HttpStatus;

public class ErrorMessages {
  public static final String EXCEPTION = HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase();
  public static final String HTTP_MESSAGE_NOT_READABLE_EXCEPTION = "요청 값을 이해할 수 없습니다";
  public static final String METHOD_ARGUMENT_NOT_VALID_EXCEPTION = "요청 값이 적절하지 않습니다";
}
