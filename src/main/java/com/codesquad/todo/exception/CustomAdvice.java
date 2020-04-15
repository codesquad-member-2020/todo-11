package com.codesquad.todo.exception;

import com.codesquad.todo.bean.ErrorResponse;
import com.codesquad.todo.message.ErrorMessages;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.relational.core.conversion.DbActionExecutionException;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

@Slf4j
@RestControllerAdvice
public class CustomAdvice {

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorResponse handleException(Exception e) {
    return new ErrorResponse(ErrorMessages.EXCEPTION, e.getMessage());
  }

  @ExceptionHandler(HttpMessageNotReadableException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ErrorResponse handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
    return new ErrorResponse(ErrorMessages.HTTP_MESSAGE_NOT_READABLE_EXCEPTION, e.getMessage());
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  @ResponseStatus(HttpStatus.FORBIDDEN)
  public ErrorResponse handleHttpMethodArgumentNotValidException(MethodArgumentNotValidException e) {
    return new ErrorResponse(ErrorMessages.METHOD_ARGUMENT_NOT_VALID_EXCEPTION, e.getMessage());
  }

  @ExceptionHandler(NoSuchElementException.class)
  @ResponseStatus(HttpStatus.FORBIDDEN)
  public ErrorResponse handleNoSuchElementException(NoSuchElementException e) {

    return new ErrorResponse(ErrorMessages.NO_SUCH_ELEMENT_EXCEPTION, e.getMessage());
  }

  @ExceptionHandler(DbActionExecutionException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorResponse handleDbActionExecutionException(DbActionExecutionException e) {

    return new ErrorResponse(ErrorMessages.DB_ACTION_EXECUTION_EXCEPTION, e.getMessage());
  }

  @ExceptionHandler(UnauthorizedException.class)
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  public ErrorResponse handleUnauthorizedException(UnauthorizedException e) {

    return new ErrorResponse(ErrorMessages.UNAUTHORIZED_EXCEPTION, e.getMessage());
  }
}
