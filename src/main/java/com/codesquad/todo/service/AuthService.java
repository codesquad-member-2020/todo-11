package com.codesquad.todo.service;

import com.codesquad.todo.message.AuthMessages;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class AuthService {

  private final long MINUTE_10 = (1000L * 60L * 10L);

  public Map<String, Object> login(String userId) {
    Map<String, Object> result = new HashMap<>();
    result.put("loginToken", create(userId));

    return result;
  }

  public boolean verifyToken(String token) {
    try {
      Jws<Claims> claims = Jwts.parser()
          .setSigningKey(this.generateKey())
          .parseClaimsJws(token);

      return true;
    } catch (Exception e) {
      log.error("Making JWT Key Error ::: {}", e.getMessage());

      return false;
    }
  }

  private String create(String value) {

    String jwt = null;
    try {
      jwt = Jwts.builder()
          .setHeaderParam("typ", "JWT")
          .setIssuer("Dan")
          .setIssuedAt(new Date(System.currentTimeMillis()))
          .setExpiration(new Date(System.currentTimeMillis() + MINUTE_10))
          .setSubject("loginToken")
          .claim("userId", value)
          .signWith(SignatureAlgorithm.HS256, this.generateKey())
          .compact();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return jwt;
  }

  private byte[] generateKey() throws Exception {
    return AuthMessages.SALT.getBytes("UTF-8");
  }
}
