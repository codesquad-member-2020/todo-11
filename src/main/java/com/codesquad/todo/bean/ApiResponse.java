package com.codesquad.todo.bean;

import lombok.Data;

import java.util.Map;

@Data
public class ApiResponse {
  private String message;
  private Map<String, ?> contents;

  public ApiResponse(String message, Map<String, ?> contents) {
    this.message = message;
    this.contents = contents;
  }
}
