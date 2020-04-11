package com.codesquad.todo.message;

import org.springframework.http.HttpStatus;

public class ErrorMessages {
  public static final String EXCEPTION = HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase();
  public static final String HTTP_MESSAGE_NOT_READABLE_EXCEPTION = "요청 값을 이해할 수 없습니다";
  public static final String METHOD_ARGUMENT_NOT_VALID_EXCEPTION = "요청 값이 적절하지 않습니다";
  public static final String NO_SUCH_ELEMENT_EXCEPTION = "요청 값의 객체를 찾을 수 없습니다";
  public static final String DB_ACTION_EXECUTION_EXCEPTION = "DB 입력에 실패하였습니다";

  public static final String NO_SUCH_NOTE_OF_REQUEST_ID = "요청 ID 의 NOTE 를 찾을 수 없습니다";
  public static final String UNAUTHORIZED_EXCEPTION = "로그인이 필요합니다";
}
