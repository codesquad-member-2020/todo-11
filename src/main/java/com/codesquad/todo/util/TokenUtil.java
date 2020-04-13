package com.codesquad.todo.util;

import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.message.ErrorMessages;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.nio.charset.StandardCharsets;
import java.util.Date;

public class TokenUtil {

  public static String create(String userId) {
    try {
      return Jwts.builder()
          .setHeaderParam("typ", "JWT")
          .setIssuer("Dan")
          .setIssuedAt(new Date(System.currentTimeMillis()))
          .setExpiration(new Date(System.currentTimeMillis() + AuthMessages.EXPIRED_TIME))
          .setSubject("loginToken")
          .claim("userId", userId)
          .signWith(SignatureAlgorithm.HS256, generateKey())
          .compact();
    } catch (Exception e) {
      throw new RuntimeException(ErrorMessages.FAILED_MAKE_JWT);
    }
  }

  public static boolean verify(String token) {
    try {
      Jws<Claims> claims = Jwts.parser()
          .setSigningKey(generateKey())
          .parseClaimsJws(token);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  public static String getUserId(String token) {
    try {
      return Jwts.parser()
          .setSigningKey(generateKey())
          .parseClaimsJws(token)
          .getBody().get("userId")
          .toString();
    } catch (Exception e) {
      //      throw new UnauthorizedException();
      return "anonymous";
    }
  }

  private static byte[] generateKey() {
    return AuthMessages.SALT.getBytes(StandardCharsets.UTF_8);
  }
}
