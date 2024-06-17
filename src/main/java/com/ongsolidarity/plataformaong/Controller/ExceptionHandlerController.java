package com.ongsolidarity.plataformaong.Controller;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity handleEntityNotFoundException(EntityNotFoundException ex) {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity handleRuntimeException(RuntimeException ex) {
        // Aqui, envolvemos a mensagem de erro em um objeto JSON estruturado
        ErrorMessage errorMessage = new ErrorMessage(ex.getMessage());
        return ResponseEntity.badRequest().body(errorMessage);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity handleException(Exception ex) {
        return ResponseEntity.internalServerError().body(ex.getMessage());
    }

    // Classe auxiliar para representar a mensagem de erro como JSON
    private static class ErrorMessage {
        private final String message;

        public ErrorMessage(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}
