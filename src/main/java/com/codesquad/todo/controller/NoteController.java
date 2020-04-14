package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.bean.Note;
import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.NoteService;
import com.codesquad.todo.util.TokenUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Slf4j
@RestController
@Validated
@Api(tags = "Prod")
@RequestMapping("/api/notes")
public class NoteController {

  @Autowired
  NoteService noteService;

  @ApiOperation(value = "", notes = "Create note")
  @PostMapping
  public ApiResponse create(@Valid @RequestBody Note note, HttpServletRequest request) {
    request.setAttribute("body", note);
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.create(note));
  }

  @ApiOperation(value = "", notes = "Delete note (soft delete)")
  @DeleteMapping
  public ApiResponse delete(@RequestParam Long id) {
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.delete(id));
  }

  @ApiOperation(value = "", notes = "Patch note")
  @PatchMapping
  public ApiResponse patch(@RequestBody Note note, HttpServletRequest request) {
    request.setAttribute("body", note);
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.patch(note));
  }

  @ApiOperation(value = "", notes = "Move note")
  @PatchMapping("move")
  public ApiResponse move(@RequestBody Note note, HttpServletRequest request) {
    request.setAttribute("body", note);
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.move(note));
  }

  @ApiOperation(value = "", notes = "Get all notes about specific category")
  @GetMapping("/category")
  public ApiResponse getSpecificCategory(@RequestParam int categoryId, HttpServletRequest request) {
    String user = TokenUtil.getUserId(request.getHeader(AuthMessages.HEADER_AUTH));
    return new ApiResponse(SuccessMessages.SUCCESS, noteService.getSpecificCategory(categoryId, user));
  }
}
