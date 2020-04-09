package com.codesquad.todo.bean;

import lombok.Data;

@Data
public class ErrorResponse {
  private String message;
  private String errorTrace;

  public ErrorResponse(String message, String errorTrace) {
    this.message = message;
    this.errorTrace = errorTrace;
  }
}
