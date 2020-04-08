package com.codesquad.todo.bean;

import lombok.Data;

import java.util.Map;

@Data
public class ApiResponse {
  private String message;
  private Map<String, Object> contents;

  public ApiResponse(String message, Map<String, Object> contents) {
    this.message = message;
    this.contents = contents;
  }
}
